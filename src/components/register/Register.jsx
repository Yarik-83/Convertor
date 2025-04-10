import './Register.css'
import door from '../../assets/Door.svg';

export default function Register(){
   return  (<div className='reg'>
        <img src={door} alt="Entranse" />
        <p className='text'>Особистий кабінет</p>
    </div>)
}