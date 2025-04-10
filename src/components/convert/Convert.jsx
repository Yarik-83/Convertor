import Banner from "../banner/Banner";
import imgSrc from '../../assets/img/Group.png'
import Picture from "../picture/Picture";




export default function Convert(){

    return(
        <div className="block">
        <Banner title={"Конвертер валют"} titleStyle={'small-font'} textStyle={'text-grey'} text={'Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.'} btnClass={'blue'} btnText={'Конвертувати валюту'}/>
        <Picture src={imgSrc}/>
    </div>
    ) 
}