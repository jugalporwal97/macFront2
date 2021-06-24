import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Modals from "../Modals/Modals";

import {
  deleteContactPersonService,

  getPagenatedContactPersonDataServise,
  updateContactPersonService,
} from "../services/contactPerson";

import MaterialTable from "../Table/Table";

function ShowContactPerson() {
  //   const [row, setrow] = useState(initialState);
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}
  const edit=["name", "contact"]
  const [total, settotal] = useState(0);

  const columns=[
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
  ]

  const getPagenatedData = (pagenumber) => {
    getPagenatedContactPersonDataServise(pagenumber)
      .then((response) => {
        settotal(response.total);
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

  

        setUsers(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };
  useEffect(() => {
    getPagenatedData(0);
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
      <MaterialTable
        total={total}
        getPagenatedData={getPagenatedData}
        rows={Users}
        columns={columns}
      />
    </div>
  );
}

export default ShowContactPerson;
