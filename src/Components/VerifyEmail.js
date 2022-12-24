import React from 'react'
import { NavLink } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import verification from '../images/verification.gif'
import veri2 from '../images/veri2.gif'


    
const VerifyEmail = () => {

    

  return (
   <>
        <div style={{backgroundColor:'white', height:"692px" }}>
        <nav className='nav1'  style={{height:"50px"}}>
                
                <i class="fa-solid fa-recycle fa-2x" style={{marginLeft:'-45px'}} >IGARB0</i>
                
                        {/* <div className="logo" style={{marginLeft:'-220px'}}><spam>IGarb0</spam></div>*/}  
                        
                        <input type="checkbox" id="click" />
                        <label for="click" className="menu-btn">
                            <i className="fa fa-bars"></i>
                        </label>
                        <ul style={{color: 'black', marginTop: '10px' }}>
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
        
   <div>
                            <Alert variant="success" className="mt-5 ml-5 mr-5" >


                            <Alert.Heading> <i class="fa-regular fa-envelope fa-3x"></i> Please Confirm Your Email!</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This
                                example text is going to run a bit longer so that you can see how
                                spacing within an alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things
                                nice and tidy.
                            </p>
                            </Alert>
                        </div>


                        
                            <img src={veri2} alt="loading..."  style={{ width:'280px', height:"280px", marginLeft: '40%'}} />
                       

         
    
    <h6  style={{marginLeft: '40%'}}>
        IGARB0 All rights are reserved<i class="fa-regular fa-copyright ml-1"></i>
      </h6>
    
    </div>
   
   </>
  )
}

export default VerifyEmail