import { create } from "zustand";
import dayjs from "dayjs";

const currentDate = dayjs().format('MM.DD.YYYY')

export const useStore = create((set,get) => ({

  defaultDate: currentDate,
   dateSevenDayAgo: '' ,
  
  data: [],

  inputValueFrom: "",
  inputValueTo: "",

  selectValueFrom: 'UAN',
  selectValueTo: 'USD',

  rateFrom: '',
  rateTo: '',
  

  setDateValue: (value) => set({ defaultDate: value }),

  // setPastDate: () => {
  //   const {defaultDate,dateSevenDayAgo} = get();
  //   console.log(defaultDate)
  //   set({dateSevenDayAgo: defaultDate - 7 })
  //   // console.log(dateSevenDayAgo)
  // },

  getData: (result) => set({ data: result}),
  
  setInputValueFrom: (value) => set({ inputValueFrom: value}),
  setInputValueTo: (value) => set({ inputValueTo: value }), 

  setSelectValueFrom: (value) => set({selectValueFrom: value}),
  setSelectValueTo: (value) => set({selectValueTo: value}),

  setRateFrom: (value) => set({rateFrom: value}),
  setRateTo: (value) => set({rateTo: value}),

  setSumFrom: () => {
    const {rateFrom,rateTo,inputValueFrom} = get();
    const sumFrom = inputValueFrom * rateFrom / rateTo
    set({inputValueTo: Math.floor(sumFrom * 100) / 100 })
  } ,
  setSumTo: () => {
     const {rateFrom,rateTo,inputValueTo} = get();
     const sumTo
      = inputValueTo * rateTo / rateFrom
     set({inputValueFrom: Math.floor(sumTo * 100) / 100 })
  } ,
}));



export function getRateFromSelect(data, value) {
  let multiplier = 1;
  for (let obj of data) {
    if (obj.cc === value) {

      multiplier = obj.rate;
    }
  }
  return multiplier;
}