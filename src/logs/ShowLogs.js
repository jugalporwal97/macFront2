import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Modals from "../Modals/Modals";
import { deletelogsService, getAlllogs, updatelogsService } from "../services/logs";


import MaterialTable from "../Table/Table";

function ShowLogs() {
  //   const [row, setrow] = useState(initialState);
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}


  const [columns, setColumns] = useState([

    { id: "userId", label: "UserId", minWidth: 150 }
    
  ]);

  useEffect(() => {
    getAlllogs()
      .then((response) => {
        console.log("responselogsDetails",response.data)
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

  const handleDelete = (id) => {
   
    deletelogsService(id)
      .then((response) => {
        setUsers((prevstate) => {
          return prevstate.filter((user) => {
            return user.id !== response.id;
          });
        });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };
  const handleUpdate = (id,val) => {
    
    updatelogsService(id, val)
      .then((response) => {
       
        setUsers((prevstate) => {
          return prevstate.map((user) => {
            return user.id === response.id ? {...user,...response} : user;
          });
        });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <MaterialTable rows={Users} columns={columns} />
    </div>
  );
}

export default ShowLogs;
