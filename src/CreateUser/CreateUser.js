import React, { useState } from "react";
import Form from "../Form/Form";

import { createUserService } from "../services/users";
function CreateUser() {
  //     const createUser = (e) => {
  //         e.preventDefault()
  //         setError(null);
  //         setLoading(true);

  //         axios.post('http://18.216.109.16:3232/user', { email: email, password: password , strategy: 'local' }).then(response => {
  //           setLoading(false);
  //           console.log(">>session",response.data.accessToken)

  //           setUserSession(response.data.accessToken, response.data.user);
  //           props.history.push('/Home');
  //         }).catch(error => {
  //           setLoading(false);
  //           if (error.response.status === 401) setError(error.response.data.message);
  //           else setError("Something went wrong. Please try again later.");
  //         });

  // ////
  // axios.post('http://18.216.109.16:3232/users', {
  //  email: e,
  //  password: varPassword
  // },
  // {
  //   headers: {
  //     Authorization: 'Bearer ' + varToken
  //   }
  // })
  // ////

  //       }

  const [FormGenerater, setFormGenerator] = useState({
    email: {
      id: "email",
      backendLabel: "email",
      label: "Email Address",
      name: "email",
      type: "email",
      inputType: "text",
      formValue: "",
    },
    fullName: {
      name: "fullName",
      label: "Fullname",
      backendLabel: "fullName",
      type: "text",
      id: "fullName",
      formValue: "",
      inputType: "text",
    },
    password: {
      name: "access",
      backendLabel: "password",

      label: "Password",
      type: "password",
      id: "password",
      inputType: "text",
      formValue: "",
    },

    accessType: {
      name: "accessType",
      backendLabel: "type",

      label: "Access Type",
      value: [
        { val: 1, payload: "owner" },
        { val: 2, payload: "admin" },
        { val: 3, payload: "user" },
      ],

      id: "accessType",
      formValue: "",
      inputType: "select",
    },
  });

  // const [formData, setFormData] = useState({
  //   name: {
  //     value: "",
  //   },
  // });

  const updateForm = (e, id) => {
    e.preventDefault();

    const value = e.target.value;
    setFormGenerator((prev) => {
      return {
        ...prev,
        [id]: {
          ...prev[id],
          formValue: value,
        },
      };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});

    createUserService(data)
      .then((response) => {
        alert("Form Successfully Submited.");
        console.log(">>session", response);
      })
      .catch((error) => {
        alert("Enter Correct Values Some Error.");

        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      {/* <input
        type="text"
        name="name"
        // value={formData["name"].value}
        onChange={(e) => {
          const key = e.target.name;
          const value = e.target.value;
          console.log("<<<XXx", {
            [e.target.name]: e.target.value,
          });
          setFormData((prev) => {
            return {
              ...prev,
              [key]: value,
            };
          });
        }}
      /> */}
      <Form
        FormGenerater={Object.values(FormGenerater)}
        submitForm={submitForm}
        updateForm={updateForm}
        title={"Create User"}
      />
    </div>
  );
}

export default CreateUser;
