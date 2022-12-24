import React from "react";
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
            <h2 style={{marginTop:"10px", marginBottom:"5px", color:"#1DBF73"}}>Filled Dustbins</h2>
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
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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


const FilledDustbin = () => {
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
            "visits": "1-9/1",
            "progress": 'Filled',
            "status": 'Sep 20, 2022'
        },
        {
            "firstName": "1324",
            "lastName": "k. William",
            "age": "Rawalpindi",
            "visits": "Waris Khan",
            "progress": 'Filled',
            "status": 'Dec 1, 2022'
        },
        {
            "firstName": "8745",
            "lastName": "B. Stokes",
            "age": "Islamabad",
            "visits": "F-6/2",
            "progress": 'Filled',
            "status": 'Oct 23, 2022'
        },
        {
            "firstName": "3242", 
            "lastName": "F. Jim",
            "age": "Islamabad",
            "visits": "I-10/ 1",
            "progress": 'Filled'    ,
            "status": 'Nov 19, 2022 '
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
            
            

                
                    
            
    


        <div style={{backgroundColor:"white", padding:"30px", fontSize:"20px", height:'654px'}} className="col main pt-5 mt-3">
        <Table columns={columns} data={data} />
        </div>
        

        </div>
        </div>

        </>

    )
}

export default FilledDustbin