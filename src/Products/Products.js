import React, { useState } from "react";
import Form from "../Form/Form";

import { createproductsService } from "../services/products";

import ShowProducts from "./ShowProducts";



function Products() {
  const [FormGenerater, setFormGenerator] = useState({
    Products: {
      id: "Products",
      backendLabel: "name",
      label: "Products",
      name: "Products",
      type: "Products",
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

    console.log("aaaa", FormGenerater);

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});
    console.log("valuesss", data);

    createproductsService(data)
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
        title={"Products"}
      />
      <ShowProducts />
    </div>
  );
}

export default Products;
