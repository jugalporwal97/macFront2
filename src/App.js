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
import Edit from "./Edit/Edit";
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
import { getUser } from "./Utils/Common";
import HomeCom from "./Home/Home";

function App() {
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
            path="/edit"
            render={() => (
              <div>
                <Edit />
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

          <Route exact path="/states" render={() => <States />} />
          <Route exact path="/showstates" render={() => <ShowStates />} />
          <Route
            exact
            path="/Home"
            render={() => (
              <React.Fragment>
                <OwnerNavBar />
                <div className="">
                  <HomeCom />
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
