
import React, { useState, useEffect } from "react";

import {  getAlllogs } from "../services/logs";


import MaterialTable from "../Table/Table";

function ShowLogs() {
  //   const [row, setrow] = useState(initialState);
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}


  const columns = [

    { id: "userId", label: "UserId", minWidth: 150 }
    
  ];

  useEffect(() => {
    getAlllogs()
      .then((response) => {
  
        const body = Object.values(response.data).map((value) => {
          return {
            ...value
           
          };
        });

       

        setUsers(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <MaterialTable rows={Users} columns={columns} />
    </div>
  );
}

export default ShowLogs;
