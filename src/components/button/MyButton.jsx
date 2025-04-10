import './MyButton.css';



export default function MyButton({btnStyle, text }){
  const btnClass = btnStyle === 'blue' ? 'btn-blue': 'btn-white'
  const textStyle = btnStyle === 'blue' ? 'btn-text_white' :'btn-text_gray'
   return (
    <button className={`${btnClass}`}> 
  <p className={`${textStyle}`}>{text}</p>
    </button>
   )
}