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

    console.log("bank",{value,id})
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

    console.log("aaaa", FormGenerater);

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});
    console.log("valuesss", data);

    createInspectorService(data)
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
        title={"Inspector"}
      />
<ShowInspector/>
    </div>
  );
}

export default Inspector;
