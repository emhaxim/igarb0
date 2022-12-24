import React from 'react'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';   
import { NavLink } from 'react-router-dom';



import dayjs, { Dayjs } from 'dayjs';


import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import AdhashSide from './AdhashSide';
/*
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
*/


const AddTask = () => {

    const [value, setValue] = useState(dayjs('2022-04-07'));
    const [Compalain_date, setCompalain_date] = useState();
    const [Complain_location, setComplain_location] = useState('aa');
    const [Major_issue, setMajor_issue] = useState();
    const [Complain_Description, setComplain_Description] = useState();
  
  
    navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          });
  
  
  
  
    function onSubmit(e) {
      //e.preventDefault();
      //e.prevent.default()
      axios.post('http://127.0.0.1:8000/backend/addcomplain/', {
          Compalain_date: Compalain_date,
          Major_issue: Major_issue,
          Complain_location: Complain_location,
          Complain_Description: Complain_Description,
        
          
      }).then((response) => {
    
        console.log(response.data)
     
      })
  
      //navigate("/complain-submitted")
      
  }

// Time 


  


  return (

   <>

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
    <ul className="navbar-nav ml-auto" >
    <li><NavLink className='nav-link'  data-toggle="collapse"  exact activeClassName='active_class' style={{color:'white'}} to='/dashboard'>Home</NavLink></li>
      
      
        <li className="nav-item"> <NavLink className='nav-link'  href data-target="#myModal" style={{color:'white'}} data-toggle="modal" exact activeClassName='active_class' to='/admin-profile'>Profile</NavLink></li>
   
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



        <div class="container-fluid" id="main" style={{backgroundImage:'None'}}>
        <div class="row row-offcanvas row-offcanvas-left">
            
            <AdhashSide/>
            <section className='col main pt-5 mt-3' style={{backgroundColor: '#FAF9F6', marginTop:'30px'}} >

            
            

                
            <div className="container py-3" >
            
            
                <Form>  

            
        
        
            <div className="logo"  ><spam style={{color: '#215C84'}}>Assign Task</spam></div>
            <div className="row">
                <div className="col-lg-12">
        

                </div>
            
                <div className="col-lg-12">
                <div className="card mb-4">
                    <div className="card-body">

                    {/*Date*/}
                    <div className="row">
                        <div className="col-sm-3">
                        
                        <p className="mb-0" style={{fontWeight:'bold', fontSize:'20px'}}><span style={{color:"red"}}>*</span>Date:</p>
                        
                        </div>
                        <div className="col-sm-3">
                        <Form.Control onChange={(e) => {setCompalain_date(e.target.value);}} type="date"></Form.Control>
                        </div>  
                        <div className="col-sm-2">
                        <p   className="mb-0" style={{fontWeight:'bold' , fontSize:'20px'}}><span style={{color:"red" }}>*</span>Dustbin</p>
                        </div>
                        <div className="col-sm-3">
                        {/*<Form.Control placeholder="your city"  type="input"></Form.Control>*/}
                        
                        <Form.Select placeholder="Enter search term">
                        <option class="option" value="Other">select dustbin</option>  
                         <option>Dustbin Id : 1221, Islamabad, I-10/1</option>
                         <option>Dustbin Id : 9031, Islamabad, F-8/4</option>
                         <option>Dustbin Id : 4231, Islamabad, G-10/3</option>
                         <option>Dustbin Id : 1241, Islamabad, I-10/1</option>
                         <option>Dustbin Id : 4531, Islamabad, F-10/3</option>
                         <option>Dustbin Id : 6531, Islamabad, I-10/2</option>
                         <option>Dustbin Id : 9031, Islamabad, F-8/4</option>
                         <option>Dustbin Id : 4231, Islamabad, G-10/3</option>
                         <option>Dustbin Id : 1241, Islamabad, I-10/1</option>
                         <option>Dustbin Id : 4531, Islamabad, F-10/3</option>
                         <option>Dustbin Id : 6531, Islamabad, I-10/2</option>
                         <option>Dustbin Id : 9031, Islamabad, F-8/4</option>
                         <option>Dustbin Id : 4231, Islamabad, G-10/3</option>
                         <option>Dustbin Id : 1241, Islamabad, I-10/1</option>
                         <option>Dustbin Id : 4531, Islamabad, F-10/3</option>
                         <option>Dustbin Id : 6531, Islamabad, I-10/2</option>  
        
                          <option class="option" value="Other">select dustbin</option>                                       
                        </Form.Select>
                        </div>              
                    </div>
                    <br/>
                    {/*Date and City end*/}

                    {/*Major Complain issue*/}

                    <div className="row">
                        <div className="col-sm-3">
                        <p className="mb-0" style={{fontWeight:'bold' , fontSize:'20px'}}><span style={{color:"red"}}>*</span>Select major issue:</p>
                        </div>
                        <div className="col-sm-3">
                        <Form.Check 
                            type="radio"
                            label="Garbage Overflow"
                            name="group2"
                            id="radio1"
                            onChange={(e) => {setMajor_issue(e.target.value);}}
                            
                        /> 
                        <Form.Check
                            type="radio"
                            label="Untideness"
                            name="group2"
                            id="radio2" 
                            onChange={(e) => {setMajor_issue(e.target.value);}}
                        /> 
                        <Form.Check
                            type="radio"
                            label="Sewerage"
                            name="group2"
                            id="radio3"
                            onChange={(e) => {setMajor_issue(e.target.value);}}
                        /> 
                        <Form.Check
                            type="radio"
                            label="Other"
                            name="group2"
                            id="radio4"
                            onChange={(e) => {setMajor_issue(e.target.value);}}
                        /> 
                        </div>
                    
                        <div   className="col-sm-2" >
                            
                                <p className="mb-0 " style={{fontWeight:'bold' , fontSize:'20px'}} ><span style={{color:"red"}}>*</span>Sweeper</p>

                        </div>
                                <div   className="col-sm-3" >
                                <Form.Select placeholder="Enter search term" >
                                    <option>select sweeper</option>
                                    <option class="option" value="Abbottabad">Arshad</option>
                                    <option class="option" value="Adezai">Faisal</option>
                                    <option class="option" value="Ali Bandar">Shehbaz</option>
                                    <option class="option" value="Amir Chah">Gul</option>
                                </Form.Select> 

                                </div>
                            
                    
                        
                    </div>

        
                
                    {/*Major Complain issue end*/}

                    {/*Address
                    <div className="row">
                        
                    <InputGroup size="lg" >
                            <InputGroup.Text id="inputGroup-sizing-lg" 
                                            style={{fontWeight:'bold', fontSize:'20px'}}
                                            onChange={(e) => {setComplain_location(e.target.value);}}>
                                            

                                        Enter Location :   

                            </InputGroup.Text>
                        <Form.Control
                        
                        aria-label="Small"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                    {/*Address end*/}

                    {/*Write Complain }
                    <div className="row">
                        <div className="col-sm-9">

                        <br/><div   ><b>Write your Complaint in the box below:</b></div><br/>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        <Form.Control as="textarea" rows={3}   onChange={(e) => {setComplain_Description(e.target.value);}} />
                        </Form.Group>
                    </div>
                    {/*Write Complain end */}

                    <div className='row'>
                        <div   className="col-sm-6" >                    
                            <p className="mb-0 " style={{fontWeight:'bold' , fontSize:'20px'}} ><span style={{color:"red"}}>*</span>Start at</p>
                        </div>

                        <div   className="col-sm-6" >                    
                            <p className="mb-0 " style={{fontWeight:'bold' , fontSize:'20px'}} ><span style={{color:"red"}}>*</span>Deadline</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm-6" >
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <StaticTimePicker
                                    displayStaticWrapperAs="mobile"
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </LocalizationProvider>
                            </div>

                            <div className="col-sm-6" >
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StaticTimePicker
                                    displayStaticWrapperAs="mobile"
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                </LocalizationProvider>
                            </div>
                        </div>

                    <Button className="pull-right" variant="primary" type="submit" onClick={onSubmit} >
                    Submit
                    </Button>
                    </div>
                </div>
                
                </div>
            </div>
            
            </Form>

            </div>
            
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
            </section>


        </div>
        </div>

  </>
  )
}

export default AddTask