import { useState } from 'react';
import './navbar.css';
import {Link} from "react-router-dom"


export function MyNav(){
    const[clicked, setClicked] = useState(false)

    const handleClick = ()=>{
        
        setClicked(!clicked)
    }
    return(
        <>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Triptor </h1>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={clicked ? 'nav-items active' : 'nav-items'}>
                    <li>
                        <Link to={'/'} exact='true' className='nav-link'> <i class="fa-sharp fa-solid fa-house-user"></i>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='nav-link'><i class="fa-sharp fa-solid fa-circle-info"></i>About</Link>
                    </li>
                    <li>
                        <Link to={'/service'} className='nav-link'> <i class="fa-sharp fa-solid fa-briefcase"></i>Service</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className='nav-link'> <i class="fa-sharp fa-solid fa-address-book"></i>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/signup'} className='nav-link-mobile'> Sign Up</Link>
                    </li>
                   <Link  to={'/signup'}>
                   <button className='btn'>Sign Up</button>
                   </Link>
                </ul>
               
            </nav>
        </>
    )
}