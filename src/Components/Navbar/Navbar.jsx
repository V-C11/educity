import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [hideMenu, setHideMenu] = useState(false)
  const toggleMenu = () => {
  hideMenu ? setHideMenu(false) : setHideMenu(true)
  }

  return (
    <nav className={`${sticky ? "dark_nav" : ""}`}>
      <img className="logo" alt="logo" src={logo} />
      <ul className={hideMenu ? '' : 'hide-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contact" className="btn" smooth={true} offset={-230} duration={500}>
            Contact
          </Link>
        </li>
        {/* <li>
          <button className="btn">Contact</button>
        </li> */}
      </ul>
      <img src={menu} className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};
export default Navbar;
