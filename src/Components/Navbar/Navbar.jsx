import React ,{useState,useRef} from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.svg'
import bird1 from '../../assets/bird1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import {Link} from 'react-router-dom';


const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-menu-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-menu-close' />
        <li className={menu==="home" ? "active" : ""}>{menu==="home"?<img src={bird1} alt=''/>:<></>}<AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>HOME</p></AnchorLink></li>
        <li className={menu==="about" ? "active" : ""}>{menu==="about"?<img src={bird1} alt=''/>:<></>}<AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>ABOUT ME</p></AnchorLink></li>
        <li className={menu==="services" ? "active" : ""}>{menu==="services"?<img src={bird1} alt=''/>:<></>}<AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>SERVICES</p></AnchorLink></li>
        <li className={menu==="work" ? "active" : ""}>{menu==="work"?<img src={bird1} alt=''/>:<></>}<AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>PORTFOLIO</p></AnchorLink></li>
        <li className={menu==="contact" ? "active" : ""}>{menu==="contact"?<img src={bird1} alt=''/>:<></>}<AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>CONTACT</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><a className='anchor-link' href='/Certificate' target="_blank" rel="">Certificate</a></div>

      
    </div>
  )
}

export default Navbar
