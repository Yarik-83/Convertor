import { OutlinedInput } from "@mui/material";
import { useStore } from "../store.js";

export default function MyInput({ setInputValue, inputValue }) {
  const {setInputValueFrom,setInputValueTo} = useStore();


  function handleChange(e) {
    const value = e.target.value;
     const pattern = /^$|^\d*\.?\d*$/;
    if (pattern.test(value)) {
      if (value) {
        setInputValue(value);
      } else {
        setInputValueTo("");
        setInputValueFrom("");
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
