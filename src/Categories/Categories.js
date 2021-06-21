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


    createcategoriesService(data)
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
        title={"Categories"}
      />
      <ShowCategories />
    </div>
  );
}

export default Categories;
