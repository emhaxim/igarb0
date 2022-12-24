import React from 'react'
//import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Container ,Card,Row, Col, Button} from 'react-bootstrap';
import { useState } from 'react';


function CitizenProfile(props) {

  const [img, setImg] = useState(-1)
  const [first_name, setfirst_name] = useState();

  function updateName(){

    setImg(-1)
   

    const citizen = {
      citizen_id : props.citizen_id,
      email : props.email,
      phone : props.phone,
      first_name : props.first_name,
      last_name : props.last_name,
      
  }

/*
  useEffect(() => {
    axios.put('http://127.0.0.1:8000/backend/updatecitizen/', data).then((response) => {
    setalldata(response.data.data)
    props.first_name = response.data.data['email']
    console.log(response.data.data)
    setfirst_name(response.data.first_name)

    console.log(alldata)
  }).catch(() => {
      console.log('data not retreived')
  })

},[])
  axios.put('http://dummy.restapiexample.com/api/v1/update/{this.state.id}', employee)
  .then(res => console.log(res.data));
}*/
  }

   
    return (
       
        <section style={{backgroundColor: '#FAF9F6' ,  overflow: "hidden"}} >
          
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
          
                  <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
                    <h5 className="my-3">{props.alldata['first_name']} {props.alldata['last_name']}</h5>
                    <p className="text-muted mb-1">Member since 2020</p>
                    <p className="text-muted mb-4">Rawalpindi, Pakistan</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary" style={{ backgroundColor: '#1DBF73', borderColor: '#1DBF73'}}  onClick={props.toggleBool}>Change Profile Picture</button>
                      {/*<button type="button" className="btn btn-outline-primary ms-1">Message</button>*/}
                    </div>
                  </div>
                </div>

                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning" />
                        <p className="mb-0">https://mdbootstrap.com</p>
                      </li>
                     
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fab fa-instagram fa-lg" style={{color: '#ac2bac'}} />
                        <p className="mb-0">mdbootstrap</p>
                      </li>
                      <br/>
                        
                    
                    </ul>
                  </div>
                </div>
              </div>

              
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Name</p>
                      </div>
                      <div className="col-sm-9">
                      {img==1 ? (   

                                    <div class="row">
                                     
                                    <input placeholder="name" style={{}} className='col-lg-5'/>
                                    <button onClick={updateName} type="button"  style={{width:"50px", backgroundColor:'#1DBF73', color:"white"}} className="btn col-lg-2 ml-5" >Save</button>

                                     {/*<i onClick={() => { setImg(-1) } } class="fa-solid fa-bookmark  col-lg-5"></i> */}
                                     {/*  <button onClick={() => { setImg(-1) } }  >save</button> */}
                                    </div>
                                    //<== Conditionaly to appear or not
                                  ) : (
                                    <div class="row">
                                      <span className='col-lg-5' style={{ }}> {props.alldata['first_name']} 
                                      <i onClick={() => { setImg(1) } } class="fa-solid fa-pen-to-square col-lg-5 " style={{alignItem:"left", color:"#FF62AD"}}  ></i>
                                      </span>
                                      
                                      {/*<button >edit</button> */} 
                                    </div>
                            )}  

                        {/* <p className="text-muted mb-0">{props.alldata['first_name']} {props.alldata['last_name']}</p> */}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{props.alldata['email']} </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+92) {props.alldata['phone']}8</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(+92) 765-4321</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Rawalpindi, Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4"><span  className="text-primary font-italic me-1">Profile</span> Status
                        </p>
                        <p className="mb-1" style={{fontSize: '.77rem'}}>Profile Completion</p>
                        <div className="progress rounded" style={{height: '5px'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>feedback</p>
                        <div className="progress rounded" style={{height: '5px'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4"><span className="text-primary font-italic me-1">Complaint</span> Status
                        </p>
                        <p className="mb-1" style={{fontSize: '.77rem'}}>Complaints Submission</p>
                        <div className="progress rounded" style={{height: '5px'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <p className="mt-4 mb-1" style={{fontSize: '.77rem'}}>Complaints Resolved</p>
                        <div className="progress rounded" style={{height: '5px'}}>
                          <div className="progress-bar" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link>
        </section>
      );
 
}

export default CitizenProfile


