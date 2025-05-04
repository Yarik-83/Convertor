import './HistoryList.css'



export default function HistoryList({arr}) {

    const listItems = arr.map((item)=>(
        <li className="history__item"  key={item.id}>
              {item.data}
        </li>
    ))
    return (
        <ul className="history">{listItems}</ul>
    )
};


