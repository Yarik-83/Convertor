import { create } from "zustand";
import dayjs from "dayjs";

const currentDate = dayjs()


export const useStore = create((set,get) => ({

  defaultDate: currentDate,
  // dateSevenDayAgo: '' ,
  // dateUrl: currentDate,
  
  data: [],

  inputValueFrom: "",
  inputValueTo: "",

  selectValueFrom: 'UAN',
  selectValueTo: 'USD',

  rateFrom: '',
  rateTo: '',

   setDateValue: (value) => set({ defaultDate: value }),

  // setDateUrl: () => {
  //  const {defaultDate} = get();
  //   set({dateUrl: defaultDate})
  // },


  // setPastDate: (num) => {
  //    const {defaultDate,dateSevenDayAgo} = get();
  //   // console.log(defaultDate)
  //   set({dateSevenDayAgo: defaultDate.subtract(num, 'day')  })
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
    console.log(rateFrom,rateTo,inputValueFrom);
    if(inputValueFrom){
       const sumFrom = inputValueFrom * rateFrom / rateTo;
       console.log(Math.floor(sumFrom * 100) / 100 );
    set({inputValueTo: Math.floor(sumFrom * 100) / 100 })
    } 
  } ,
  setSumTo: () => {
     const {rateFrom,rateTo,inputValueTo} = get();
      console.log(rateFrom,rateTo,inputValueTo);
     if(inputValueTo){
      const sumTo = inputValueTo * rateTo / rateFrom;
       console.log( Math.floor(sumTo * 100) / 100 );
     set({inputValueFrom: Math.floor(sumTo * 100) / 100 })
      }
  } ,
}));



export function getRateFromSelect(data, value) {
  let multiplier = 1;
  for (let obj of data) {
    if (obj.cc === value) {
      multiplier = obj.rate;
      // console.log(`Course on gate: ${multiplier}`);
    }
  }
  return multiplier;
}