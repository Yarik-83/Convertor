import { MadeButton, MyText } from "./BlockConvert";
import { Box,Typography } from "@mui/material";

export default function BloclHistory() {
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
          <MadeButton
            text="Очистити історію"
            h={51}
            w={187}
            bg="#2C36F2"
            color="#F6F7FF"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 6,
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <HistoryOfRate />
            <HistoryOfRate />
            <HistoryOfRate />
            <HistoryOfRate />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <HistoryOfRate />
            <HistoryOfRate />
            <HistoryOfRate />
            <HistoryOfRate />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function HistoryOfRate(props) {

const{data}=props;

  return (
    <Box sx={{ bgcolor: "#FFFFFF", width: 392, height: 42, display:'flex', alignItems:'center',  justifyContent:'center'}}>
      <Typography sx={{ color: "#707C87",
         fontWeight: "600",}}>{data}</Typography>
    </Box>
   
  );
}


function ShowHistory(props) {
const{arrDate,text,}= props;
const listItems = arrDate.map((date,index) => (
  <li key={index}>
    <Typography component={p} > {text} </Typography>
  </li>
));
return <ul >{listItems}</ul>;
}