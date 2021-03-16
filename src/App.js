import React, { Component, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "./App.css";
import MaterialTable from "./Table/Table";
import Login from "./Login/Login";
import { Route } from "react-router";
import Form from "./Form/Form";
import AdminPannel from "./AdminPannel/AdminPannel";
import States from "./adminUtils/States";
import ShowStates from "./adminUtils/ShowStates";
import OwnerNavBar from "./NavBar/OwnerNavBar";
import UserNavBar from "./NavBar/UserNavBar";
import { Switch } from "react-router-dom";
import CreateProduct from "./CreateProduct/CreateProduct";
import AddProductData from "./AddProductData/AddProductData";
import UserDetails from "./UserDetails/UserDetails";
import UserLogs from "./UserLogs/UserLogs";
import AccessManager from "./AccessManager/AccessManager";
import Modals from "./Modals/Modals";
import Moment from "react-moment";
import "moment-timezone";
import {
  deleteBranchesService,
  getAllBranches,
  updateBranchesService,
} from "./services/branches";
import {
  deleteProductDataService,
  getAllProductData,
  updateProductDataService,
} from "./services/addProductData";
import Bank from "./Banks/Bank";

function App() {
  const [Search, SetSearch] = useState("");
  const [Users, setUsers] = useState([]);

  // const rows = Users?{...Users}
  const [edit, setEdit] = useState(["bankId", "allocatedToInspectorId"]);

  const [columns, setColumns] = useState([
    {
      id: "productId",
      label: "Product",
      minWidth: 100,
    },
    {
      id: "inwardDate",
      label: "Inward Date",
      minWidth: 100,
    },

    {
      id: "pan",
      label: "PAN",
      minWidth: 100,
    },
    {
      id: "unitTypeId",
      label: "Unit",
      minWidth: 100,
    },
    {
      id: "address",
      label: "Address",
      minWidth: 100,
    },
    {
      id: "benefits",
      label: "Benefits",
      minWidth: 100,
    },
    {
      id: "onlineReferenceNumber",
      label: "Online Reference Number",
      minWidth: 100,
    },
    {
      id: "allocatedToInspectorId",
      label: "Allocated Inspector",
      minWidth: 100,
    },
    {
      id: "contactPersonId",
      label: "Contact Person",
      minWidth: 100,
    },
    {
      id: "customerLoginId",
      label: "Customer Login",
      minWidth: 100,
    },
    {
      id: "customerLoginPassword",
      label: "Password",
      minWidth: 100,
    },

    {
      id: "bankId",
      label: "Bank",
      minWidth: 100,
    },
    {
      id: "branchId",
      label: "Branch",
      minWidth: 100,
    },
    {
      id: "cityId",
      label: "City",
      minWidth: 100,
    },
    {
      id: "loanAmount",
      label: "Loan Amount",
      minWidth: 100,
    },
    {
      id: "subsidy",
      label: "Subsidy",
      minWidth: 100,
    },

    {
      id: "sanctionDate",
      label: "Sanction Date",
      minWidth: 100,
    },
    {
      id: "lastDateOfApplication",
      label: "Last Date Of Application",
      minWidth: 100,
    },
    {
      id: "lastDateForJit",
      label: "Last Date For Jit",
      minWidth: 100,
    },
    {
      id: "lastDateForJitExtension",
      label: "Last Date For Jit Extension",
      minWidth: 100,
    },
    {
      id: "jitVisitDate",
      label: "Jit Visit Date",
      minWidth: 100,
    },

    {
      id: "marketingPersonId",
      label: "Marketing Person",
      minWidth: 100,
    },
    {
      id: "statusId",
      label: "Status",
      minWidth: 100,
    },

    {
      id: "stateDate",
      label: "Status Date",
      minWidth: 100,
    },
    {
      id: "uid",
      label: "Aadhar Number",
      minWidth: 100,
    },
    {
      id: "remark",
      label: "Remark",
      minWidth: 100,
    },
    {
      id: "inwardSlip",
      label: "Inward Slip",
      minWidth: 100,
    },
    {
      id: "referenceDate",
      label: "Reference Date",
      minWidth: 100,
    },

    {
      id: "categoryId",
      label: "Category",
      minWidth: 100,
    },
    {
      id: "schemeId",
      label: "Scheme",
      minWidth: 100,
    },
    {
      id: "interest",
      label: "Interest",
      minWidth: 100,
    },
    {
      id: "capital",
      label: "Capital",
      minWidth: 100,
    },
    {
      id: "claimUpTo",
      label: "Claim UpTo",
      minWidth: 100,
    },

    {
      id: "processDoneById",
      label: "Process DoneBy",
      minWidth: 100,
    },
    {
      id: "fileNumber",
      label: "File Number",
      minWidth: 100,
    },

    {
      id: "acknowledgementNumber",
      label: "Acknowledgement Number",
      minWidth: 100,
    },
    {
      id: "lastClaimQuarter",
      label: "Last Claim Quarter",
      minWidth: 100,
    },

    {
      id: "edit",
      label: "Edit",
      minWidth: 100,
    },
    {
      id: "delete",
      label: "Delete",
      minWidth: 100,
    },
  ]);

  useEffect(() => {
    getAllProductData()
      .then((response) => {
        const body = Object.values(response.data).map((val) => {
          return {
            ...val,
            inwardDate: val.inwardDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.inwardDate}
              </Moment>
            ),
            jitVisitDate: val.jitVisitDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.jitVisitDate}
              </Moment>
            ),

            sanctionDate: val.sanctionDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.sanctionDate}
              </Moment>
            ),

            lastDateOfApplication: val.lastDateOfApplication && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateOfApplication}
              </Moment>
            ),

            lastDateForJit: val.lastDateForJit && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateForJit}
              </Moment>
            ),

            lastDateForJitExtension: val.lastDateForJitExtension && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateForJitExtension}
              </Moment>
            ),

            stateDate: val.stateDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.stateDate}
              </Moment>
            ),
            referenceDate: val.referenceDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.referenceDate}
              </Moment>
            ),

            inwardSlip:
              val.inwardSlip && val.inwardSlip === true
                ? "true"
                : val.inwardSlip === false
                ? "false"
                : null,

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
        console.log(">>body", body);

        const temp = Object.values(body).map((bo) => {
          return {
            ...bo,
            bankId: bo.bank && bo.bank.name,
            cityId: bo.city && bo.city.name,
            statusId: bo.status && bo.status.name,

            schemeId: bo.scheme && bo.scheme.name,
            branchId: bo.branch && bo.branch.name,
            contactPersonId: bo.contactPerson && bo.contactPerson.name,

            marketingPersonId: bo.marketingPerson && bo.marketingPerson.name,
            processDoneById: bo.processDoneBy && bo.processDoneBy.name,

            categoryId: bo.category && bo.category.name,
            productId: bo.product && bo.product.name,
            unitTypeId: bo.unitType && bo.unitType.name,

            allocatedToInspectorId:
              bo.allocatedInspector && bo.allocatedInspector.name,
          };
        });

        // const temp = [...body, (body[0].bankId = body[0].bank.name)];

        console.log(">>temp", temp);
        setUsers(temp);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  const handleDelete = (id) => {
    deleteProductDataService(id)
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

  const searchSpace = (event) => {
    console.log(event.target.value);
    let keyword = event.target.value;
    SetSearch(keyword);
  };

  const handleUpdate = (id, val) => {
    updateProductDataService(id, val)
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
  const row = Users.filter((row) => {
    if (Search) {
      return row.productId
        .toString()
        .toLowerCase()
        .includes(Search.toString().toLowerCase());
    }
    return true;
  });

  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Switch>
          <Route
            exact
            path="/Login"
            render={() => <Login remember={true} title={"Sign Up"} />}
          />

          <Route
            exact
            path="/"
            render={() => <Login remember={true} title={"Sign Up"} />}
          />

          <Route
            exact
            path="/AdminPannel"
            render={() => (
              <div>
                <OwnerNavBar /> <AdminPannel />
              </div>
            )}
          />

          <Route
            exact
            path="/createProduct"
            render={() => (
              <div>
                <OwnerNavBar /> <CreateProduct />
              </div>
            )}
          />

          <Route
            exact
            path="/userDetails"
            render={() => (
              <div>
                <OwnerNavBar /> <UserDetails />
              </div>
            )}
          />

          <Route
            exact
            path="/addProductData"
            render={() => (
              <div>
                <OwnerNavBar /> <AddProductData />
              </div>
            )}
          />
          <Route
            exact
            path="/accessManager"
            render={() => (
              <div>
                <OwnerNavBar /> <AccessManager />
              </div>
            )}
          />
          {/* 
          <Route
            exact
            path="/userLogs"
            render={() => (
              <div>
                <OwnerNavBar /> <UserLogs />
              </div>
            )}
          /> */}

          <Route exact path="/states" render={() => <States />} />
          <Route exact path="/showstates" render={() => <ShowStates />} />
          <Route
            exact
            path="/Home"
            render={() => (
              <React.Fragment>
                <OwnerNavBar />
                <div className="TextField">
                  <TextField
                    onChange={(e) => searchSpace(e)}
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                  />
                </div>
                <div className="MaterialTable">
                  <MaterialTable rows={row} columns={columns} />
                  {/* <Paper className="container">
                    {" "}
                    <MaterialTable rows={row} columns={columns} />
                  </Paper> */}
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
