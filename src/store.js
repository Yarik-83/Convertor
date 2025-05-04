
import { create } from "zustand";
// import { makeData } from "./data";
import dayjs from "dayjs";


const currentDate = dayjs().format()


export const useStore = create((set) => ({
  inputValue: "",
  selectValue: 1,
//   data: makeData(9),
  defaultDate: currentDate,
  setInputValue: (value) => set({ inputValue: value }),
  removeData: () => set({ data: [] }),
  addData: () => set({ data: makeData() }),
  setSelectValue: (value) => set({selectValue: value}),
  setDateValue: (value) => set({ dateValue: value }),
}));


