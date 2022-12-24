import nocomplain from'..//images//nocomplain.gif'
import Table from 'react-bootstrap/Table';

import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useState, useRef, useEffect } from 'react';


const Nocomplain = () => {


  const [active, setActive] = useState(1);
  

let items = [];
for (let number = 0; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  let data = [ {'Complaint_Id' : '0f2343k', 'Date' : 'OCT 20, 2022', 'Major_issue' : 'Garbage Overflow', ' Description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'Citizen': 'M. Hashim Khan'},
  {'Complaint_Id' : '0aafrdk', 'Date' : 'OCT 30, 2022', 'Major_issue' : 'Garbage Overflow', ' Description' : 'Lorem ipsum it, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', 'Citizen': 'M. Hashim Khan'}
             ]
  return (
    < div style={{backgroundColor:"white"}}>

      
        
      <div style={{backgroundColor:"#EDEADE"}}>
      {/*  <br/>
        <Pagination size="lg"   onClick={(e) => {setActive(e.target.value);}} >{items}</Pagination>
  {[active]} */}
        <div style={{paddingTop:"50px", backgroundColor:"white" }}>
        <i class="fa-solid fa-calendar-week fa-2x ml-4" style={{ color: '#62646A' }} ><spam  style={{ color: '#IDBF73', marginTop:"400px", marginLeft:"20px"}}>Your complains details</spam></i><br></br>      
          {/*<span style={{fontSize:"20px", fontWeight:"bold", fontFamily:"Helvetica Neue, Helvetica"}}>Your complain details</span><br></br> */}                   
        </div>
        
        <div style={{margin:"50px", backgroundColor:"white", padding:"25px", borderRadius:"2px" }} >
          <div className='row'>
              <b col-lg-1 style={{fontSize:"23px", color:'#1DBF73'}}>Complaint # <i> {data[active]['Complaint_Id']}</i> <span className='ml-1' style={{fontSize:"15px", padding:"5px", backgroundColor:"#FF62AD", color:"white", borderRadius:"20px"}}>Inprogress</span></b>
              <b col-lg-1>Area</b>
              <span>Sector I-10/1 street # 58, Islamabad</span>

              <b col-lg-1>Dated</b>
              <span> {data[active]['Date']}</span>

              <b col-lg-1>Major Issue</b>
              <span>Garbage Overflow</span><br/><br/>

              <b col-lg-1>Complain Description</b>
              <p style={{fontSize:"15px"}}>
              {data[active]['Description']}
              {/*}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/>
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/>
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br/>
  sunt in culpa qui officia deserunt mollit anim id est laborum. */}
              </p>

              <b col-lg-1>Submitted  by</b>
              <span><i> {data[active]['Citizen']}</i></span>
          </div>
          
        </div>
        
      </div>
      
    <div style={{margin:"30px"}}>


  

    <Table striped  hover >
      <thead>
        <tr>
          <th>ID </th>
          <th>Descripton</th>
          <th>Location</th>
          <th>Date</th>
          <th>Major Issue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>


        <img src={nocomplain} alt="loading..." style={{width:"500px", height:"335px", objectFit:"cover", marginLeft:'250px' }} />
        
    </div>
  )
}

export default Nocomplain