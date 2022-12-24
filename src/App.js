import React from 'react'
import Slideshow, { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Main } from './Components/Main';
import { Navbar } from './Components/Navbar';
import {HashRouter, Route, Routes} from 'react-router-dom';

import { Signup } from './Components/Signup';
import { Admin_Login } from './Components/Admin_Login';
import { Sweeper_login } from './Components/Sweeper_login';
import { Citizen_Registeration } from './Components/Citizen_Registeration';
import { Admin_dashboard } from './Components/Admin_dashboard';
import { Citzen_sinin } from './Components/Citzen_sinin';
import { Citizen_dashboard } from './Components/Citizen_dashboard';
import Dashboard from './Components/Dashboard';
import AdashHeader from './Components/AdashHeader';


//temp
import ComplainPage from './Components/ComplainPage';
import OurTeam from './Components/OurTeam';
import Nocomplain from './Components/Nocomplain';
import Checkme from './Components/Checkme';
import VerifyEmail from './Components/VerifyEmail';
import ComplainSub from './Components/ComplainSub';
import Employee from './Components/Employee';
import Defaulter from './Components/Defaulter';
import DefaulterPage from './Components/DefaulterPage';
import AdminProfile from './Components/AdminProfile';
import CompletedComplaints from './Components/CompletedComplaints';
import InprogressComplaints from './Components/InprogressComplaints';
import AllComplaints from './Components/AllComplaints';
import FilledDustbin from './Components/FilledDustbin';
import NotFilledDustbins from './Components/NotFilledDustbins';
import AllDustbins from './Components/AllDustbins';
import AllEmployees from './Components/AllEmployees';
import Charts from './Components/Charts';
import AdminAnalytics from './Components/AdminAnalytics';
import AddTask from './Components/AddTask';
import SweeperDashboard from './Components/SweeperDashboard';
import AddEmployee from './Components/AddEmployee';
import SweeperSignin from './Components/SweeperSignin';
//<Navbar/>

export const App = () => {
  return (
    <>
      
      <Routes>
        
        <Route exact path = '/' element = {<Main/>}/>
        <Route exact path = '/about' element = {<About/>}/>
        <Route exact path = '/dashboard' element = {<Dashboard/>}/>
        <Route exact path = '/employee' element = {<Employee/>}/>
        <Route exact path = '/contact' element = {<Contact/>}/>
        <Route exact path = '/admin_signin' element = {<Admin_Login/>}/>
        <Route exact path = '/sweeper_signup' element = {<Sweeper_login/>}/>
        <Route exact path = '/citizen_signup' element = {<Citzen_sinin/>}/>
        <Route exact path = '/citizen_registeration' element = {<Citizen_Registeration/>}/>
        <Route exact path = '/admin_dashboard' element = {<Admin_dashboard/>}/>
        <Route exact path = '/adheader' element = {<AdashHeader/>}/>
        <Route exact path = '/citizen_dashboard' element = {<Citizen_dashboard/>}/>
        <Route exact path = '/team' element = {<OurTeam/>}/>
        <Route exact path = '/nocomplain' element = {<Nocomplain/>}/>
        {/*temp*/}
        <Route exact path = '/complain' element = {<ComplainPage/>}/>
        <Route exact path = '/check' element = {<Checkme/>}/>
        <Route exact path = '/complain-submitted' element = {<ComplainSub/>}/>


        <Route exact path = '/verify-email' element={<VerifyEmail/>}></Route>
        <Route exact path = '/defaulter' element={<DefaulterPage/>}></Route>

        <Route exact path = '/admin-profile' element={<AdminProfile/>}></Route>

        <Route exact path = '/comp-complaints' element={<CompletedComplaints/>}></Route>
        <Route exact path = '/Inprog-complaints' element={<InprogressComplaints/>}></Route>
        <Route exact path = '/all-complaints' element={<AllComplaints/>}></Route>    
        

        <Route exact path = '/filled-dustbins' element={<FilledDustbin/>}></Route>
        <Route exact path = '/notfilled-dustbins' element={<NotFilledDustbins/>}></Route>
        <Route exact path = '/all-dustbins' element={<AllDustbins/>}></Route>

        <Route exact path = '/all-employee' element={<AllEmployees/>}></Route>
        <Route exact path = '/charts' element={<Charts/>}></Route>
        <Route exact path = '/admin-analytics' element={<AdminAnalytics/>}></Route>
        <Route exact path = '/add-task' element={<AddTask/>}></Route>
        <Route exact path = '/sweeper-dashboard' element={<SweeperDashboard/>}></Route>
        <Route exact path = '/add-employee' element={<AddEmployee/>}></Route>

        <Route exact path = '/employee-signin' element={<SweeperSignin/>}></Route>


      </Routes>
    </>
  )
}

export default App;
