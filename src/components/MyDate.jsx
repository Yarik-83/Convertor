import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "../store";
import dayjs from "dayjs";

export default function MyDate() {
  const { defaultDate, setDateValue } = useStore();

  function changDate(value) {
    setDateValue(value.format("DD.MM.YYYY"));
  }
  // const a = dayjs(defaultDate).get("year");
  //  debugger
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={dayjs(defaultDate)}
        onChange={changDate}
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
