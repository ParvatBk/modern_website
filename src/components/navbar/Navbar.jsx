import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

import logo from '../../assets/logo.svg';

const Menu = ()=>(
  <React.Fragment>
  <p><a href="#home"></a> Home </p>
  <p><a href="#wgpt3"></a> What is GPT?</p>
  <p><a href="#possibility"></a> Open AI</p>
  <p><a href="#features"></a> Case Studies </p>
  <p><a href="#region blog"></a>  Library </p>
  </React.Fragment>
)

const Navbar = () => {
  const[toggleMenu, setToggelMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__nvbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggelMenu(false) }/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggelMenu(true) }/>
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu-container-links">
              <Menu />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button"> Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar