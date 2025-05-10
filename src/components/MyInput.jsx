import { OutlinedInput } from "@mui/material";
import { useStore } from "../store.js";
import { useEffect } from "react";

export default function MyInput({ fn, inputValue }) {
  const { inputValueFrom, setInputValueFrom } = useStore();
  const { inputValueTo, setInputValueTo } = useStore();
  const { selectValueIHave, setSelectValueIHave } = useStore();
  const { selectValueIWant, setSelectValueIWant } = useStore();
  const { rateIHave, setRateIHave } = useStore();
  const { rateIWant, setRateIWant } = useStore();
  const { amount, setAmount } = useStore();

  function colculator() {
     if (rateIWant && inputValueFrom && rateIWant) {
      // debugger;
      const sum = (rateIHave * inputValueFrom) / rateIWant;
      setInputValueTo(sum.toFixed(2));
      //  setAmount(sum);
     }
    // debugger
  }

  useEffect(() => {
    console.log(rateIWant,inputValueFrom,rateIHave,amount);
    colculator();
  }, [selectValueIHave, selectValueIWant, inputValueFrom]);

  // useEffect(() => {
  //    setSelectValueIHave((rateIWant * inputValueTo)/  rateIHave)
  // console.log(rateIWant,selectValueIWant,rateIHave)
  // }, [selectValueIWant]);

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
