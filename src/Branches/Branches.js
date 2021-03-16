import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import { getAllBank } from "../services/bank";
import { createBranchesService } from "../services/branches";
import ShowBranches from "./ShowBranches";

function Branches() {
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

  const [val, setVal] = useState([]);
  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllBank()
      .then((response) => {
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        const value = [];
        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }
        setVal(value);

        setFormGenerator({
          Branch: {
            id: "Branch",
            backendLabel: "name",
            label: "Branch Name",
            name: "Branch",
            type: "text",
            inputType: "text",
            formValue: "",
          },

          accessType: {
            name: "accessType",
            backendLabel: "bankId",

            label: "Bank Name",
            value: value,

            id: "accessType",
            formValue: "",
            inputType: "select",
          },
        });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  // const [formData, setFormData] = useState({
  //   name: {
  //     value: "",
  //   },
  // });

  const updateForm = (e, id) => {
    e.preventDefault();

    const value = e.target.value;
    console.log("valueselected", value);
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
    console.log("datatoserver", data);
    createBranchesService(data)
      .then((response) => {
        console.log(">>session", response);
      })
      .catch((error) => {
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
        title={"Branches"}
      />
      <ShowBranches value={val} />
    </div>
  );
}

export default Branches;
