import React, { useEffect, useState, useMemo  } from 'react';
import Header from "components/Header";

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
      const getData = () => {

        fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
        .then(res => res.json())
        .then(
          (json) => {
            setUsers(json);
            console.log(json);
            
          });
        }
    }, []);
    
    const usersData = useMemo(() => {
      let computedUsers = users;
  // function changeEmployeeData(e){

   },[users]);
      return (

        <div className="row w-100">
                <div className="col mb-3 col-12 text-center">
                    <div className="row">
                        <div className="col-md-6"></div>
                        </div>
                        </div>

       <div>
         <h1>Details</h1>
         {/* <tr>
         <th scope="row" key={user.id}>
                                        {user.id}
                                    </th>

         <td>{user.first_name}</td>
         <td>{user.last_name}</td>
         <td>{user.age}</td>
         <td>{user.email}</td> 
         </tr> */}
       </div>
       </div>
        

      );
}

 export default Details;