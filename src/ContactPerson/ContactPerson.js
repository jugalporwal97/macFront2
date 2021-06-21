import React, { useState,useEffect } from "react";
import Form from "../Form/Form";


import { createContactPersonService } from "../services/contactPerson";
import ShowContactPerson from "./ShowContactPerson";



function ContactPerson() {



  const [FormGenerater, setFormGenerator] = useState({ContactPerson: {
    id: "ContactPerson",
    backendLabel: "name",
    label: "Name",
    name: "ContactPerson",
    type: "ContactPerson",
    inputType: "text",
    formValue: "",
  },
  Contact: {
    id: "Contact",
    backendLabel: "contact",
    label: "Contact",
    name: "Contact",
    type: "Contact",
    inputType: "text",
    formValue: "",
  }
})
  

  

  


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

  createContactPersonService(data)
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
        title={"Contact Person"}
      />
  <ShowContactPerson/>
    </div>
  );
}

export default ContactPerson;
