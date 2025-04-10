import './Block.css';
import Banner from '../banner/Banner.jsx'
import Picture from '../picture/Picture.jsx'
import cardSrc from '../../assets/img/card.png'




export default function Block(props){

const blockStyle = props.backgr ? 'block block-background': 'block'

    return (
        <div className={blockStyle}>
            <Banner title={"Чіп Чендж"} titleStyle={'large-font'} textStyle={'text-white'} text={"Обмінник валют - навчальний"} btnClass={'white'} btnText={'Конвертер валют'} />
            <Picture src={cardSrc}/>
        </div>
    )
}

