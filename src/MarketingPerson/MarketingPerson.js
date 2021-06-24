import React, { useState } from "react";
import Form from "../Form/Form";
import { createMarketingPersonService } from "../services/marketingPerson";
import ShowMarketingPerson from "./ShowMarketingPerson";




function MarketingPerson() {



  const [FormGenerater, setFormGenerator] = useState(
      {
    MarketingPerson: {
    id: "MarketingPerson",
    backendLabel: "name",
    label: "Name",
    name: "MarketingPerson",
    type: "MarketingPerson",
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
  createMarketingPersonService(data)
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
        title={"Marketing Person"}
      />
  <ShowMarketingPerson  />
    </div>
  );
}

export default MarketingPerson;
