import axios from 'axios';
import React, { useState , useEffect} from 'react'

import AdhashSide from './AdhashSide';

import { NavLink } from 'react-router-dom';
import { CSVLink, CSVDownload } from "react-csv";


import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';


// Define a default UI for filtering
function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            <h2 style={{marginTop:"10px", marginBottom:"5px", color:"#1DBF73"}}>All Dustbins</h2>
            <input
                style={{ width:"300px", border:"1px solid"}}
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search Globaly`}
            />
        </span>
    )
}

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search`}
        />
    )
}

function Table({ columns, data }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )
    

    const [ statusColor , setStatusColor] = useState('green');

    const changeStatusColor = (e) => {
        
        console.log("Value : ",e)
        var stats = e.target.value
            
            console.log(stats)
            if (  stats == 'filled') {
                setStatusColor('green')
        
            } else {
                setStatusColor('red')
            }
            
    }
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn
        },
        useFilters,
        useGlobalFilter
    )

    return (
        <div style={{backgroundColor : "white"}}>
            <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    
                                    console.log('Cell : ', cell.value)
                                    return <td   onChange={(e) => changeStatusColor(cell.value)} style={cell.value === 'filled' ? { fontWeight:'bold' ,color: '#1DBF73' } : cell.value === 'Not Filled' ? {fontWeight:'bold', color:  'red'} : {}}   {...cell.getCellProps()} >
                                       
                                       
                                        {cell.render('Cell')}
                                        </td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div class="row">
              <div class="col-md-12 bg-light text-right">
              {
                <CSVLink data={data}>
                <button type="button" className="btn btn-primary" style={{ backgroundColor: '#1DBF73', borderColor: '#1DBF73', alignItems:"centre", fontWeight:"bold", fontSize:"19px"}}  onClick={{}}>Download CSV</button>
                </CSVLink>
                }
              
              </div>
            </div>
           
          
         <br />
            <div > <span  style={{color:"#FF62AD", fontWeight:"bold"}}>Note:</span><br/>
                You can download the Table data in <i><b>CSV File</b></i>  for your convenience</div>
           
         
    
        </div>
    )
}

const AllDustbins = () => {
   
    const [ weight , setWeight] = useState('');
    const [ volume , setVolume] = useState('');
    const [ status , setStatus] = useState('Unfilled');

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.thingspeak.com/channels/1927387/feeds.json?api_key=6QLRP0NXLZ3BCSUI&results=1')
                .then((response) => 
                {
                   // console.log(response)
                    console.log(response.data.feeds[0].field1)
                    setWeight(response.data.feeds[0].field1)
                    setVolume(response.data.feeds[0].field2)

                    if (response.data.feeds[0].field1 > 10) {
                         setStatus('filled')
                         
                        
                            axios.post('http://127.0.0.1:8000/backend/send-message/', data).then((response) => {
                        }).catch(() => {
                            console.log('data not retreived')
                        })
                        
                       
                    }
                    
                   // setTotalReactPackages(response.feeds.field2)
                 
                }

                );
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Dustbin Information Table',
                columns: [
                    {
                        Header: 'Dustbin ID',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Sweeper',
                        accessor: 'lastName'
                    },
                ],
            },
            {
                Header: '( You can view or download the record(s) )',
                columns: [
                    {
                        Header: 'City',
                        accessor: 'age'
                    },
                    {
                        Header: 'Weight (kg)',
                        accessor: 'visits'
                    },
                    {
                        Header: 'Volume',
                        accessor: 'status'
                    },
                    {
                        Header: 'Status',
                        accessor: 'progress'
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "firstName": "2123",
            "lastName": "A. Smith",
            "age": "Islamabad",
            "visits": weight,
            "progress": status,
            "status": '50%'
        },
        {
            "firstName": "1324",
            "lastName": "k. William",
            "age": "Rawalpindi",
            "visits": weight,
            "progress": status,
            "status": '75%'
        },
        {
            "firstName": "8745",
            "lastName": "B. Stokes",
            "age": "Islamabad",
            "visits": weight,
            "progress": status,
            "status": '80%'
        },
        {
            "firstName": "3242", 
            "lastName": "F. Jim",
            "age": "Islamabad",
            "visits": weight,
            "progress": status   ,
            "status": '44% '
        },
        {
            "firstName": "3242", 
            "lastName": "K. Jerome",
            "age": "Islamabad",
            "visits": weight,
            "progress": status    ,
            "status": '37% '
        },
        {
            "firstName": "3242", 
            "lastName": "J. Hilton",
            "age": "Islamabad",
            "visits":  weight,
            "progress": status   ,
            "status": '81% '
        },
        {
            "firstName": "3242", 
            "lastName": "S. Steward",
            "age": "Islamabad",
            "visits":  8,
            "progress": 'Not Filled'    ,
            "status": '56% '
        },
        {
            "firstName": "3242", 
            "lastName": "F. Jim",
            "age": "Islamabad",
            "visits": '',
            "progress": 'Not Filled'    ,
            "status": '73% '
        }
    ]

    return (
        <> 
        
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3" >
        <div className="flex-row d-flex">
        
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
            <li className="nav-item">
            <li><NavLink className='nav-link'   data-toggle="collapse"  exact activeClassName='active_class' to='/dashboard'>Home</NavLink></li>
              {/*<a className="nav-link" href="#myAlert" data-toggle="collapse" onClick={changeConditionA}>Home</a>*/}
            </li>
            <li className="nav-item">
              <a className="nav-link" href data-target="#myModal" data-toggle="modal">About</a>
            </li>
            
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

        
              <div class="container-fluid" id="main" style={{backgroundImage:'None'}}>
        <div class="row row-offcanvas row-offcanvas-left">
            
            <AdhashSide/>
            
            

                
                    
            
    


        <div style={{backgroundColor:"white", padding:"30px", fontSize:"20px", height:'880px'}} className="col main pt-5 mt-3">
        <Table columns={columns} data={data} />
        </div>
        

        </div>
        </div>

        </>

    )
}

export default AllDustbins