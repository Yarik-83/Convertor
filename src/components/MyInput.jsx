import { OutlinedInput } from "@mui/material";
import { useStore } from "../store.js";
import { useEffect } from "react";

export default function MyInput({ setInputValue, inputValue, setSum }) {

  const { setInputValueTo, setInputValueFrom } = useStore();


  function handleChange(e) {
     
    const value = Number(e.target.value);
    const pattern = /^$|[0-9]+$/;
    if (pattern.test(value)) {
      if(value){
        setInputValue(value);
        setSum(value)
      }else{
        setInputValueTo('')
        setInputValueFrom('')
      }
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