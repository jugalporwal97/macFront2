import React, { useState } from "react";
import Form from "../Form/Form";
import { createSchemesService } from "../services/schemes";
import ShowSchemes from "./ShowSchemes";


function Schemes() {
  const [FormGenerater, setFormGenerator] = useState({
    Schemes: {
      id: "Schemes",
      backendLabel: "name",
      label: "Schemes",
      name: "Schemes",
      type: "Schemes",
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


    createSchemesService(data)
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
        title={"Schemes"}
      />
   <ShowSchemes/>
    </div>
  );
}

export default Schemes;
