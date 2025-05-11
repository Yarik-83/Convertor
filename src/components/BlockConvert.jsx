import { Box } from "@mui/material";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import MakeButton from "./MakeButton.jsx";
import MyText from "./MyText.jsx";
import MySelect from "./MySelect.jsx";
import MyInput from "./MyInput.jsx";
import MyDate from "./MyDate.jsx";
import { useStore } from "../store.js";
import { useEffect } from "react";

export default function BlockConvert() {
  const { data, getData } = useStore();
  const { inputValueFrom, setInputValueFrom } = useStore();
  const { selectValueFrom, setSelectValueFrom } = useStore();
  const { selectValueTo, setSelectValueTo } = useStore();
  const { inputValueTo, setInputValueTo } = useStore();
  // const { dateRate, setDateRate } = useStore();


  const dateRate = '20250505'


  const urlAll = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateRate}&json`;
  const urlСurrencyOnDate = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20250101&json`;

  useEffect(() => {
    fetch(urlAll)
      .then((response) => response.json())
      .then((result) => getData(result));
  }, []);


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
              <Wrap
                fn={setInputValueFrom}
                inputValue={inputValueFrom}
                selectValue={selectValueFrom}
                setInputValue={setInputValueTo}
                setSelectValue={setSelectValueFrom}
                // selectValue1={selectValueFrom}
                // selectValue2={selectValueTo}
                // buy={true}
              />
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
            <Wrap
              fn={setInputValueTo}
              inputValue={inputValueTo}
              selectValue={selectValueTo}
              setInputValue={setInputValueFrom}
              setSelectValue={setSelectValueTo}
              // selectValue1={selectValueTo}
              // selectValue2={selectValueFrom}
              // buy={false}
            />
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

function Wrap({
  fn,
  inputValue,
  selectValue,
  setSelectValue,
  setInputValue,
  // selectValue1,
  // selectValue2,
  // buy,
}) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <MyInput fn={fn} inputValue={inputValue} />
      <MySelect
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        setInputValue={setInputValue}
        // selectValue1={selectValue1}
        // selectValue2={selectValue2}
        // buy={buy}
      />
    </Box>
  );
}
