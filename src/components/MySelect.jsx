import { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useStore } from "../store.js";
import { getRateFromSelect } from "../store.js";

export default function MySelect(props) {
  const [open, setOpen] = useState(false);
  const { selectValue, setSelectValue, setRate } = props;
  const { data } = useStore();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    const currencyRate = getRateFromSelect(data, value);
    setRate(currencyRate);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Select
      content="select"
      sx={{
        "&.MuiSelect-root": {
          width: 120,
          height: 60,
          fontSize: "20px",
          textAlign: "center",
          fontWeight: "600",
          color: "#707C87",
          "&.Mui-focused fieldset": { borderColor: "#C1C2CA" },
          "&.MuiOutlinedInput-input": { color: "#C1C2CA" },
        },
      }}
      id=""
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={selectValue}
      onChange={handleChange}
    >
      <MenuItem value="UAN">UAN</MenuItem>
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="EUR">EUR</MenuItem>
      <MenuItem value="GBP">GBP</MenuItem>
      <MenuItem value="CNY">CNY</MenuItem>
    </Select>
  );
}