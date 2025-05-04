import { Box } from "@mui/material"; 
import MyText from "./MyText.jsx";
import MakeButton from './MakeButton';
// import HistoryList from './history/HistoryList.jsx';
// import {makeData}from '../data.js';
import { useStore } from "../store.js";

//  const arrHistory = makeData(9)



export default function BlockHistory() {

const {data,removeData} = useStore()


  function clearData(){
    removeData()
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
        {/* <HistoryList arr={data}/> */}
      </Box>
    </Box>
  );
}
