import './Banner.css';
 import MyButton from '../button/MyButton';



export default function Banner(props){

    return (
        <div className='banner-wrap'>
            <h1 className={props.titleStyle}>{props.title}</h1>
            <p className={props.textStyle}>{props.text}</p>
            <MyButton btnStyle={props.btnClass} text={props.btnText}/>
        </div>
    )
}


