import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter } from "react-router-dom";
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

class App extends Component {
  state = {
    search: "",
    columns: [
      { id: "name", label: "Name", minWidth: 170 },
      { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
      {
        id: "population",
        label: "Population",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "size",
        label: "Size\u00a0(km\u00b2)",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
      },
      {
        id: "density",
        label: "Density",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
      },
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
    ],

    rows: [
      this.createData("India", "IN", 1324171354, 3287263),
      this.createData("China", "CN", 1403500365, 9596961),
      this.createData("Italy", "IT", 60483973, 301340),
      this.createData("United States", "US", 327167434, 9833520),
      this.createData("Canada", "CA", 37602103, 9984670),
      this.createData("Australia", "AU", 25475400, 7692024),
      this.createData("Germany", "DE", 83019200, 357578),
      this.createData("Ireland", "IE", 4857000, 70273),
      this.createData("Mexico", "MX", 126577691, 1972550),
      this.createData("Japan", "JP", 126317000, 377973),
      this.createData("France", "FR", 67022000, 640679),
      this.createData("United Kingdom", "GB", 67545757, 242495),
      this.createData("Russia", "RU", 146793744, 17098246),
      this.createData("Nigeria", "NG", 200962417, 923768),
      this.createData("Brazil", "BR", 210147125, 8515767),
    ],
  };
  searchSpace = (event) => {
    console.log(event.target.value);
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  createData(name, code, population, size) {
    const density = population / size;
    return {
      name,
      code,
      population,
      size,
      density,
      edit: (
        <Button variant="contained" color="primary">
          Edit
        </Button>
      ),
      delete: (
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      ),
    };
  }

  render() {
    const row = this.state.rows.filter((row) => {
      if (this.state.search) {
        return row.name
          .toString()
          .toLowerCase()
          .includes(this.state.search.toString().toLowerCase());
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

            <Route
              exact
              path="/userLogs"
              render={() => (
                <div>
                  <OwnerNavBar /> <UserLogs />
                </div>
              )}
            />

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
                      onChange={(e) => this.searchSpace(e)}
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                    />
                  </div>
                  <div className="MaterialTable">
                    <MaterialTable rows={row} columns={this.state.columns} />
                  </div>
                </React.Fragment>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
