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
  const { selectValueIHave, setSelectValueIHave } = useStore();
  const { selectValueIWant, setSelectValueIWant } = useStore();
  const { inputValueTo, setInputValueTo } = useStore();
  const { rateIHave, setRateIHave } = useStore();
  const { rateIWant, setRateIWant } = useStore();

  const urlAll = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20250202&json`;
  const urlСurrencyOnDate = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20250101&json`;

  useEffect(() => {
    fetch(urlAll)
      .then((response) => response.json())
      .then((result) => getData(result));
  }, []);

  useEffect(() => {

    console.log(data[23],data[24],data[31],data[2]);
  }, [data]);

  function changeData() {
    addData();
  }

  const propsIHave = {    // як пропс передати обєктом?
    data: { data },
    fn: { setInputValueFrom },
    inputValue: { inputValueFrom },
    selectValue: { selectValueIHave },
    setSelectValue: { setSelectValueIHave },
  };

  const propsIWant = {      // як пропс передати обєктом?
    data: { data },
    fn: { setInputValueTo },
    inputValue: { inputValueTo },
    selectValue: { selectValueIWant },
    setSelectValue: { setSelectValueIWant },
  };
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
              {/* <Wrap  props={propsIHave }/> */}
              <Wrap
                data={data}
                fn={setInputValueFrom}
                setRate={setRateIHave}
                inputValue={inputValueFrom}
                selectValue={selectValueIHave}
                setSelectValue={setSelectValueIHave}
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
            {/* <Wrap  props={propsIHave }/> */}
            <Wrap
              fn={setInputValueTo}
              inputValue={inputValueTo}
              selectValue={selectValueIWant}
              setSelectValue={setSelectValueIWant}
              data={data} setRate={setRateIWant}
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

function Wrap({ fn, inputValue, selectValue, setSelectValue, data,setRate}) {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <MyInput fn={fn} inputValue={inputValue} />
      <MySelect
        selectValue={selectValue}
        setSelectValue={setSelectValue}
        data={data} setRate={setRate}
      />
    </Box>
  );
}
