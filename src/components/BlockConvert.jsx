import { Box } from "@mui/material";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import MakeButton from "./MakeButton.jsx";
import MyText from "./MyText.jsx";
import MySelect from "./MySelect.jsx";
import MyInput from "./MyInput.jsx";
import MyDate from "./MyDate.jsx";
import { useStore } from "../store.js";
import { useEffect } from "react";
import {getRateFromSelect} from "../store.js";


export default function BlockConvert() {
  const {
    data,
    getData,
    inputValueFrom,
    setInputValueFrom,
    selectValueFrom,
    setSelectValueFrom,
    selectValueTo,
    setSelectValueTo,
    inputValueTo,
    setInputValueTo,
    setRateFrom,
    setRateTo,
    setSumFrom,
    setSumTo,
    setHistory,
    defaultDate,
    setCourse,
    course,
    inputName,
    history,
  } = useStore();


   const date = defaultDate.format('YYYYMMDD')

  const urlAll = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${date}&json`;

  useEffect(() => {
    fetch(urlAll)
      .then((response) => response.json())
      .then((result) => getData(result));
  }, [defaultDate]);

  useEffect(() => {
    setRateFrom(getRateFromSelect(data, selectValueFrom));
    setRateTo(getRateFromSelect(data, selectValueTo));
    setCourse();
  }, [data, selectValueTo, selectValueFrom, defaultDate]);

  useEffect(() => {
    if (inputName === "From") {
      setSumFrom();
    } else if (inputName === "To") {
      setSumTo();
    }
  }, [inputValueFrom, inputValueTo, course]);

  useEffect(() => {
 console.log(history);
  }, [history]);

  function addHistory() {
      setHistory()
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
                setInputValue={setInputValueFrom}
                inputValue={inputValueFrom}
                selectValue={selectValueFrom}
                setSelectValue={setSelectValueFrom}
                setRate={setRateFrom}
                setSum={setSumFrom}
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
              setInputValue={setInputValueTo}
              inputValue={inputValueTo}
              selectValue={selectValueTo}
              setSelectValue={setSelectValueTo}
              setRate={setRateTo}
              setSum={setSumTo}
            />
          </Box>
        </Box>
        <Box sx={{ pt: 3, display: "flex", justifyContent: "space-between" }}>
          <MyDate />
          <MakeButton
            onClick={addHistory}
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
  setInputValue,
  inputValue,
  selectValue,
  setSelectValue,
  setRate,
  setSum,
}) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <MyInput
        setInputValue={setInputValue}
        inputValue={inputValue}
        setSum={setSum}
      />
      <MySelect
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        setRate={setRate}
        setSum={setSum}
      />
    </Box>
  );
}

