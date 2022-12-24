
import axios from 'axios';
import React, { useState } from 'react'
import { Signup } from './Signup'
import back from '../images/back.png'
import sweepsin from '../images/sweepsin.png';
import { NavLink } from 'react-router-dom';
import { Citizen_dashboard } from './Citizen_dashboard';
import validator from 'validator';
import SweeperDashboard from './SweeperDashboard';
import { useNavigate } from "react-router-dom";


const SweeperSignin = () => {

    const [email, setemail] = useState();
    let navigate = useNavigate();
    const [password, setpassword] = useState();
    const [redirect, setredirect] = useState('');
    const [alldata, setalldata] = useState([])
    const [emailError, setEmailError] = useState('')
    const [Vemail, setVemail] = useState();
    const [myBool, setmyBool] = useState(false);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      

    const validateEmail = (e) => {
       
        setVemail(e.target.value)
    
        if (validator.isEmail(Vemail)) {
        setEmailError('')
        setemail(Vemail)
        } else {
        setEmailError('Enter valid Email!')
        }
       
}



    function eventHandler(event) {
        const value = event.target.value;
        setemail(value);
    }

    function eventHandler1(event) {
        const value = event.target.value;
        setpassword(value);
    }

   
    function onSubmit(e) {
        //e.preventDefault();
 
         axios.post('http://127.0.0.1:8000/backend/sweeper-signin/', {
 
             
             email: email,
             password: password,
             
         }).then((response) => {
 
             sleep(5000)
             console.log('here')
             console.log(email)
             console.log(password)
             console.log(response.data)
             setalldata(response.data)
             
             
 
             if (response.data.status === '0') {
                 alert(`invalid user inputs: `)
                 //let navigate = useNavigate();
                 // Somewhere in your code, e.g. inside a handler:
                //navigate("/posts");
                //setredirect('/citizen_signup');
              
             }
             else if (response.data.status === '1') {
                 console.log('in else')
                 alert(`Hello you are successfully signed in:`)
                 {<Citizen_dashboard email = {Vemail}/>}
                 navigate("/sweeper-dashboard"); 
                
 
                 setmyBool(true)
 
                
 
                 //let navigate = useNavigate();
                 // Somewhere in your code, e.g. inside a handler:
                 //navigate("/posts");
 
                 //history.push("/citizen_dashboard");
                 
                 //setredirect('/citizen_dashboard')
             }            
 
             
         }).catch(() => {
             console.log('data not retreived')
             console.log(alldata)
         })
         
        
         
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
       

       {/*style={{background: '#34e89e', background: '-webkit-linear-gradient(to right, #0f3443, #34e89e)',   background: 'linear-gradient(to left, #0f3443, #34e89e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ width:'100%', height:'643px',  */}
       <div  style={{ background : 'white'}} > 
            <div className="container"    >
                <div className="row" >
                    <div className="col-lg-4" style={{display:'flex', marginLeft:'-101px', marginTop:'-230px', width:'800px'}}>
                        <img src={sweepsin} alt="avatar" style={{width:'1602px', height:'850px'}}/>
                    </div> 
                    
                    <div className="col-lg-4" style={{fontSize:'20px', marginLeft:'140px'}} >
                    <div  style={{border:'4px solid', color:"#097969" , borderRadius: '25px',paddingTop:'5px', marginTop:'40px', height:'450px'}}>
                  <div class="section"  style={{backgroundImage:back}}>
                      <div class="container" style={{backgroundImage:back}}>
                          <div class="row full-height justify-content-center" style={{backgroundImage:back}}>
                              <div class="col-12 text-center align-self-center py-5" style={{backgroundImage:back}}>
                                  <div class="section pb-5 pt-5 pt-sm-2 text-center" style={{backgroundImage:back}}>
                                      {/* <h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6> */}
                                      {/* <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                      <label for="reg-log"></label> */}
                                      <div class="card-3d-wrap1 mx-auto">
                                          <div class="card-3d-wrapper1">
                                              <div class="card-front1">
                                                  <div class="center-wrap1">
                                                      <div class="section text-center" style={{backgroundImage:back}}>
                                                         
                                                  
                                                  
                                                       <h2 class="mb-3 pb-3" style={{color:"#097969", textAlign:"left", marginTop:'-150px', fontSize:'40px', fontWeight:'bold'}}>
                                                       <i class="fa-solid fa-trash" style={{color:"#097969"}}>  </i> Sweeper<br/>
                                                          Log In
                                                    </h2>
                                                
                                                         
                                                          <div class="form-group mt-2"  style={{color:"#097969"}} >
                                                              <input  onChange={(e) => eventHandler(e) }   type="email" name="logpass" class="form-style" placeholder="Your E-mail"  style={{color:"#097969"}} id="inputID" autocomplete="on" />
                                                                  <i class="input-icon uil uil-lock-alt" style={{color:"#097969"}}></i>
                                                                  
                                                          </div>
                                                          <div style={{
                                                                              fontWeight: 'bold',
                                                                              color: 'red',
                                                                              textAlign:'left',
                                                                             
                                                                              
      
                                                                              }}>{emailError}</div>
      
                                                          <div class="form-group mt-2" style={{color:"#097969"}}>
                                                              <input onChange={(e) => { setpassword(e.target.value);}} type="password"   class="form-style" placeholder="Your Password" id="inputID" style={{color:"#097969"}} autocomplete="off"/>
                                                                  <i class="input-icon uil uil-lock-alt" style={{color:"#097969"}}></i>
                                                                 
                                                          </div>
      
                                                          <a onClick={onSubmit} to={<SweeperDashboard/>} class="btn mt-4" style={{color:"#097969", fontWeight:'bold'}}>SIGN IN</a>
      
                                                        
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



{/* 
                     <Signup  
                            title="Sweeper"
                            placeholder1="Your Username"
                            button="Sign in"
                            redirect={redirect}
                            e1={eventHandler}
                            e2={eventHandler1}
                            onSubmit={onSubmit}
                            color= "#097969"
                            backgroundImage={SweeperSignin}
                     />
                    */}
                  </div>
                     
                    
                </div>
            </div>
        </div>
            
    
            </>  
  
  )
}

export default SweeperSignin