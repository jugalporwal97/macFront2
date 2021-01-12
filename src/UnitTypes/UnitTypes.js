import React, { useState } from "react";


import Form from "../Form/Form";
import { createunitTypesService } from "../services/unitTypes";

import ShowUnitTypes from "./ShowUnitTypes"


function UnitTypes() {
  const [FormGenerater, setFormGenerator] = useState({
    UnitTypes: {
      id: "UnitTypes",
      backendLabel: "name",
      label: "UnitTypes",
      name: "UnitTypes",
      type: "UnitTypes",
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

    console.log("aaaa", FormGenerater);

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});
    console.log("valuesss", data);

    createunitTypesService(data)
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
        title={"UnitTypes"}
      />
   <ShowUnitTypes/>
    </div>
  );
}

export default UnitTypes;
