import React, { useState } from 'react'
import "./header.css"


const Header = () =>{
    // Toogle Menu
    const[Toogle, showMenu] = useState(false);
    return(
      <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Julius Siregar</a>
            <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className='nav_link  active-link'>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#about' className='nav_link'>
                            <i className="uil uil-user nav__icon"></i> About 
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#skills' className='nav_link'>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#services' className='nav_link'>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#portofolio' className='nav_link'>
                            <i className="uil uil-scenery nav__icon"></i> Portofolio
                        </a>
                    </li>

                    <li className='nav_item'>
                        <a href='#contact' className='nav_link'>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" 
                onClick={() => showMenu(!Toogle)}></i>
            </div>

            <div className="nav__toogle" onClick={() => showMenu(!Toogle)}>
            <i class="uil uil-apps"></i>
            </div>
            
        </nav>
      </header>
    )
}

export default Header