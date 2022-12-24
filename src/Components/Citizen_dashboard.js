import React from 'react'
import { Link } from 'react-router-dom';
//import './assets/css/fonts.css';
import CitizenProfile from './CitizenProfile';
import ComplainPage from './ComplainPage';
import { useState } from 'react';
import Nocomplain from './Nocomplain';
import axios from 'axios';
import {useEffect} from "react";
import Charts from './Charts';



const datetime = new Date().toDateString();

export const Citizen_dashboard = (props) => {


  console.log(props)
  
  const [email, setemail] = useState(props.email);


  const [first_name, setfirst_name] = useState();
  const [last_name, setlast_name] = useState();
  
  const [phone, setphone] = useState();
  const [alldata, setalldata] = useState([])

  const data = { 'email': 'emhaxim@gmail.com' };

  console.log('props : ', props)
  useEffect(() => {
    axios.post('http://127.0.0.1:8000/backend/getcitizen/', data).then((response) => {
    setalldata(response.data.data)
    setemail(response.data.data['email'])
    console.log(response.data.data)
    setfirst_name(response.data.first_name)

    console.log(alldata)
  }).catch(() => {
      console.log('data not retreived')
  })

},[])

  
  
  



  const [myBool, setmyBool] = useState(true);
  // Condition A to view profile page
  const [conditionA, setconditionA] = useState(true);
   // Condition B to view add complain page
  const [conditionB, setconditionB] = useState(false);
  // Condition C to view complains
  const [conditionC, setconditionC] = useState(false);
  // Condition D to view analytics
  const [conditionD, setconditionD] = useState(false);

  function toggleBool() {
    setmyBool(!myBool)
  }
    
  function changeConditionA(){

    setconditionA(true)
    setconditionB(false)
    setconditionC(false)
    setconditionD(false)

  }

  function changeConditionB(){

    setconditionA(false)
    setconditionB(true)
    setconditionC(false)
    setconditionD(false)

  }

  function changeConditionC(){

    setconditionA(false)
    setconditionB(false)
    setconditionC(true)
    setconditionD(false)
  }

  function changeConditionD(){

    setconditionA(false)
    setconditionB(false)
    setconditionC(false)
    setconditionD(true)
  }

  return (

    


    <  >
    <div>

      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3"  style={{overflow:"hidden"}}>
        <div className="flex-row d-flex">
        <div className="flex-row d-flex">
  
        <div className="logo ml-4">i<spam>G</spam>arb0</div>
      </div>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="collapsingNavbar">
          
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light text-white">
                <i className="fas fa-envelope-open-text" />
              </a>
            </li>
            <li className="nav-item mr-3">
              <a className="nav-link waves-effect waves-light text-white" data-target="#logout" data-toggle="collapse" >
                <i className="fas fa-align-justify fa-1x" />
              </a>
                          <ul class="list-unstyled flex-column pl-3 collapse" id="logout" aria-expanded="false">
                            <li class="nav-item mb-2 "><a to="/citizen_signup"  class="nav-link text-secondary" ><i  style={{color:'#fff'}}  class=" fas fa-book-medical"></i><span  style={{color:'#fff'}}  className="ml-3">Logout</span> </a></li>
                         
                          </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/*nav close */}
      <div class="container-fluid" id="main">
      <div class="row row-offcanvas row-offcanvas-left">
            

            <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:'#43484C'}}>
                  <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 "  >
                      <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h4 style={{color:'#fff'}} >Welcome!</h4> <h5 style={{color:'#fff'}}><br></br>Mr. {alldata['first_name']}  {alldata['last_name']} </h5></a></li>
                      <li class="nav-item mb-2 "><a class="nav-link text-secondary" onClick={changeConditionA} ><i  style={{color:'#fff'}} class="fas fa-user font-weight-bold"></i> <span className="ml-3" style={{color:'#fff'}}>My Profile</span></a></li>
                      <li class="nav-item mb-2">
                          <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i style={{color:'#fff'}}  class="far fa-file-word font-weight-bold"></i> <span className="ml-3" style={{color:'#fff'}} > Complain▾</span></a>
                          <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                            <li class="nav-item mb-2 "><a onClick={changeConditionB}  class="nav-link text-secondary" ><i  style={{color:'#fff'}}  class=" fas fa-book-medical"></i><span  style={{color:'#fff'}}  className="ml-3">Add</span> </a></li>
                            <li class="nav-item mb-2 "  ><a onClick={changeConditionC} class="nav-link text-secondary" > <i  style={{color:'#fff'}}  class="fas fa-book-reader "></i> <span  style={{color:'#fff'}}  className="ml-3">View</span> </a></li>
                          </ul>
                      </li>
                      <li class="nav-item mb-2 "><a class="nav-link text-secondary" onClick={changeConditionD} ><i  style={{color:'#fff'}} class="fas fa-chart-bar font-weight-bold"></i> <span className="ml-3" style={{color:'#fff'}}>Analytics</span></a></li>
                     {/*<li class="nav-item mb-2"><a class="nav-link text-secondary" onClick={changeConditionA} ><i style={{color:'#fff'}} class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3" style={{color:'#fff'}}>Notifications</span></a></li> */}
                    
                  </ul>
            </div>

            <div class="col main pt-5 mt-3" >
              
            {/*<CitizenProfile/>*/}

            {
            <span>
                {conditionA ? <CitizenProfile alldata = {alldata}/> 
                  : conditionB ?  <ComplainPage email = {props.email}/>  
                  : conditionC ?  <Nocomplain />  
                  : conditionD ?  <Charts />  
                  : <Nocomplain /> }
            </span>
             }

           {/* myBool ? <CitizenProfile  /> : <ComplainPage /> */}
            </div>
            
            </div>
      </div>     
       

      </div>
      

    </>
   
  )
}
