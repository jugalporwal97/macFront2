import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import { getAllBank, getPagenatedBankDataServise } from "../services/bank";
import { createBranchesService } from "../services/branches";
import ShowBranches from "./ShowBranches";

function Branches() {


  const [val, setVal] = useState([]);

  const [bankData,setBankData] = useState([]);
  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllBank()
    .then(async (response) => {
      const getPagenatedData = (pagenumber) => {
        getPagenatedBankDataServise(pagenumber)
          .then((response) => {
            setBankData((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("Something went wrong. Please try again later.");
          });
      };

      for (let index = 0; index < response.total / 10; index++) {
        await getPagenatedData(index);
      }

    })
    .catch((error) => {
      console.log("Something went wrong. Please try again later.");
    });

    
}, []);

useEffect(() => {

  const body = Object.values(bankData).map((k, v) => {
    return k.id;
  });
  const body2 = Object.values(bankData).map((k, v) => {
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
  })
},[bankData] )




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

    createBranchesService(data)
      .then((response) => {
        window.location.reload();
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
