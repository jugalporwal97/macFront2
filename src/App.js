
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Login from "./Login/Login";
import { Route } from "react-router";

import AdminPannel from "./AdminPannel/AdminPannel";

import OwnerNavBar from "./NavBar/OwnerNavBar";
import UserNavBar from "./NavBar/UserNavBar";
import { Switch } from "react-router-dom";
import CreateProduct from "./CreateProduct/CreateProduct";
import AddProductData from "./AddProductData/AddProductData";
import UserDetails from "./UserDetails/UserDetails";

import AccessManager from "./AccessManager/AccessManager";

import Edit from "./Edit/Edit";
import EditBank from "./Edit/EditBank";
import "moment-timezone";

import { getUser } from "./Utils/Common";
import HomeCom from "./Home/Home";
import AdminNavBar from "./NavBar/AdminNavBar";
import AdminHome from "./Home/AdminHome";
import UserHome from "./Home/UserHome";
import Search from "./Search/Search";
import SearchAdmin from "./Search/SearchAdmin";
import SearchUser from "./Search/SearchUser";

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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AdminPannel />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
            path="/search"
            render={() => (
              <React.Fragment>
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <Search />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
                  <div>
                    <AdminNavBar />
                    <div className="">
                    <SearchAdmin />
                    </div>
                  </div>
                ) : (
                  <div>
                    <UserNavBar />
                    <div className="">
                    <SearchUser />
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <CreateProduct />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <UserDetails />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AddProductData />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <Edit />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <EditBank />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <AccessManager />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
            path="/Home"
            render={() => (
              <React.Fragment>
                {getUser().type === 1 ? (
                  <div>
                    <OwnerNavBar />
                    <div className="">
                      <HomeCom />
                    </div>
                  </div>
                ) : getUser().type === 2 ? (
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
