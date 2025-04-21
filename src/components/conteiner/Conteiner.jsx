import './Conteiner.css';

export default function Conteiner(props) {
  const style = props.style ? 'gray': 'white';
    return (
        <div className={style}>
            {props.compon}
        </div>
    )
}