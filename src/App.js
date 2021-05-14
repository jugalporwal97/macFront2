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
import EditBank from "./Edit/EditBank";
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
import AdminNavBar from "./NavBar/AdminNavBar";
import AdminHome from "./Home/AdminHome";
import UserHome from "./Home/UserHome";

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
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AdminPannel />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AdminHome />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/createProduct"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <CreateProduct />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AdminHome />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/userDetails"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <UserDetails />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AdminHome />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/addProductData"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AddProductData />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AddProductData />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/edit"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <Edit />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <Edit />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/editBank"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <EditBank />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <EditBank />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/accessManager"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AccessManager />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AdminHome />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />

          <Route exact path="/states" render={() => <States />} />
          <Route exact path="/showstates" render={() => <ShowStates />} />
          <Route
            exact
            path="/Home"
            render={() => (
              <React.Fragment>
                {getUser().type == 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <HomeCom />
                    </div>
                  </div>
                ) : getUser().type == 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                      <AdminHome />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                      <UserHome />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
