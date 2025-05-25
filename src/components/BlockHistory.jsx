import { Box } from "@mui/material"; 
import MyText from "./MyText.jsx";
import MakeButton from './MakeButton';
 import HistoryList from './history/HistoryList.jsx';
import { useStore } from "../store.js";



export default function BlockHistory() {

const {history,removeHistoru} = useStore()

  function clearData(){
    removeHistoru()
  }

  return (
    <Box sx={{ bgcolor: "#FFFFFF", px: 25, py: 10 }}>
      <Box sx={{ bgcolor: "#F6F7FF", py: 5, px: 8 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <MyText
            tag="h3"
            text="Історія конвертації"
            fontW={500}
            fontS={28}
            color="#1F1E25"
            sx={{ pb: 4 }}
          />
          <MakeButton
            onClick={clearData}
            text="Очистити історію"
            h={51}
            w={187}
            bg="#2C36F2"
            color="#F6F7FF"
          />
        </Box>
        <HistoryList arr={history}/>
      </Box>
    </Box>
  );
}
