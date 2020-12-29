import React, { useEffect, useState, useMemo } from "react";
import Header from "components/Header";
import { TableHeader, Pagination, Search } from "components/DataTable";
import useFullPageLoader from "hooks/useFullPageLoader";
// import ExternalInfo from "components/ExternalInfo";
import AppConfig from "App.config";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, BrowserRouter,useLocation} from 'react-router-dom';
// import Rout from './Rout';
//  import { Link } from 'react-router';
    
function DataTable() {
    const [users, setUsers] = useState([]);
    const [loader, showLoader, hideLoader] = useFullPageLoader();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });

    const ITEMS_PER_PAGE = 50;

    const headers = [
        { name: "Id", field: "id", sortable: false },
        { name: "First Name", field: "first_name", sortable: true },
        { name: "Last Name", field: "last_name", sortable: true },
        { name: "Age", field: "age", sortable: true },
        { name: "E-mail", field: "email", sortable: true },
        { name: "Website", field: "web", sortable: true }
    ];

    useEffect(() => {
        if(!users.length)
            getData();
    }, []);
        
        const getData = () => {
            showLoader();

            fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
                .then(response => response.json())
                .then(json => {
                    hideLoader();
                    setUsers(json);
                    console.log(json);
                });
        };

      

   

    const usersData = useMemo(() => {
        let computedUsers = users;

        if (search) {
            computedUsers = computedUsers.filter(
                user => user.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())

            );
        }

        setTotalItems(computedUsers.length);

        //Sorting users
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedUsers = computedUsers.sort(
                (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedUsers.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [users, currentPage, search, sorting]);
    // console.log(this.props)
      let location = useLocation();
    
    return (
        <>
            {/* <Header title="Building a data table in react" /> */}



            <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)} />
                        </div>
                        <div className="col-md-6 d-flex flex-row-reverse">
                            <Search
                                onSearch={value => {
                                    setSearch(value);
                                    setCurrentPage(1);
                                } } />
                        </div>
                    </div>

                    <table className="table table-striped">

                        <TableHeader
                            headers={headers}
                            onSorting={(field, order) => setSorting({ field, order })} />
                        <tbody>
                            {usersData.map(user => (
                                <tr>
                                    <th scope="row" key={user.id}>
                                        {user.id}
                                    </th>
                                    
                                    {/* {<td>{user.id}</td> } */}
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td><Link to={"/Details/"+user.id}>{user.web}</Link></td>
                                    {/* <button>view</button> */}
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {loader}
                                {/* {this.pro  ps.children} */}
        </>
    );
}

export default DataTable;
