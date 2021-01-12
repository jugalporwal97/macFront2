import React, { useState } from "react";
import Form from "../Form/Form";

import { createStatusService } from "../services/status";

import ShowStatus from "./ShowStatus";

function Status() {
  const [FormGenerater, setFormGenerator] = useState({
    status: {
      id: "status",
      backendLabel: "name",
      label: "status",
      name: "status",
      type: "status",
      inputType: "text",
      formValue: "",
    },
  });

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
    console.log("valuesss", data);

    createStatusService(data)
      .then((response) => {
        console.log(">>session", response);
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
        title={"Status"}
      />
      <ShowStatus />
    </div>
  );
}

export default Status;
