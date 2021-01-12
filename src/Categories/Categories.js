import React, { useState } from "react";
import Form from "../Form/Form";
import { createcategoriesService } from "../services/categories";
import ShowCategories from "./ShowCategories";





function Categories() {
  const [FormGenerater, setFormGenerator] = useState({
    Categories: {
      id: "Categories",
      backendLabel: "name",
      label: "Categories",
      name: "Categories",
      type: "Categories",
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

    createcategoriesService(data)
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
        title={"Categories"}
      />
      <ShowCategories />
    </div>
  );
}

export default Categories;
