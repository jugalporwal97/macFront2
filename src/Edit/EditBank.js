import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from "react-router";
import "./Edit.css";

import Form from "../Form/Form";
import { updateBranchesService } from "../services/branches";
import { getAllBank } from "../services/bank";
import { getAllBranches } from "../services/branches";

function EditBank(props) {
  const location = useLocation();

  const formdata = location.state.detail;

  console.log(`formdata`, formdata);

  const [bid, setbid] = useState([]);
  const [braid, setbraid] = useState([]);
  const [branchData, setbranchData] = useState([]);

  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllBank()
      .then((response) => {
        let value = [];

        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }

        setbid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllBranches()
      .then((response) => {
        console.log("branchesdata", response.data);
        setbranchData(response.data);
        let value = [];
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }

        setbraid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);
  useEffect(() => {
    setFormGenerator((prevValues) => {
      console.log(`<<<<formdata`, formdata.name);
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
      console.log("<<<<XXXX", x);

      return x;
    });
  }, []);

  useEffect(() => {
    setFormGenerator((prevValues) => ({
      bankId: {
        ...prevValues["bankId"],
        name: "bankId",
        backendLabel: "bankId",

        label: "Bank Name",
        value: bid,

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
  }, [bid, braid]);

  const updateForm = (e, id) => {
    e.preventDefault();

    const value = e.target.value;

    console.log("valueselected", value, typeof value);
    setFormGenerator((prev) => {
      let val;

      isNaN(value) ? (val = value) : (val = Number(value));
      if (val === null) {
        val = null;
      }

      console.log(typeof val);
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

    console.log(">>brachdata", branchData);

    const data = Object.values(FormGenerater).reduce((acc, item) => {
      if (
        item.name == "inwardDate" ||
        item.name == "sanctionDate" ||
        item.name == "lastDateOfApplication" ||
        item.name == "lastDateForJit" ||
        item.name == "lastDateForJitExtension" ||
        item.name == "jitVisitDate" ||
        item.name == "stateDate" ||
        item.name == "referenceDate"
      ) {
        console.log("checkcheck", item);
        item.formValue = new Date(item.formValue);
      }
      if (item.formValue == "") {
        item.formValue = null;
      }

      acc[item.backendLabel] = item.formValue;
      return acc;
    }, {});

    // const temp = Object.values(branchData).filter((b) => b.id == data.branchId);
    // const temp2 = temp.map((t) => t.name).join("");

    // const data2 = { bankId: data.bankId, name: temp2 };
    // console.log("datatoserver", data);

    updateBranchesService(formdata.id, data)
      .then((response) => {
        alert("update success");
        console.log(">>session", response);
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
