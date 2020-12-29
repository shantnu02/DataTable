import React, { useEffect, useState, useMemo  } from 'react';
import {useRouteMatch} from "react-router-dom";
import{BrowserRouter as Router,Switch,useParams, Route,useLocation,Link} from "react-router-dom"
import { matchPath } from "react-router";
import DataTable from '.';

function Details() {
    
  const [users, setUsers] = useState([]);

  const ITEMS_PER_PAGE = 10;


  const headers = [
    { name: "Id", field: "id" },
    { name: "First Name", field: "first_name" },
    { name: "Last Name", field: "last_name" },
    { name: "Age", field: "age" },
    { name: "E-mail", field: "email" },
    { name: "Website", field: "web" }
];

    useEffect(()=> {
         if(!user.length)
        getData();
    }, []);
        
      const getData = () => {

        fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
       .then(response => response.json())
        .then(json => {
           const _user = json.filter(user => user.id == props.userId);
            console.log(props, _user)
             setUsers(_user.length ? _user[0]:[]);
            
          });
        };
   
      const { id } = useParams()
   const match = useRouteMatch('/users/:id')
 

   },[users]);
      return (
                 <div >

         <text><h1>Details</h1><br/>ID: {user.id}<br/>First Name: {user.first_name}<br/>Last Name: {user.last_name}<br/>Company Name: {user.company_name}<br/>City: {user.city}<br/>State: {user.state}<br/>Zip: {user.zip}<br/>Email: {user.email}<br/>Web: {user.web}<br/>Age: {user.age}<br/></text>
        
       </div>
        

      );
}

 export default Details;
