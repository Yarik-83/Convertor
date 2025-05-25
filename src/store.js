import { create } from "zustand";
import { persist } from 'zustand/middleware';
import dayjs from "dayjs";

const currentDate = dayjs();

export const useStore = create(
  persist((set, get) => ({
    
    defaultDate: currentDate,

    data: [],

    history: [],

    inputValueFrom: "",
    inputValueTo: "",
    inputName: "",

    selectValueFrom: "UAN",
    selectValueTo: "USD",

    rateFrom: "",
    rateTo: "",

    course: 0,

    setCourse: () => {
      const { rateFrom, rateTo } = get();
      set({ course: rateFrom / rateTo });
    },

    setHistory: () => {
      const {
        defaultDate,
        inputValueFrom,
        inputValueTo,
        history,
        selectValueFrom,
        selectValueTo,
      } = get();

      const newHistoryItem = {
        date: defaultDate.format("DD.MM.YYYY"),
        sumFrom: inputValueFrom,
        currencuFrom: selectValueFrom,
        sumTo:  inputValueTo,
        currencuTo: selectValueTo,
      };

      const lastHistoryItem = history.at(-1);
      const maxHistoryLength = 10;

      if(inputValueFrom||inputValueTo){
        if (history.length < maxHistoryLength) {
        if (!history.length) {
          set((state) => ({
            history: [...state.history, newHistoryItem],
          }));
        } else if (
          
          JSON.stringify(lastHistoryItem) !== JSON.stringify(newHistoryItem)
        ) {
          set((state) => ({
            history: [...state.history, newHistoryItem],
          }));
        }
      } else {
        if (JSON.stringify(lastHistoryItem) !== JSON.stringify(newHistoryItem)) {
          const cloneHistory = [...history];
           cloneHistory.shift();
          set(() => ({
            history: [...cloneHistory, newHistoryItem],
          }));
        }
      }
      }
      
    },

    removeHistoru: () => set({history: []}),

    setDateValue: (value) => set({ defaultDate: value }),

    getData: (result) => set({ data: result }),

    setInputValueFrom: (value) =>
      set({ inputValueFrom: value, inputName: "From" }),
    setInputValueTo: (value) => set({ inputValueTo: value, inputName: "To" }),

    setSelectValueFrom: (value) => set({ selectValueFrom: value }),
    setSelectValueTo: (value) => set({ selectValueTo: value }),

    setRateFrom: (value) => set({ rateFrom: value }),
    setRateTo: (value) => set({ rateTo: value }),

    setSumFrom: () => {
      const { course, inputValueFrom } = get();
      if (inputValueFrom) {
        const sumFrom = inputValueFrom * course;
        const resalt = Math.floor(sumFrom * 100) / 100;
        set({ inputValueTo: resalt });
      }
    },
    setSumTo: () => {
      const { course, inputValueTo } = get();
      if (inputValueTo) {
        const sumTo = inputValueTo / course;
        const resalt =  Math.floor(sumTo * 100) / 100
        set({ inputValueFrom: resalt});
      }
    },
  }),
  {
    mame: 'history',
    partialize: (state) => ({ history: state.history }),
  })
);

export function getRateFromSelect(data, value) {
 
  let currencyCur = 1;
  for (let currency of data) {
    if (currency.cc === value) {
      currencyCur = currency.rate;
    }
  }
  return currencyCur;
}
