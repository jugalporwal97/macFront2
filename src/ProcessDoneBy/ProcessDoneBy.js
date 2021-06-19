import React, { useState } from "react";
import Form from "../Form/Form";
import { createProcessDoneByService } from "../services/processDoneBy";
import ShowProcessDoneBy from "./ShowProcessDoneBy";



function ProcessDoneBy() {
  const [FormGenerater, setFormGenerator] = useState({
    ProcessDoneBy: {
      id: "ProcessDoneBy",
      backendLabel: "name",
      label: "ProcessDoneBy",
      name: "ProcessDoneBy",
      type: "ProcessDoneBy",
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


    createProcessDoneByService(data)
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
        title={"Process Done BY"}
      />
      <ShowProcessDoneBy />
    </div>
  );
}

export default ProcessDoneBy;
;
