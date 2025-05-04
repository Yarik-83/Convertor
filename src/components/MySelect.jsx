import React, { useState } from "react";
import {Select,MenuItem} from '@mui/material';
import { useStore } from "../store.js";

export default function MySelect() {

  //  const{selectValue,setSelectValue} = useStore();
     const [currency, setCurrency] = useState("1");
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
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
        value={currency}
        onChange={handleChange}
      >
        <MenuItem value={1}>UAN</MenuItem>
        <MenuItem value={2}>USD</MenuItem>
        <MenuItem value={3}>EUR</MenuItem>
        <MenuItem value={4}>GBR</MenuItem>
        <MenuItem value={5}>CNY</MenuItem>
      </Select>
    );
  }
  