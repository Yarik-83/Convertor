import { OutlinedInput } from "@mui/material";
import { useStore } from "../store.js";
import { useEffect } from "react";

export default function MyInput({ fn, inputValue }) {
  const { inputValueFrom, setInputValueFrom } = useStore();
  const { inputValueTo, setInputValueTo } = useStore();
  const { selectValueFrom, setSelectValueFrom} = useStore();
  const { selectValueTo, setSelectValueTo } = useStore();
  const { rateFrom, setRateFrom } = useStore();
  const { rateTo, setRateTo } = useStore();
  const { amount, setAmount } = useStore();

   






  function handleChange(e) {
    //  debugger
    const value = e.target.value;
    const pattern = /^$|[0-9]+$/;
    if (pattern.test(value)) {
       fn(Number(value));
   
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
