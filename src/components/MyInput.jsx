import { OutlinedInput } from "@mui/material";
import { useStore } from "../store.js";
import { useEffect } from "react";

export default function MyInput({ fn, inputValue,buy}) {

  const { inputValueFrom, setInputValueFrom } = useStore();
  const { inputValueTo, setInputValueTo } = useStore();
  const { selectValueFrom, setSelectValueFrom} = useStore();
  const { selectValueTo, setSelectValueTo } = useStore();
  const { data, getData } = useStore();

   
  function getRateFromSelect(data, value) {
    //  debugger
    let multiplier = 1;
    for (let obj of data) {
     
      if (obj.cc === value) {
       multiplier = obj.rate;
      break;
      }
    }
    return multiplier;
  }

  function colculator(from,sum,to,) {
    if (from && sum && to) {
     const result = (sum * from) / to;
     console.log(Math.floor(result*10)/10)
      return  result;
    }
  }
  
//=================

  useEffect(() => {
    // debugger
    const sum = colculator(inputValueFrom,getRateFromSelect(data, selectValueFrom),getRateFromSelect(data, selectValueTo))
    if(sum){
      console.log(sum);
      setInputValueTo(sum)
    } else{
      setInputValueFrom('')
      setInputValueTo('')
    }   
  }, [data,inputValueFrom]);



  // useEffect(() => {
  //   // debugger
  //   const sum = colculator(inputValueTo,getRateFromSelect(data, selectValueTo),getRateFromSelect(data, selectValueFrom))
  //   if(sum){
  //     setInputValueFrom(sum)
  //   } else{
  //     setInputValueFrom('')
  //     setInputValueTo('')
  //   }   
  // }, [data,inputValueTo]);


//======================


  function handleChange(e) {
    //  debugger
    const value = e.target.value;
    const pattern = /^$|[0-9]+$/;
    if (pattern.test(value)) {
       fn(Number(value));
       setInputValueFrom(value)
       
    }
  }

  return (
    <OutlinedInput
      onChange={handleChange}
      value={inputValue}
      component="input"
      name="input-offer"
      variant="outlined"
      type="text"
      autoComplete="off"
      sx={{
        "& .MuiInputBase-input": {
          fontSize: "20px",
          textAlign: "center",
          fontWeight: "600",
          color: "#707C87",
        },
        "&.MuiOutlinedInput-root": {
          width: 220,
          height: 60,
          "&.Mui-focused fieldset": { borderColor: "#C1C2CA" },
          "&.MuiOutlinedInput-input": { color: "#C1C2CA" },
        },
      }}
    />
  );
}
