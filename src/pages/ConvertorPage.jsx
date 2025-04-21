
import Block from "../components/main-block/Block";
import url from "../assets/background.png"
import cardSrc from '../assets/img/card.png';
import BlockConvert from "../components/BlockConvert";
import BloclHistory from '../components/BlockHistory';



export default function ConvertorPage() {
  
    return (
        <>
             <Block backgr={url} title={"Чіп Чендж"} titleStyle={'large-font'} textStyle={'text-white'} text={"Обмінник валют - навчальний"} btnClass={'white'} btnText={'Конвертер валют'} src={cardSrc}/>
           <BlockConvert />
           <BloclHistory/>
        </>
    )
}