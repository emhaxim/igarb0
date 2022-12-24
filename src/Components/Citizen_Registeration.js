import axios from 'axios';
import React, { useEffect, useState } from 'react';
import reg from '../images/reg.png';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import validator from 'validator';



export const Citizen_Registeration = () => {
    const [first_name, setfirst_name] = useState();
    const [last_name, setlast_name] = useState();
    const [email, setemail] = useState();
    const [phone, setphone] = useState();
    
    const [password, setpassword] = useState();
    const [repassword, setrepassword] = useState();

    let navigate = useNavigate();
    
    //http://localhost:3001/register'
    
    function onSubmit(e) {
         
        navigate("/verify-email")
        axios.post('http://127.0.0.1:8000/backend/register/', {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            password: password,
        }).then((response) => {
             // navigate("/verify-email")
        })
        
        
    }

    const [passError, setPassError] = useState('')
    const confirmPass = (e) => {
       
        var pass = e.target.value
        
            if (  pass == password) {
            setPassError('fine')
        
            } else {
              setPassError('Password not matched')
            }
            
    }
    
    function eventHandler(event) {
        validateEmail(event)
        const value = event.target.value;
        setemail(value);
    }

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
       
        var Vemail = e.target.value
        
            if (validator.isEmail(Vemail)) {
            setEmailError('')
            setemail(Vemail)
            } else {
            setEmailError('Enter valid Email!')
            }
            
    }

    return (
        <>
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
   
   <div style={{background: '#34e89e',  /* fallback for old browsers */background: '-webkit-linear-gradient(to left, #0f3443, #34e89e)',  /* Chrome 10-25, Safari 5.1-6 */background: 'linear-gradient(to left, #0f3443, #34e89e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ width:'100%', height:'643px'}}> 
        <div className="container"  >
            <div className="row" >
               
                
              
              <div className="col-lg-7" style={{marginLeft:'-60px'}}>
                    <img src={reg} alt="avatar" className=""  style={{height:'600px', width:'800px', marginLeft:'30px'}}/>
                    </div> 

                    <div className="col-lg-5    " >
                <div  style={{border:'1px solid white', borderRadius: '25px',marginLeft:'100px', marginTop:'20px', height:'580px', paddingBottom:'-20px'}}>
                    <div class="section">
                    <div class="container">
                        <div class="row full-height justify-content-center">
                            <div class="col-12 text-center align-self-center py-5">
                                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                                    {/* <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6> */}
                                    {/* <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label for="reg-log"></label> */}
                                    <div class="card-3d-wrap1 mx-auto">
                                        <div class="card-3d-wrapper1">
                                            <div class="card-front1">
                                                <div class="center-wrap1">
                                                    <div class="section text-center">
                                                    <i class="fa-solid fa-arrow-right-to-arc" style={{color:'white'}}> <h3 class="mb-2 pb-2 mt-4"><span>Citizen </span>Registeration </h3></i>
                                                        <div class="form-group">
                                                            <input onChange={(e) => {
                                                                setfirst_name(e.target.value);
                                                            }} type="text" name="firstname" class="form-style" placeholder="Enter First Name" id="logemail" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div class="form-group">
                                                            <input onChange={(e) => {
                                                                setlast_name(e.target.value);
                                                            }} type="text" name="secondname" class="form-style" placeholder="Enter Second Name" id="logemail" autocomplete="off" />
                                                            <i class="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <input   onChange={(e) => eventHandler(e) } type="email" name="email" class="form-style" placeholder="Your E-mail" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <div style={{
                                                                        fontWeight: 'bold',
                                                                        color: 'red',
                                                                        textAlign:'left',
                                                                       
                                                                        

                                                                        }}>{emailError}</div>
                                                        <div class="form-group mt-2">
                                                            <input onChange={(e) => {
                                                                setphone(e.target.value);
                                                            }} type="text" name="address" class="form-style" placeholder="Phone" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <div class="form-group mt-2">
                                                            <input onChange={(e) => {
                                                                setpassword(e.target.value);
                                                            }} type="password" name="password" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <div class='mt-3' style={{color:'white', fontWeight: 'normal', fontFamily:'Poppins', fontSize:'13px'  , textAlign:'left',}}>Note: Password Validations</div>
                                                        <div class="form-group mt-2">
                                                            <input onChange={(e) => confirmPass(e) }  type="password" name="password" class="form-style" placeholder="Re-enter Password" id="logpass" autocomplete="off" />
                                                            <i class="input-icon uil uil-lock-alt"></i>
                                                            
                                                        </div>
                                                        <span style={{
                                                                            fontWeight: 'bold',
                                                                            color: 'red',
                                                                            textAlign:'left', 
                                                                            

                                                                            }}>{passError}</span><br/>
                                                        <a onClick={onSubmit} to="/verify-email" style={{color:"white"}} className="btn mt-1">Register</a>
                                                       
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
               
              </div>
                 
            </div>

        </div>
    </div>
        
            
        </>
    )
}



