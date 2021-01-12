import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Modals from "../Modals/Modals";

import { deleteUserService, showUserService, updateuserService } from "../services/users";
import MaterialTable from "../Table/Table";

function UserDetails() {
  //   const [row, setrow] = useState(initialState);
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}
  const [edit,setEdit] = useState(['fullName',"email"])

  const [columns, setColumns] = useState([
    { id: "email", label: "Email", minWidth: 150 },
    { id: "fullName", label: "FullName", minWidth: 150 },
    { id: "type", label: "Rights", minWidth: 150 },
    {
      id: "edit",
      label: "Edit",
      minWidth: 150,
    },
    {
      id: "delete",
      label: "Delete",
      minWidth: 150,
    },
  ]);

  useEffect(() => {
    showUserService()
      .then((response) => {
        console.log("responsedatauserDetails",response.data)
        const body = Object.values(response.data).map((value) => {
          return {
            ...value,
            edit: (
              <Button variant="contained" color="primary">
                <Modals editable={edit}  onhandleUpdate={handleUpdate} name={"edit"} data={value} />
              </Button>
            ),
            delete: (
              <Button onClick={()=>handleDelete(value.id)} variant="contained" color="secondary">
                Delete
              </Button>
            ),
          };
        });

        console.log(
          body.map((bof) => {
            return bof.type === 1
              ? (bof.type = "OWNER")
              : bof.type === 2
              ? (bof.type = "ADMIN")
              : (bof.type = "USER");
          })
        );

        setUsers(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
   
    deleteUserService(id)
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
    
    updateuserService(id, val)
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

export default UserDetails;
