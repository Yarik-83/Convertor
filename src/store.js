
import { create } from "zustand";
import { currency } from "./data";
import dayjs from "dayjs";


const currentDate = dayjs().format('DD.MM.YYYY')


export const useStore = create((set) => ({

  data: [],
  defaultDate: currentDate,

  inputValueFrom: "",
  inputValueTo: "",
  selectValueIHave: 'UAN',
  selectValueIWant: 'USD',
  rateIHave: '',
  rateIWant: '',
  amount:'',

  setDateValue: (value) => set({ dateValue: value }),

  getData: (result) => set({ data: result  }),
  removeData: () => set({ data: [] }),


  setInputValueFrom: (value) => set({ inputValueFrom: value}),
  setInputValueTo: (value) => set({ inputValueTo: value }),

  setSelectValueIHave: (value) => set({selectValueIHave: value}),
  setSelectValueIWant: (value) => set({selectValueIWant: value}),

  setRateIHave: (value) => set({rateIHave: value}),
  setRateIWant: (value) => set({rateIWant: value}),

  // setAmount: (amount)=> set({inputValueTo: amount}),
}));



