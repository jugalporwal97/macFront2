import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import { createUseraccessService } from "../services/access";
import { createProductDataService } from "../services/addProductData";
import { getAllBank } from "../services/bank";
import { getAllBranches } from "../services/branches";
import { getAllcategories } from "../services/categories";
import { getAllContactPerson } from "../services/contactPerson";
import { getAllInspector } from "../services/inspector";
import { getAllMarketingPerson } from "../services/marketingPerson";
import { getAllProcessDoneBy } from "../services/processDoneBy";
import { getAllproducts } from "../services/products";

import { getAllSchemes } from "../services/schemes";
import { getAllStates } from "../services/state";
import { getAllStatus } from "../services/status";
import { getAllunitTypes } from "../services/unitTypes";
import { showUserService } from "../services/users";
import { getUser } from "../Utils/Common";
import ShowAccess from "./ShowAccess";

function AccessManager() {
  const [pid, setpid] = useState([]);
  const [userid, setuserid] = useState([]);

  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllproducts()
      .then((response) => {
        let value = [];
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }

        setpid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });

    showUserService()
      .then((response) => {
        console.log(">>userData", response.data);
        let value = [];
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.fullName;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }

        setuserid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  useEffect(() => {
    setFormGenerator({
      userId: {
        name: "userId",
        backendLabel: "userId",

        label: "User Name",
        value: userid,

        id: "userId",
        formValue: "",
        inputType: "select",
      },
      productId: {
        name: "productId",
        backendLabel: "productId",

        label: "Products Name",
        value: pid,

        id: "productId",
        formValue: "",
        inputType: "check",
      },

      read: {
        id: "read",
        backendLabel: "read",
        label: "Grant access to User",
        name: "read",
        value: ["true", "false"],
        inputType: "select",
        formValue: "",
      },
      write: {
        id: "write",
        backendLabel: "write",
        label: "Write",
        name: "write",
        value: ["true", "false"],
        inputType: "check",
        formValue: "",
      },
      update: {
        id: "update",
        backendLabel: "update",
        label: "Update",
        name: "update",
        value: ["true", "false"],
        inputType: "check",
        formValue: "",
      },
      remove: {
        id: "remove",
        backendLabel: "remove",
        label: "remove",
        name: "remove",
        value: ["true", "false"],
        inputType: "check",
        formValue: "",
      },
    });
  }, [pid, userid]);

  const updateForm = (e, id) => {
    e.preventDefault();

    const value = e.target.value;

    console.log("valueselected", value, typeof value);
    setFormGenerator((prev) => {
      let val;

      isNaN(value) ? (val = value) : (val = Number(value));
      if (val === null) {
        val = null;
      }

      console.log(typeof val);
      return {
        ...prev,
        [id]: {
          ...prev[id],
          formValue: val,
        },
      };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      if (item.formValue == "" && item.id == "productId") {
        item.formValue = 1;
      }
      if (item.formValue == "" && item.id == "write") {
        item.formValue = true;
      }
      if (item.formValue == "" && item.id == "update") {
        item.formValue = true;
      }
      if (item.formValue == "" && item.id == "remove") {
        item.formValue = true;
      }

      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});
    console.log("datatoserver", data);
    createUseraccessService(data)
      .then((response) => {
        alert("Form Successfully Submited.");
        console.log(">>session", response);
      })
      .catch((error) => {
        alert("Check Table Already Added");
        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      <Form
        FormGenerater={Object.values(FormGenerater)}
        submitForm={submitForm}
        updateForm={updateForm}
        title={"User Access"}
      />

      <ShowAccess value={userid} />
    </div>
  );
}

export default AccessManager;
