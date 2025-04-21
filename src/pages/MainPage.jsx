import Block from '../components/main-block/Block.jsx';
import url from '../assets/background.png'
import imgSrc from '../assets/img/Group.png'
import cardSrc from '../assets/img/card.png'


export default function MainPage() {
  
    return(
        <>
        <Block backgr={url} title={"Чіп Чендж"} titleStyle={'large-font'} textStyle={'text-white'} text={"Обмінник валют - навчальний"} btnClass={'white'} btnText={'Конвертер валют'} src={cardSrc}/>
        <Block title={"Конвертер валют"} titleStyle={'small-font'} textStyle={'text-grey'} text={'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.'} btnClass={'blue'} btnText={'Конвертувати валюту'} src={imgSrc}/>
        </>
    )
}