import React, { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { useStore } from "../store.js";



export default function MySelect(props) {

  const [open, setOpen] = useState(false);

  const{selectValue,setSelectValue,data,setRate} = props;
 
  let selectedCurrency = {};
 

  useEffect(() => {

      setRate(getRateFromSelect(data,selectValue))
  }, [selectValue]);


  
  function getRateFromSelect(data,value){

    let multiplier = 1;
    // let arr = [];
    for(let obj of data){
      if(obj.cc === value){
        selectedCurrency = obj;
        multiplier = obj.rate;
      }
      // arr.push(Object.values(obj));
    // if(Object.values(obj).includes(value)){
    //   multiplier = obj.rate;
    // }
    // }
    //   if(!arr.flat().includes(value)){
    //   multiplier = 1;
     }
    //  if(!multiplier){
    //   multiplier = 1;
    //  }
    console.log(multiplier);
     return multiplier;
  }


  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false)
  };

  const handleOpen = () => {
    setOpen(true)
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
