import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "../store";
import dayjs from "dayjs";
import { useEffect } from "react";

export default function MyDate() {
  const { defaultDate, setDateValue, dateSevenDayAgo, setPastDate } = useStore();



  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);



  useEffect(() => {

    console.log(sevenDaysAgo);
  }, [defaultDate]);

  function changDate(value) {
    setDateValue(value.format("DD.MM.YYYY"));
  }




  //  const a = dayjs(defaultDate).get("month");
 
  //  debugger
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dayjs(defaultDate)}
        onChange={changDate}
        // minDate={dayjs(defaultDate)}
        // maxDate={dayjs(dateSevenDayAgo)}
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
  );
}

// import{useState} from 'react';
// import dayjs, { Dayjs } from 'dayjs';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function MyDate() {
// const [value, setValue] = useState(dayjs('2022-04-17'));

// return (
// <LocalizationProvider dateAdapter={AdapterDayjs}>

// <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
// <DatePicker
// label="Controlled picker"
// value={value}
// onChange={(newValue) => setValue(newValue)}
// />

// </LocalizationProvider>
// );
// }
