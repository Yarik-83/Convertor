import * as React from "react";
import { Box,OutlinedInput,Select,Typography,MenuItem,} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker,DateField  } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import InputAdornment from '@mui/material/InputAdornment';


export default function BlockConvert() {
  return (
    <Box sx={{ bgcolor: "#F6F7FF", px: 25, py: 10 }}>
      <Box component="form" sx={{ bgcolor: "#FFFFFF", py: 7, px: 6 }}>
        <MyText
          tag="h2"
          text="Конвертер валют"
          fontW={700}
          fontS={40}
          color="#1F1E25"
          sx={{ pb: 9 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <MyText
              tag="p"
              text="В мене є:"
              fontW={400}
              fontS={20}
              color="#707C87"
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <MyInput />
              <MySelect />
            </Box>
          </Box>
          <SyncAltSharpIcon
            sx={{ position: "relative", top: 68, color: "#707C87" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <MyText
              tag="p"
              text="Хочу придбати:"
              fontW={400}
              fontS={20}
              color="#707C87"
            />
          <Wrap/>
          </Box>
        </Box>
        <Box sx={{ pt: 3, display: "flex", justifyContent: "space-between" }}>
          <MyDate />
          <MadeButton
            sx={{ alignItems: "end" }}
            text="Зберегти результат"
            h={60}
            w={220}
            bg="#2C36F2"
            color="#F6F7FF"
          />
        </Box>
      </Box>
    </Box>
  );
}

function Wrap() {


  return (
    <Box sx={{ display: "flex", gap: 2 }}>
    <MyInput />
    <MySelect />
  </Box>
    
  )
  
}


export function MyText(props) {
  const { tag, text, fontW, fontS, color } = props;
  return (
    <Typography
      component={tag}
      sx={{ fontWeight: fontW, fontSize: fontS, color: color }}
    >
      {text}
    </Typography>
  );
}

export function MadeButton(props) {
  const { text, h, w, bg, color } = props;
  return (
    <Button
      variant="outlined"
      sx={{
        "&.MuiButton-root": {
          bgcolor: bg,
          color: color,
        },
        "&.MuiButton-outlined": {
          height: h,
          width: w,
        },
      }}
    >
      {text}
    </Button>
  );
}

function MySelect() {
  const [currency, setCurrency] = React.useState("1");
  const [open, setOpen] = React.useState(false);

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

function MyInput() {
  return (
    <OutlinedInput
      component="input"
      name="input-offer"
      variant="outlined"
      type="text"
      size="medium"
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

function MyDate() {
 
  return (<>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        sx={{
          ".MuiInputBase-input": {
            fontSize: "20px",
            textAlign: "center",
            fontWeight: "600",
            color: "#707C87",
          },
          ".MuiOutlinedInput-root": {
            width: 220,
            height: 60,
            "&.Mui-focused fieldset": { borderColor: "#C1C2CA" },
            "&.MuiOutlinedInput-input": { color: "#C1C2CA" },
          },
        }}
      />
    </LocalizationProvider>
    
  </>


  );
}

//  startAdornment={
//   <InputAdornment position="start">
//   <CalendarMonthSharpIcon />
// </InputAdornment>
// }