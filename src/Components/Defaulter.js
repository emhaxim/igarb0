/* import React from 'react'
import  { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './CustomerService';
//import './DataTableDemo.css';
*/
/*
const Defaulter = () => {

    const [customers1, setCustomers1] = useState(null);
    const [customers2, setCustomers2] = useState(null);
    const [filters1, setFilters1] = useState(null);
    const [filters2, setFilters2] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'representative': { value: null, matchMode: FilterMatchMode.IN },
        'status': { value: null, matchMode: FilterMatchMode.EQUALS },
        'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [globalFilterValue2, setGlobalFilterValue2] = useState('');
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    const statuses = [
        'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
    ];

    const customerService = new CustomerService();

    useEffect(() => {
        customerService.getCustomersLarge().then(data => { setCustomers1(getCustomers(data)); setLoading1(false) });
        customerService.getCustomersLarge().then(data => { setCustomers2(getCustomers(data)); setLoading2(false) });
        initFilters1();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const getCustomers = (data) => {
        return [...data || []].map(d => {
            d.date = new Date(d.date);
            return d;
        });
    }

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const clearFilter1 = () => {
        initFilters1();
    }

    const onGlobalFilterChange1 = (e) => {
        const value = e.target.value;
        let _filters1 = { ...filters1 };
        _filters1['global'].value = value;

        setFilters1(_filters1);
        setGlobalFilterValue1(value);
    }

    const onGlobalFilterChange2 = (e) => {
        const value = e.target.value;
        let _filters2 = { ...filters2 };
        _filters2['global'].value = value;

        setFilters2(_filters2);
        setGlobalFilterValue2(value);
    }

    const initFilters1 = () => {
        setFilters1({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'representative': { value: null, matchMode: FilterMatchMode.IN },
            'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'activity': { value: null, matchMode: FilterMatchMode.BETWEEN },
            'verified': { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue1('');
    }

    const renderHeader1 = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const renderHeader2 = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
                <span className="image-text">{rowData.country.name}</span>
            </React.Fragment>
        );
    }

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} className="p-button-secondary"></Button>;
    }

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} className="p-button-success"></Button>
    }

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>;
    }

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;
        return (
            <React.Fragment>
                <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{representative.name}</span>
            </React.Fragment>
        );
    }

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    }

    const representativesItemTemplate = (option) => {
        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={`images/avatar/${option.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
                <span className="image-text">{option.name}</span>
            </div>
        );
    }

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    }

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
    }

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    }

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    }

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const statusItemTemplate = (option) => {
        return <span className={`customer-badge status-${option}`}>{option}</span>;
    }

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false}></ProgressBar>;
    }

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        )
    }

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', {'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified})}></i>;
    }

    const verifiedFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterCallback(e.value)} />
    }

    const representativeRowFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterApplyCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" maxSelectedLabels={1} />;
    }

    const statusRowFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select a Status" className="p-column-filter" showClear />;
    }

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
    }

    const header1 = renderHeader1();
    const header2 = renderHeader2();


  return (
     <div className="datatable-filter-demo">
            <div className="card">
                <h5>Filter Menu</h5>
                <p>Filters are displayed in an overlay.</p>
                <DataTable value={customers1} paginator className="p-datatable-customers" showGridlines rows={10}
                    dataKey="id" filters={filters1} filterDisplay="menu" loading={loading1} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header1} emptyMessage="No customers found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country"
                        filterClear={filterClearTemplate} filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                    <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeFilterTemplate} />
                    <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate}
                        filter filterElement={dateFilterTemplate} />
                    <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                    <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                    <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
                </DataTable>
            </div>

            <div className="card">
                <h5>Filter Row</h5>
                <p>Filters are displayed inline within a separate row.</p>
                <DataTable value={customers2} paginator className="p-datatable-customers" rows={10}
                    dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header2} emptyMessage="No customers found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem'}} style={{ minWidth: '14rem' }} body={representativeBodyTemplate}
                        filter filterElement={representativeRowFilterTemplate} />
                    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
                </DataTable>
            </div>
        </div>
  )
}



// src/components/sorting.table.js
import React from "react";

import { useTable, useSortBy } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy
    )

    // Render the UI for your table
    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */ //}
                                     /*
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        )
                                    })}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <br />
            <div>Showing the first 20 results of {rows.length} rows</div>
        </div >
    )
}

*/
import React from "react";

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
            <h2 style={{marginTop:"10px", marginBottom:"5px"}}>Defaulters</h2>
            <input
                style={{ width:"300px", border:"1px solid"}}
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`Search`}
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
            placeholder={`Search ${count} records...`}
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



function Defaulter() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'ID',
                columns: [
                    {
                        Header: 'Emp ID',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Emp Name',
                        accessor: 'lastName'
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'City',
                        accessor: 'age'
                    },
                    {
                        Header: 'Sector/Area',
                        accessor: 'visits'
                    },
                    {
                        Header: 'No. of faults',
                        accessor: 'status'
                    },
                    {
                        Header: 'Decrement (Rs)',
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
            "progress": 1000,
            "status": 2
        },
        {
            "firstName": "1324",
            "lastName": "k. William",
            "age": "Islamabad",
            "visits": "I-8/1",
            "progress": 500,
            "status": 1
        },
        {
            "firstName": "8745",
            "lastName": "B. Stokes",
            "age": "Islamabad",
            "visits": "F-6/2",
            "progress": 1500,
            "status": 3
        },
        {
            "firstName": "3242", 
            "lastName": "F. Jim",
            "age": "Islamabad",
            "visits": "I-10/ 1",
            "progress": 1000,
            "status": 2
        }
    ]

    return (
        <div style={{backgroundColor:"white", padding:"30px", fontSize:"20px", height:'654px'}} className="col main pt-5 mt-3">
        <Table columns={columns} data={data} />
        
        
        </div>
        

    )
}

export default Defaulter