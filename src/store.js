
import { create } from "zustand";
import { currency } from "./data";
import dayjs from "dayjs";


const currentDate = dayjs().format('DD.MM.YYYY')


export const useStore = create((set) => ({

  data: [],
  defaultDate: currentDate,

  inputValueFrom: "",
  inputValueTo: "",
  selectValueFrom: 'UAN',
  selectValueTo: 'USD',
  rateFrom: '',
  rateTo: '',
  amount:'',

  setDateValue: (value) => set({ dateValue: value }),

  getData: (result) => set({ data: result  }),
  removeData: () => set({ data: [] }),


  setInputValueFrom: (value) => set({ inputValueFrom: value}),
  setInputValueTo: (value) => set({ inputValueTo: value }),

  setSelectValueFrom: (value) => set({selectValueFrom: value}),
  setSelectValueTo: (value) => set({selectValueTo: value}),

  setRateFrom: (value) => set({inputValueFrom: value}),
  setRateTo: (value) => set({inputValueTo: value}),

  // setAmount: (amount)=> set({inputValueTo: amount}),
}));





function colculator() {
  if (rateFrom && inputValueFrom && rateTo) {
   // debugger;
   const sum = (inputValueFrom * rateFrom) / rateTo;
   setInputValueTo(sum.toFixed(3));
  }
}


function getRateFromSelect(data, value) {
  let multiplier = 1;
  for (let obj of data) {
    if (obj.cc === value) {
      selectedCurrency = obj;
      multiplier = obj.rate;
    }
  }
  console.log(multiplier);
  return multiplier;
}
