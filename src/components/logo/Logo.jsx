import './Logo.css';
import imgLogo from '../../assets/Vector.png';



export default function MainLogo(){


    return(
        <div className='logo-wrap'>
            <img className='img' src={imgLogo} alt="logo" />
            <h3 className='logo-text'>Чіп Чендж</h3>
        </div>
    )
}