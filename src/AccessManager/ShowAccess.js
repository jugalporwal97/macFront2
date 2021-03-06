import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import {
  deleteUseraccessDataService,

  getPagenatedaccessDataServise,
} from "../services/access";


import MaterialTable from "../Table/Table";

function ShowAccess(props) {
  //   const [row, setrow] = useState(initialState);

  const [Users, setUsers] = useState([]);
  const [total, settotal] = useState(0);

  // const rows = Users?{...Users}


  const columns=[
    { id: "userId", label: "User", minWidth: 150 },

    {
      id: "delete",
      label: "Delete",
      minWidth: 150,
    },
  ]
  const getPagenatedData = (pagenumber) => {
    getPagenatedaccessDataServise(pagenumber)
      .then((response) => {
        settotal(response.total);
        const body = Object.values(response.data).map((val) => {
          return {
            ...val,

            userId: props?.value.find((obj) => obj.val === val.userId)?.payload,

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



        setUsers(body);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };
  useEffect(() => {
    getPagenatedData(0);
  }, [props?.value]);

  // useEffect(() => {
  //   getAllUseraccessData()
  //     .then((response) => {

  // }, [props?.value]);

  const handleDelete = (id) => {
    deleteUseraccessDataService(id)
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

export default ShowAccess;
