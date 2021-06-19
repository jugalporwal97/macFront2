import React, { useState } from "react";
import Form from "../Form/Form";
import { createBankService } from "../services/bank";
import ShowBank from "./ShowBank";



function Bank() {
  const [FormGenerater, setFormGenerator] = useState({
    banks: {
      id: "banks",
      backendLabel: "name",
      label: "banks",
      name: "banks",
      type: "banks",
      inputType: "text",
      formValue: "",
    },
  });


  const updateForm = (e, id) => {
  
console.log()
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


    createBankService(data)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div>
      <Form
        FormGenerater={Object.values(FormGenerater)}
        submitForm={submitForm}
        updateForm={updateForm}
        title={"Banks"}
      />
      <ShowBank />
    </div>
  );
}

export default Bank;
