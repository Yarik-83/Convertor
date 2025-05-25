import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useStore } from "../store";
import dayjs from "dayjs";

export default function MyDate() {
  const { defaultDate, setDateValue } = useStore();

  function changDate(value) {
    setDateValue(value);
  }
  const dateSevenDayAgo = dayjs().subtract(7, "day");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        formatDensity="spacious"
        value={dayjs(defaultDate)}
        onChange={changDate}
        minDate={dayjs(dateSevenDayAgo)}
        maxDate={dayjs()}
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
