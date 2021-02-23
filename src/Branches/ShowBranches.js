import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Modals from "../Modals/Modals";
import {
  deleteBranchesService,
  getAllBranches,
  updateBranchesService,
} from "../services/branches";

import MaterialTable from "../Table/Table";

function ShowBranches(props) {
  //   const [row, setrow] = useState(initialState);
  const j = "ds";
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}
  const [edit, setEdit] = useState(["name", "bankId"]);

  const [columns, setColumns] = useState([
    { id: "name", label: "BranchName", minWidth: 150 },
    { id: "bankId", label: "Bank", minWidth: 150 },
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
    getAllBranches()
      .then((response) => {
        const body = Object.values(response.data).map((val) => {
          return {
            ...val,
            bankId: props?.value.find((obj) => obj.val == val.bankId)?.payload,
            edit: (
              <Button variant="contained" color="primary">
                <Modals
                  editable={edit}
                  onhandleUpdate={handleUpdate}
                  name={"edit"}
                  data={val}
                />
              </Button>
            ),
            delete: (
              <Button
                onClick={() => handleDelete(val.id)}
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
  }, [props?.value]);

  const handleDelete = (id) => {
    deleteBranchesService(id)
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
    updateBranchesService(id, val)
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

export default ShowBranches;
