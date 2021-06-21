import React, { useState } from "react";
import Form from "../Form/Form";

import { createInspectorService } from "../services/inspector";
import ShowInspector from "./ShowInspector";



function Inspector() {
  const [FormGenerater, setFormGenerator] = useState({
    Inspector: {
      id: "Inspector",
      backendLabel: "name",
      label: "Inspector",
      name: "Inspector",
      type: "Inspector",
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

    createInspectorService(data)
      .then((response) => {
        // window.location.reload();
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
        title={"Inspector"}
      />
<ShowInspector/>
    </div>
  );
}

export default Inspector;
