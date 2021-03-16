import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import { createProductDataService } from "../services/addProductData";
import { getAllBank } from "../services/bank";
import { getAllBranches } from "../services/branches";
import { getAllcategories } from "../services/categories";
import { getAllContactPerson } from "../services/contactPerson";
import { getAllInspector } from "../services/inspector";
import { getAllMarketingPerson } from "../services/marketingPerson";
import { getAllProcessDoneBy } from "../services/processDoneBy";
import { getAllproducts } from "../services/products";
import { getAllSchemes } from "../services/schemes";
import { getAllStates } from "../services/state";
import { getAllStatus } from "../services/status";
import { getAllunitTypes } from "../services/unitTypes";

function AddProductData() {
  const [pid, setpid] = useState([]);
  const [uid, setuid] = useState([]);
  const [InspectorId, setInspectorId] = useState([]);
  const [contactid, setcontactid] = useState([]);
  const [bid, setbid] = useState([]);
  const [braid, setbraid] = useState([]);
  const [cid, setcid] = useState([]);
  const [mpid, setmpid] = useState([]);
  const [stid, setstid] = useState([]);
  const [Catid, setCatid] = useState([]);
  const [Shid, setShid] = useState([]);
  const [proid, setproid] = useState([]);
  const [FormGenerater, setFormGenerator] = useState({});
  useEffect(() => {
    getAllproducts()
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

        setpid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });

    getAllunitTypes()
      .then((response) => {
        const value = [];
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }
        setuid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });

    getAllInspector()
      .then((response) => {
        const value = [];
        const body = Object.values(response.data).map((k, v) => {
          return k.id;
        });
        const body2 = Object.values(response.data).map((k, v) => {
          return k.name;
        });

        for (let index = 0; index < body.length; index++) {
          value.push({ val: body[index], payload: body2[index] });
        }
        setInspectorId(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });

    getAllContactPerson()
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

        setcontactid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
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
    getAllStates()
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

        setcid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllMarketingPerson()
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

        setmpid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllStatus()
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

        setstid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllcategories()
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

        setCatid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllSchemes()
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

        setShid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
    getAllProcessDoneBy()
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

        setproid(value);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  }, []);

  useEffect(() => {
    setFormGenerator({
      productId: {
        name: "productId",
        backendLabel: "productId",

        label: "Products Name",
        value: pid,

        id: "productId",
        formValue: "",
        inputType: "select",
      },
      inwardDate: {
        name: "inwardDate",
        backendLabel: "inwardDate",
        label: "Inward Date",
        type: "date",
        id: "inwardDate",
        formValue: "",
        inputType: "date",
      },

      pan: {
        id: "pan",
        backendLabel: "pan",
        label: "PAN",
        name: "PAN",
        type: "text",
        inputType: "number",
        formValue: "",
      },
      unitTypeId: {
        name: "unitTypeId",
        backendLabel: "unitTypeId",

        label: "Unit Name",
        value: uid,

        id: "unitTypeId",
        formValue: "",
        inputType: "select",
      },
      address: {
        id: "address",
        backendLabel: "address",
        label: "Address",
        name: "Address",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      benefits: {
        id: "benefits",
        backendLabel: "benefits",
        label: "Benefits",
        name: "Benefits",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      onlineReferenceNumber: {
        id: "onlineReferenceNumber",
        backendLabel: "onlineReferenceNumber",
        label: "Online Reference Number",
        name: "onlineReferenceNumber",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      allocatedToInspectorId: {
        name: "allocatedToInspectorId",
        backendLabel: "allocatedToInspectorId",

        label: "Allocat The Inspector",
        value: InspectorId,

        id: "allocatedToInspectorId",
        formValue: "",
        inputType: "select",
      },
      contactPersonId: {
        name: "contactPersonId",
        backendLabel: "contactPersonId",

        label: "Contact Person Name",
        value: contactid,

        id: "contactPersonId",
        formValue: "",
        inputType: "select",
      },
      customerLoginId: {
        id: "customerLoginId",
        backendLabel: "customerLoginId",
        label: "Customer Login Id",
        name: "customerLoginId",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      customerLoginPassword: {
        id: "customerLoginPassword",
        backendLabel: "customerLoginPassword",
        label: "Customer LoginPassword",
        name: "customerLoginPassword",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      bankId: {
        name: "bankId",
        backendLabel: "bankId",

        label: "Bank Name",
        value: bid,

        id: "bankId",
        formValue: "",
        inputType: "select",
      },
      branchId: {
        name: "branchId",
        backendLabel: "branchId",

        label: "Branch Name",
        value: braid,

        id: "branchId",
        formValue: "",
        inputType: "select",
      },
      cityId: {
        name: "cityId",
        backendLabel: "cityId",

        label: "City Name",
        value: cid,

        id: "cityId",
        formValue: "",
        inputType: "select",
      },
      loanAmount: {
        id: "loanAmount",
        backendLabel: "loanAmount",
        label: "Loan Amount",
        name: "loanAmount",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      subsidy: {
        id: "subsidy",
        backendLabel: "subsidy",
        label: "Subsidy Amount",
        name: "subsidy",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      sanctionDate: {
        name: "sanctionDate",
        backendLabel: "sanctionDate",
        label: "Sanction Date",
        type: "date",
        id: "sanctionDate",
        formValue: "",
        inputType: "date",
      },
      lastDateOfApplication: {
        name: "lastDateOfApplication",
        backendLabel: "lastDateOfApplication",
        label: "Last Date Of Application",
        type: "date",
        id: "lastDateOfApplication",
        formValue: "",
        inputType: "date",
      },
      lastDateForJit: {
        name: "lastDateForJit",
        backendLabel: "lastDateForJit",
        label: "Last Date For Jit",
        type: "date",
        id: "lastDateForJit",
        formValue: "",
        inputType: "date",
      },
      lastDateForJitExtension: {
        name: "lastDateForJitExtension",
        backendLabel: "lastDateForJitExtension",
        label: "Last Date For Jit Extension",
        type: "date",
        id: "lastDateForJitExtension",
        formValue: "",
        inputType: "date",
      },
      jitVisitDate: {
        name: "jitVisitDate",
        backendLabel: "jitVisitDate",
        label: "Jit Visit Date",
        type: "date",
        id: "jitVisitDate",
        formValue: "",
        inputType: "date",
      },
      marketingPersonId: {
        name: "marketingPersonId",
        backendLabel: "marketingPersonId",

        label: "Marketing Person Id",
        value: mpid,

        id: "marketingPersonId",
        formValue: "",
        inputType: "select",
      },
      statusId: {
        name: "statusId",
        backendLabel: "statusId",

        label: "Status Id",
        value: stid,

        id: "statusId",
        formValue: "",
        inputType: "select",
      },
      stateDate: {
        name: "stateDate",
        backendLabel: "stateDate",
        label: "Status Date",
        type: "date",
        id: "stateDate",
        formValue: "",
        inputType: "date",
      },
      uid: {
        id: "uid",
        backendLabel: "uid",
        label: "Aadhar Number",
        name: "uid",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      remark: {
        id: "remark",
        backendLabel: "remark",
        label: "Remark",
        name: "remark",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      inwardSlip: {
        id: "inwardSlip",
        backendLabel: "inwardSlip",
        label: "Inward Slip",
        name: "inwardSlip",
        value: ["true", "false"],
        inputType: "select",
        formValue: "",
      },
      referenceDate: {
        name: "referenceDate",
        backendLabel: "referenceDate",
        label: "Reference Date",
        type: "date",
        id: "referenceDate",
        formValue: "",
        inputType: "date",
      },
      categoryId: {
        name: "categoryId",
        backendLabel: "categoryId",

        label: "Categories",
        value: Catid,

        id: "categoryId",
        formValue: "",
        inputType: "select",
      },
      schemeId: {
        name: "schemeId",
        backendLabel: "schemeId",

        label: "Scheme",
        value: Shid,

        id: "schemeId",
        formValue: "",
        inputType: "select",
      },
      interest: {
        id: "interest",
        backendLabel: "interest",
        label: "Interest",
        name: "interest",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      capital: {
        id: "capital",
        backendLabel: "capital",
        label: "Capital",
        name: "capital",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      claimUpTo: {
        id: "claimUpTo",
        backendLabel: "claimUpTo",
        label: "ClaimUpTo",
        name: "claimUpTo",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      processDoneById: {
        name: "processDoneById",
        backendLabel: "processDoneById",

        label: "Process Done By Id",
        value: proid,

        id: "processDoneById",
        formValue: "",
        inputType: "select",
      },
      fileNumber: {
        id: "fileNumber",
        backendLabel: "fileNumber",
        label: "File Number",
        name: "fileNumber",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      acknowledgementNumber: {
        id: "acknowledgementNumber",
        backendLabel: "acknowledgementNumber",
        label: "Acknowledgement Number",
        name: "acknowledgementNumber",
        type: "text",
        inputType: "text",
        formValue: "",
      },
      lastClaimQuarter: {
        id: "lastClaimQuarter",
        backendLabel: "lastClaimQuarter",
        label: "Last Claim Quarter",
        name: "lastClaimQuarter",
        type: "text",
        inputType: "text",
        formValue: "",
      },
    });
  }, [
    pid,
    InspectorId,
    uid,
    contactid,
    bid,
    braid,
    cid,
    mpid,
    stid,
    Catid,
    Shid,
    proid,
  ]);

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
    console.log("datatoserver", data);
    createProductDataService(data)
      .then((response) => {
        console.log(">>session", response);
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
        title={"ADD Product Data"}
      />
    </div>
  );
}

export default AddProductData;
