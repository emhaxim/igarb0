import React from 'react'
import '../index.css';
import video from '../images/video.mp4';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

    

    

    return (
        <>
            <nav className='nav1' style={{backgroundColor: 'black'}}>
            <i class="fa-solid fa-recycle fa-4x"></i>

          
                <div className="logo"> i<spam>G</spam>arb0 <i class="fa-solid fa-recycle"></i></div>
                <input type="checkbox" id="click" />
                <label for="click" className="menu-btn">
                    <i className="fa fa-bars"></i>
                </label>
                <ul>
                
                <i class="fa-solid fa-recycle"></i>
                
                <li><NavLink className='navlink' exact activeClassName='active_class' to='/'>Home</NavLink></li>
                <li><NavLink className='navlink' exact activeClassName='active_class' to='/citizen_signup'>Citizen</NavLink></li>
                <li><NavLink className='navlink' exact activeClassName='active_class' to='seeper_signup'>Employee</NavLink></li>
                {/* <li><NavLink className='navlink' exact activeClassName='active_class' to='/about'>About</NavLink></li> */}
                <li><NavLink className='navlink' exact activeClassName='active_class' to='/contact'>Contact us</NavLink></li>
                <li><NavLink className='navlink' exact activeClassName='active_class' to='/team'>About us</NavLink></li>
                {/* <li><NavLink className='navlink' exact activeClassName='active_class' to='/signup'>Signup/ Login</NavLink></li> */}


                    {/* <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Feedback</a></li> */}
                </ul>
            </nav>
            {/* <div className="content">
                <div>Responsive Navigation Menu Bar Design</div>
                <div>using only HTML & CSS</div>
            </div> */}

        </>
    )
}
