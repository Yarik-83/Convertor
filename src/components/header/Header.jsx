import './Header.css'
import MainLogo from '../logo/Logo.jsx'
import Register from '../register/Register.jsx'



export const menuHeader = ["Послуги", "Конвертер валют", "Контакти", "Задати питання"];

export default function Header(){
    
    return(
       <div className="head">
        <MainLogo/>
        <Menu class='menu-row'/>
        <Register/>
        
       </div>
    )
}

export function Menu(props){
    console.log(props.class)
   
        const listItems = menuHeader.map((person,index) => <li key={index}>
            <a className='link' href="#">{person}</a></li>)
    return <ul className= {props.class}>{listItems}</ul>
}