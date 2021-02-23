import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import {
  deleteInspectorService,
  getAllInspector,
  updateInspectorService,
} from "../services/inspector";

import MaterialTable from "../Table/Table";

function ShowInspector() {
  //   const [row, setrow] = useState(initialState);
  const [Cities, setCities] = useState([]);

  // const rows = Cities?{...Cities}

  const [columns, setColumns] = useState([
    { id: "name", label: "Inspector", minWidth: 170 },
    {
      id: "edit",
      label: "Edit",
      minWidth: 170,
      align: "right",
    },
    {
      id: "delete",
      label: "Delete",
      minWidth: 170,
      align: "right",
    },
  ]);

  useEffect(() => {
    getAllInspector()
      .then((response) => {
        const body = Object.values(response.data).map((value) => {
          return {
            ...value,
            edit: (
              <Button
                variant="contained"
                onClick={() => {
                  handleUpdate(value.id);
                }}
                color="primary"
              >
                Edit
              </Button>
            ),
            delete: (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleDelete(value.id);
                }}
              >
                Delete
              </Button>
            ),
          };
        });

        setCities(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    deleteInspectorService(id)
      .then((response) => {
        setCities((prevstate) => {
          return prevstate.filter((city) => {
            return city.id !== response.id;
          });
        });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };
  const handleUpdate = (id) => {
    const value = prompt("enter new value");
    updateInspectorService(id, value)
      .then((response) => {
        setCities((prevstate) => {
          return prevstate.map((city) => {
            return city.id === response.id ? { ...city, ...response } : city;
          });
        });

        // window.location.reload(false);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <MaterialTable rows={Cities} columns={columns} />
    </div>
  );
}

export default ShowInspector;
