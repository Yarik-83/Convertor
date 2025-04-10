import Block from '../components/block/Block.jsx';
import Convert from '../components/convert/Convert.jsx';
import url from '../assets/background.png'


export default function MainPage() {
  
    return(
        <>
        <Block backgr={url}/>
        <Convert/>
        </>
    )
}