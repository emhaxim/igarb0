import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../index.css';
import '../admdash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Admin_dashboard = () => {
    const [alldata, setalldata] = useState(['4'])
    
    
    //  http://localhost:3001/allregister
    axios.get('http://127.0.0.1:8000/backend/register/').then((response) => {
        setalldata(response.data)
    }).catch(() => {
        console.log('data not retreived')
    })

    function deleteCitizen(email) {
        axios.delete(`http://127.0.0.1:8000/backend/del/${email}`)
    }

    

    return (
        <>
            <div className="admin_dashboard">
                <div className="dashboard_container">
                <h1 className="heading">ADMIN DASHBOARD</h1>

                    <div className="buttons">
                        <button>ALL REGISTERED CITIZENS</button>
                        <button>DELETE CITIZEN</button>
                        <button>UPDATE CITIZEN</button>
                        <button>ADD CITIZEN</button>
                    </div>
                    <h1 className="heading_support">ALL REGISTERED CITIZENS</h1>

                    <div className="dashboard_content">
                        {alldata.map((val) => {
                            return (
                              <div className="cards">
                                    <div className="card">
                                        <img className="imgsrc" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950' alt='my img' />
                                        <div className="info">
                                            <p className='org_info'>{val.email}</p>
                                            <h3 className='ser_name'>{val.first_name} {val.last_name}</h3>
                                            <h2 className='ser_name'>{val.phone}</h2>
                                            <NavLink to='' >
                                                <button onClick={() => {
                                                    deleteCitizen(val.email)
                                                }}>DELETE</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            );
                               
                                
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

