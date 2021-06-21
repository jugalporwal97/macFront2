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

    createStateService(data)
      .then((response) => {

        
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
