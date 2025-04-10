import MainLogo from "../logo/Logo";
import "./Footer.css";
import { Menu } from "../header/Header";
import phone from "../../assets/phone.png";
import pipe from "../../assets/pipe.png";
import yt from "../../assets/y.t.png";
import fb from "../../assets/f.b.png";
import insta from "../../assets/insta.png";
import twit from "../../assets/twit.png";
import "./Footer.css";

export default function Footer() {
  const styleImg = { height: "16px" };
  return (
    <div className="footer">
      <div className="footer-address">
        <MainLogo />
        <p className="footer-text_text">
          04128, м.Київ, вул. Хрещатик, 19 Ліцензія НБУ №156 Ⓒ ПАТ ЧіпЧендж,
          2019-2023
        </p>
      </div>
      <Menu class="menu-collum" />
      <PhoneNumber namber="3773" text="Цілодобова підтримка" img={phone} />
      <PhoneNumber
        namber="8 800 111 22 33"
        text="Безкожтовно для дзвінків в межах України"
        img={pipe}
      />
      <div className="social">
        <img style={styleImg} src={fb} alt="" />
        <img style={styleImg} src={insta} alt="" />
        <img style={styleImg} src={twit} alt="" />
        <img style={styleImg} src={yt} alt="" />
      </div>
    </div>
  );
}

function PhoneNumber(props) {
  return (
    <div className="phone-number">
       <img className='icon' src={props.img} alt="" /> 
       {/* alt також передавати propsom? */}
      <div className="number-wrap">
        <p className="number">{props.namber}</p>
        <p className="number-text">{props.text}</p>
      </div>
      
    </div>
  );
}
