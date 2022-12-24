import React from 'react'
import '../index.css';
import video from '../images/video.mp4';
import { Signup } from './Signup';
import { About } from './About';
import { Navbar } from './Navbar';
import Typical from "react-typical";
import back from '../images/back.svg';
import { NavLink } from 'react-router-dom';

export const Main = () => {


    return (

        < > 
        <div>
        {/*<Navbar/>*/}
            
            <nav className='nav1' >
           
            <i class="fa-solid fa-recycle fa-2x" style={{marginLeft:'-45px', color:'#40826D' }} >IGARB0</i>
           
                  {/* <div className="logo" style={{marginLeft:'-220px'}}><spam>IGarb0</spam></div>*/}  
                    
                    <input type="checkbox" id="click" />
                    <label for="click" className="menu-btn">
                        <i className="fa fa-bars"></i>
                    </label>
                    <ul style={{color: 'black'}}>
                    <li><NavLink className='navlink' exact activeClassName='active_class' to='/'>Home</NavLink></li>
                    <li><NavLink className='navlink' exact activeClassName='active_class' to='/citizen_signup'>Citizen</NavLink></li>
                    <li><NavLink className='navlink' exact activeClassName='active_class' to='/employee-signin'>Employee</NavLink></li>
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

            


            <div className="main1" style={{color:"black"}}>
                <div className="main1_container" >
                    <h1 className="heading" style={{color:"#097969"}}><span style={{color:"#5F8575"}}>let's Make </span> Pakistan</h1>
                   <div style={{color:"#008080"}} >
                    <Typical className = "typical heading_support"  color="blue"
                    loop = {Infinity}
                    wrapper = "p"
                    steps= {[
                        
                        "Clean And Green",
                         1000,
                         "Beautiful",
                         1000,
                    ]}/>
                    </div>
                    <p style={{ color: 'grey', fontSize: '20px', fontFamily: 'Poppins', fontWeight: 'bold'}}>OUR BEST SERVICES FOR YOU!</p>
                    {/*<p className="heading_support">Clean and Green</p>*/}
                    

                    <p>
                    Our Goal is to ensure cleanliness in the  <br/>city. Our System provides survillence<br/> to monitor the dutbins of the city.
                    <br/> It gives alert if any violation <br/>observed  <br/>
                    IGARB0 All rights are reserved<i class="fa-regular fa-copyright ml-1"></i>
                   
                    </p>
                    {/* <!-- Hover #1 --> 
                    <div class="box-1">
                        <div   class="btnn btn-one">
                            <span>GET STARTED</span>
                        </div>
                    </div>

                    */}

                    
                </div>
            </div>
            {/*<About/>*/}
            </div>
        </>
    )
}
