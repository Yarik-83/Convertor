import { Box } from "@mui/material";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import MakeButton from "./MakeButton.jsx";
import MyText from "./MyText.jsx";
import MySelect from "./MySelect.jsx";
import MyInput from "./MyInput.jsx";
import MyDate from "./MyDate.jsx";
import { useStore } from "../store.js";

export default function BlockConvert() {
  const { data, addData } = useStore();

//   useEffect(() => {
 
//   }, []);

// }


// const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${20250504}&json`

//   fetch(url)
//   .then(response => response.json())
//   .then(result => console.log(result))


  function changeData() {
    addData();
  }

  return (
    <Box sx={{ bgcolor: "#F6F7FF", px: 25, py: 10 }}>
      <Box component="form" sx={{ bgcolor: "#FFFFFF", py: 7, px: 6 }}>
        <MyText
          tag="h2"
          text="Конвертер валют"
          fontW={700}
          fontS={40}
          color="#1F1E25"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            position: "relative",
            mt: 8,
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
              <Wrap />
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
            <Wrap />
          </Box>
        </Box>
        <Box sx={{ pt: 3, display: "flex", justifyContent: "space-between" }}>
          <MyDate />
          <MakeButton
            onClick={changeData}
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
  );
}
