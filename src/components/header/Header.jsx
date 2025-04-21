import "./Header.css";
import MainLogo from "../logo/Logo.jsx";
import Register from "../register/Register.jsx";
import { NavLink } from "react-router-dom";

export const menuHeader = [
  { id: 1, name: "Послуги", to: "service" },
  { id: 2, name: "Конвертер валют", to: "convertor" },
  { id: 3, name: "Контакти", to: "contacts" },
  { id: 4, name: "Задати питання", to: "question" },
];

export default function Header() {
  return (
    <div className="head">
      <MainLogo />
      <Menu class="menu-row" />
      <Register />
    </div>
  );
}

export function Menu(props) {
  const listItems = menuHeader.map((person) => (
    <li key={person.id}>
      <NavLink className={({isActive})=>isActive ? 'link-active': 'link'} to={person.to}> {person.name} </NavLink>
    </li>
  ));
  return <ul className={props.class}>{listItems}</ul>;
}
