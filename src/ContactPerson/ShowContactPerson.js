import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Modals from "../Modals/Modals";

import {
  deleteContactPersonService,
  getAllContactPerson,
  updateContactPersonService,
} from "../services/contactPerson";

import MaterialTable from "../Table/Table";

function ShowContactPerson() {
  //   const [row, setrow] = useState(initialState);
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}
  const [edit, setEdit] = useState(["name", "contact"]);

  const [columns, setColumns] = useState([
    { id: "name", label: "Contact Person", minWidth: 150 },
    { id: "contact", label: "Contact", minWidth: 150 },
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
    getAllContactPerson()
      .then((response) => {
        const body = Object.values(response.data).map((value) => {
          return {
            ...value,
            edit: (
              <Button variant="contained" color="primary">
                <Modals
                  editable={edit}
                  onhandleUpdate={handleUpdate}
                  name={"edit"}
                  data={value}
                />
              </Button>
            ),
            delete: (
              <Button
                onClick={() => handleDelete(value.id)}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            ),
          };
        });

        // console.log(
        //   body.map((bof) => {
        //     return bof.type === 1
        //       ? (bof.type = "OWNER")
        //       : bof.type === 2
        //       ? (bof.type = "ADMIN")
        //       : (bof.type = "USER");
        //   })
        // );

        setUsers(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    deleteContactPersonService(id)
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
  const handleUpdate = (id, val) => {
    updateContactPersonService(id, val)
      .then((response) => {
        setUsers((prevstate) => {
          return prevstate.map((user) => {
            return user.id === response.id ? { ...user, ...response } : user;
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

export default ShowContactPerson;
