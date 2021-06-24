import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from "react-router";
import "./Edit.css";

import Form from "../Form/Form";
import { updateBranchesService } from "../services/branches";
import { getAllBank, getPagenatedBankDataServise } from "../services/bank";


function EditBank(props) {
  const location = useLocation();

  const formdata = location.state.detail;



  const [bid, setbid] = useState([]);


  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllBank()
    .then(async (response) => {
      const getPagenatedData = (pagenumber) => {
        getPagenatedBankDataServise(pagenumber)
          .then((response) => {
            setbid((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("Something went wrong. Please try again later.");
          });
      };

      for (let index = 0; index < response.total / 10; index++) {
        await getPagenatedData(index);
      }

    })
    .catch((error) => {
      console.log("Something went wrong. Please try again later.");
    });

    
}, []);
  useEffect(() => {
    setFormGenerator((prevValues) => {
  
      const x = {
        ...prevValues,

        bankId: {
          ...prevValues["bankId"],
          formValue: formdata.bankId,
        },
        name: {
          ...prevValues["name"],
          formValue: formdata.name,
        },
      };


      return x;
    });
  }, []);

  useEffect(() => {
    const body = Object.values(bid).map((k, v) => {
      return k.id;
    });
    const body2 = Object.values(bid).map((k, v) => {
      return k.name;
    });
    const value = [];
    for (let index = 0; index < body.length; index++) {
      value.push({ val: body[index], payload: body2[index] });
    }

    setFormGenerator((prevValues) => ({
      bankId: {
        ...prevValues["bankId"],
        name: "bankId",
        backendLabel: "bankId",

        label: "Bank Name",
        value: value,

        id: "bankId",

        inputType: "select",
      },
      name: {
        ...prevValues["name"],
        id: "name",
        backendLabel: "name",
        label: "Branch Name",
        name: "name",
        type: "text",
        inputType: "text",
      },
    }));
  }, [bid]);

  const updateForm = (e, id) => {
    e.preventDefault();

    const value = e.target.value;


    setFormGenerator((prev) => {
      let val;

      isNaN(value) ? (val = value) : (val = Number(value));
      if (val === null) {
        val = null;
      }

      return {
        ...prev,
        [id]: {
          ...prev[id],
          formValue: val,
        },
      };
    });
  };
  const submitForm = (e) => {
    e.preventDefault();



    const data = Object.values(FormGenerater).reduce((acc, item) => {
      if (
        item.name === "inwardDate" ||
        item.name === "sanctionDate" ||
        item.name === "lastDateOfApplication" ||
        item.name === "lastDateForJit" ||
        item.name === "lastDateForJitExtension" ||
        item.name === "jitVisitDate" ||
        item.name === "stateDate" ||
        item.name === "referenceDate"
      ) {
  
        item.formValue = new Date(item.formValue);
      }
      if (item.formValue === "") {
        item.formValue = null;
      }

      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});

    // const temp = Object.values(branchData).filter((b) => b.id === data.branchId);
    // const temp2 = temp.map((t) => t.name).join("");

    // const data2 = { bankId: data.bankId, name: temp2 };
    // console.log("datatoserver", data);

    updateBranchesService(formdata.id, data)
      .then((response) => {
        alert("update success");

        props.history.push("/createProduct");
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="edit">
      <Form
        FormGenerater={Object.values(FormGenerater)}
        submitForm={submitForm}
        updateForm={updateForm}
        title={"EDIT Branch Data"}
      />
    </div>
  );
}
export default withRouter(EditBank);
