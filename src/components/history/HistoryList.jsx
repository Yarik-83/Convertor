import "./HistoryList.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";



export default function HistoryList({ arr }) {
  return (
    <ul className="history">
      {arr.map((item, index) => (
        <li className="history__item" key={index}>
          <HistoryItemDate date={item.date} />
          <HistoryItemsSun sum={item.sumFrom} curr={item.currencuFrom} />
          <ArrowRightAltIcon />
          <HistoryItemsSun sum={item.sumTo} curr={item.currencuTo} />
        </li>
      ))}
    </ul>
  );
}


function HistoryItemDate({ date }) {
  return <span className="history-date"> {date} </span>;
}

function HistoryItemsSun(props) {
  const { sum, curr } = props;
  return (
    <>
      <span className="item-sum">{sum}</span>
      <span className="item-curs">{curr}</span>
    </>
  );
}
