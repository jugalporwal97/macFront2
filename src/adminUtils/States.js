import React, { useState } from "react";
import Form from "../Form/Form";
import { createStateService } from "../services/state";
import ShowStates from "./ShowStates";

function States() {
  const [FormGenerater, setFormGenerator] = useState({
    cities: {
      id: "cities",
      backendLabel: "name",
      label: "Cities",
      name: "cities",
      type: "cities",
      inputType: "text",
      formValue: "",
    },
  });

  const updateForm = (e, id) => {
    e.preventDefault();
    
    const value = e.target.value;
    
    console.log("cit",{value,id})
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

    createStateService(data)
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
        title={"Cities"}
      />
      <ShowStates />
    </div>
  );
}

export default States;
