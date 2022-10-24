import HeaderLogo from "./HeaderLogo";
import HeaderNav from './HeaderNav';
import "../../assets/style/header.css";

export function Header() {
  return (
    <header className="header">
        <HeaderLogo />
        <HeaderNav 
        responsive={true}
        />
        <HeaderNav 
        responsive={false}
        />
    </header>
  )
}
