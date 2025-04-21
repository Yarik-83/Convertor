import './Block.css';
import Banner from '../banner/Banner.jsx'
import Picture from '../picture/Picture.jsx'



export default function Block(props){

const blockStyle = props.backgr ? 'block block-background': 'block'

    return (
        <div className={blockStyle}>
            <Banner title={props.title} titleStyle={props.titleStyle} textStyle={props.textStyle} text={props.text} btnClass={props.btnClass} btnText={props.btnText} />
            <Picture src={props.src}/>
        </div>
    )
}

