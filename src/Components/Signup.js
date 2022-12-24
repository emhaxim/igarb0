import React from 'react'
import '../index.css';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import validator from 'validator';
import back from '../images/back.png'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Citizen_dashboard } from './Citizen_dashboard';
import ComplainPage from './ComplainPage';

export const Signup = (props) => {



    let navigate = useNavigate();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [redirect, setredirect] = useState('');
    const [alldata, setalldata] = useState([])

    const [myBool, setmyBool] = useState(false);
    const [Vemail, setVemail] = useState();


    const [emailError, setEmailError] = useState('')
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
        validateEmail(event)
        const value = event.target.value;
        setemail(value);
    }

    function eventHandler1(event) {
        const value = event.target.value;
        setpassword(value);
    }
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      

    function onSubmit(e) {
       //e.preventDefault();

        axios.post('http://127.0.0.1:8000/backend/signin/', {

            
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
                navigate("/citizen_dashboard"); 
               

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


    

    

    const data = { 'email': Vemail };

    return (
        <>
        { console.log(Vemail)}
        {
            <span>
                {myBool ? <Citizen_dashboard email = {Vemail}/>

               

                  :     //<ComplainPage email = {Vemail} > 
                  <div  style={{border:'1px solid white', borderRadius: '25px', marginTop:'40px', height:'550px'}}>
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
                                                         
                                                  <i class="fa-solid fa-arrow-right-to-arc" style={{color:props.color}}> <h2 class="mb-3 pb-3" style={{color:props.color, textAlign:"left"}}><span>{props.title}</span> Log In</h2></i>
                                                         
                                                          <div class="form-group mt-2" >
                                                              <input  onChange={(e) => eventHandler(e) }  style={{color:props.color}}  type="email" name="logpass" class="form-style" placeholder="Your E-mail" id="logpass" autocomplete="off" />
                                                                  <i class="input-icon uil uil-lock-alt" style={{color:props.color}}></i>
                                                                  
                                                          </div>
                                                          <div style={{
                                                                              fontWeight: 'bold',
                                                                              color: 'red',
                                                                              textAlign:'left',
                                                                             
                                                                              
      
                                                                              }}>{emailError}</div>
      
                                                          <div class="form-group mt-2">
                                                              <input onChange={(e) => { setpassword(e.target.value);}} type="password" color={props.color}  class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                                                                  <i class="input-icon uil uil-lock-alt" style={{color:props.color}}></i>
                                                                 
                                                          </div>
      
                                                          <a onClick={onSubmit} to={<Citizen_dashboard/>} class="btn mt-4" style={{color:props.color}}>{props.button}</a>
      
                                                          <p class="mb-0 mt-4 text-center" style={{color:props.color}}>Please click <Link to="/citizen_registeration" class="link">here</Link> for registration!</p>
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
                 
                 }
            </span>
             }
        
        </>
    )
}
