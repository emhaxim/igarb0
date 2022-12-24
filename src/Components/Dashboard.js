//import {useEffect,useState} from 'react';
//import axios from 'axios';
import {Chart, ArcElement} from 'chart.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Adhashbody from './Adhashbody';
import AdhashSide from './AdhashSide';
import Employee from './Employee';
//import Employee from './Employee';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CitizenProfile from './CitizenProfile';
import { Main } from './Main';


Chart.register(ArcElement);

const Dashboard = () => {



  const [conditionA, setconditionA] = useState(true);
  // Condition B to view add complain page


 function changeConditionA(){
 
  
  setconditionA(!conditionA)


}

   const [alldata, setalldata] = useState([])
   const [img, setImg] = useState(-1)
    
  //const[record,setRecord] = useState([])
  

  /* const getData = () =>
   {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => {
        setRecord(response.data)})
       
   }
   
   useEffect(() => {
      getData();
   },)
    
   console.log(record)*/
    return (
     <>
    


      {/*<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3" >*/}

      <nav className="navbar fixed-top navbar-expand-md  mb-3"   style={{backgroundColor:'#43484C', color:"white"}}>
  <div className="flex-row d-flex" >
  
    <div className="logo pl-4 ml-1">i<spam>G</spam>arb0</div>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="navbar-collapse collapse" id="collapsingNavbar">
    {/*
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="//www.codeply.com">Link</a>
      </li>
    </ul>  */}
    <ul className="navbar-nav ml-auto">
    <li><NavLink className='nav-link'  data-toggle="collapse"  exact activeClassName='active_class' to='/dashboard'>Home</NavLink></li>
      
      
        <li className="nav-item"> <NavLink className='nav-link'  href data-target="#myModal" data-toggle="modal" exact activeClassName='active_class' to='/admin-profile'>Profile</NavLink></li>
   
   {/*}
    <li className="nav-item">
        <a className="nav-link" href data-target="#myModal" data-toggle="modal">About</a>
  </li> */}
      
      <li className="nav-item">
        <a className="nav-link waves-effect waves-light text-white">
          <i className="fas fa-envelope-open-text" />
        </a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link waves-effect waves-light text-white">
          <i className="fas fa-align-justify" />
        </a>
      </li>
    </ul>
  </div>
</nav>
<br></br>

{/*nav close */}

{/*side bar*/}

<div class="container-fluid" id="main" style={{backgroundImage:'None'}}>
<div class="row row-offcanvas row-offcanvas-left">
      
      <AdhashSide/>
      <Adhashbody/>
      
      

      
            
    
  </div>
</div>
     
      
{/*dashboard */}



</>
    )
}
 
export default Dashboard;