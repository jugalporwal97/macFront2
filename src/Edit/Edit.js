import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Edit.css";

import Form from "../Form/Form";
import {
  createProductDataService,
  updateProductDataService,
} from "../services/addProductData";
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
import OwnerNavBar, { OwnerNavbar } from "../NavBar/OwnerNavBar";

export default function Edit(props) {
  const location = useLocation();

  const formdata = location.state.detail;

  console.log(`formdata`, formdata);
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
    console.log(`inwardDate`, formdata.inwardDate);
    //     {id: 10, productId: 6, inwardDate: "2021-03-01T00:00:00.000Z", pan: "wqwq2", unitTypeId: 3, …}
    // acknowledgementNumber: "1234"
    // address: "wqwq"
    // allocatedInspector: {name: "jugal"}
    // allocatedToInspectorId: 3
    // bank: {name: "sasa"}
    // bankId: 4
    // benefits: "111"
    // branch: {name: "icicii"}
    // branchId: 12
    // capital: "2345"
    // category: {name: "dwdw"}
    // categoryId: 2
    // city: {name: "lokesh"}
    // cityId: 36
    // claimUpTo: "432"
    // contactPerson: {name: "jugal", contact: "02942410558"}
    // contactPersonId: 3
    // createdAt: "2021-03-16T13:05:31.260Z"
    // customerLoginId: "2121"
    // customerLoginPassword: "wqwq"
    // fileNumber: "123"
    // id: 10
    // interest: "5432"
    // inwardDate: "2021-03-01T00:00:00.000Z"
    // inwardSlip: true
    // jitVisitDate: "2021-03-12T00:00:00.000Z"
    // lastClaimQuarter: "1234"
    // lastDateForJit: "2021-03-06T00:00:00.000Z"
    // lastDateForJitExtension: "2021-03-19T00:00:00.000Z"
    // lastDateOfApplication: "2021-03-05T00:00:00.000Z"
    // loanAmount: "12121"
    // marketingPerson: {name: "Jugal Porwal"}
    // marketingPersonId: 1
    // onlineReferenceNumber: "111"
    // pan: "wqwq2"
    // processDoneBy: {name: "dwdw"}
    // processDoneById: 2
    // product: {name: "allu bada"}
    // productId: 6
    // referenceDate: "2021-03-05T00:00:00.000Z"
    // remark: "gfds"
    // sanctionDate: "2021-03-19T00:00:00.000Z"
    // scheme: {name: "dsds"}
    // schemeId: 2
    // stateDate: "2021-03-06T00:00:00.000Z"
    // status: {name: "sasa"}
    // statusId: 1
    // subsidy: "21"
    // uid: "123456"
    // unitType: {name: "ff"}
    // unitTypeId: 3
    // updatedAt: "2021-03-16T13:05:31.260Z"
    setFormGenerator((prevValues) => {
      console.log(`<<<<formdata`, formdata);
      const x = {
        ...prevValues,

        productId: {
          ...prevValues["productId"],
          formValue: formdata.productId,
        },
        pan: {
          ...prevValues["pan"],
          formValue: formdata.pan,
        },
        inwardDate: {
          ...prevValues["inwardDate"],
          formValue: formdata.inwardDate,
        },
        unitTypeId: {
          ...prevValues["unitTypeId"],
          formValue: formdata.unitTypeId,
        },
        address: {
          ...prevValues["address"],
          formValue: formdata.address,
        },
        benefits: {
          ...prevValues["benefits"],
          formValue: formdata.benefits,
        },
        onlineReferenceNumber: {
          ...prevValues["onlineReferenceNumber"],
          formValue: formdata.onlineReferenceNumber,
        },

        allocatedToInspectorId: {
          ...prevValues["allocatedToInspectorId"],
          formValue: formdata.allocatedToInspectorId,
        },

        contactPersonId: {
          ...prevValues["contactPersonId"],
          formValue: formdata.contactPersonId,
        },
        customerLoginId: {
          ...prevValues["customerLoginId"],
          formValue: formdata.customerLoginId,
        },
        customerLoginPassword: {
          ...prevValues["customerLoginPassword"],
          formValue: formdata.customerLoginPassword,
        },
        bankId: {
          ...prevValues["bankId"],
          formValue: formdata.bankId,
        },
        branchId: {
          ...prevValues["branchId"],
          formValue: formdata.branchId,
        },
        cityId: {
          ...prevValues["cityId"],
          formValue: formdata.cityId,
        },
        loanAmount: {
          ...prevValues["loanAmount"],
          formValue: formdata.loanAmount,
        },

        subsidy: {
          ...prevValues["subsidy"],
          formValue: formdata.subsidy,
        },
        sanctionDate: {
          ...prevValues["sanctionDate"],
          formValue: formdata.sanctionDate,
        },

        lastDateForJit: {
          ...prevValues["lastDateForJit"],
          formValue: formdata.lastDateForJit,
        },

        lastDateOfApplication: {
          ...prevValues["lastDateOfApplication"],
          formValue: formdata.lastDateOfApplication,
        },

        lastDateForJitExtension: {
          ...prevValues["lastDateForJitExtension"],
          formValue: formdata.lastDateForJitExtension,
        },

        jitVisitDate: {
          ...prevValues["jitVisitDate"],
          formValue: formdata.jitVisitDate,
        },
        marketingPersonId: {
          ...prevValues["marketingPersonId"],
          formValue: formdata.marketingPersonId,
        },

        statusId: {
          ...prevValues["statusId"],
          formValue: formdata.statusId,
        },

        stateDate: {
          ...prevValues["stateDate"],
          formValue: formdata.stateDate,
        },

        uid: {
          ...prevValues["uid"],
          formValue: formdata.uid,
        },
        remark: {
          ...prevValues["remark"],
          formValue: formdata.remark,
        },
        inwardSlip: {
          ...prevValues["inwardSlip"],
          formValue: formdata.inwardSlip,
        },
        referenceDate: {
          ...prevValues["referenceDate"],
          formValue: formdata.referenceDate,
        },
        categoryId: {
          ...prevValues["categoryId"],
          formValue: formdata.categoryId,
        },
        schemeId: {
          ...prevValues["schemeId"],
          formValue: formdata.schemeId,
        },
        interest: {
          ...prevValues["interest"],
          formValue: formdata.interest,
        },
        capital: {
          ...prevValues["capital"],
          formValue: formdata.capital,
        },
        claimUpTo: {
          ...prevValues["claimUpTo"],
          formValue: formdata.claimUpTo,
        },
        processDoneById: {
          ...prevValues["processDoneById"],
          formValue: formdata.processDoneById,
        },
        fileNumber: {
          ...prevValues["fileNumber"],
          formValue: formdata.fileNumber,
        },
        acknowledgementNumber: {
          ...prevValues["acknowledgementNumber"],
          formValue: formdata.acknowledgementNumber,
        },
        lastClaimQuarter: {
          ...prevValues["lastClaimQuarter"],
          formValue: formdata.lastClaimQuarter,
        },
      };
      console.log("<<<<XXXX", x);

      return x;
    });
  }, []);

  useEffect(() => {
    setFormGenerator((prevValues) => ({
      productId: {
        ...prevValues["productId"],
        name: "productId",
        backendLabel: "productId",

        label: "Products Name",
        value: pid,

        id: "productId",
        inputType: "select",
      },
      inwardDate: {
        ...prevValues["inwardDate"],
        name: "inwardDate",
        backendLabel: "inwardDate",
        label: "Inward Date",
        type: "date",
        id: "inwardDate",

        inputType: "date",
      },

      pan: {
        ...prevValues["pan"],
        id: "pan",
        backendLabel: "pan",
        label: "PAN",
        name: "PAN",
        type: "text",
        inputType: "text",
      },
      unitTypeId: {
        ...prevValues["unitTypeId"],
        name: "unitTypeId",
        backendLabel: "unitTypeId",

        label: "Unit Name",
        value: uid,

        id: "unitTypeId",

        inputType: "select",
      },
      address: {
        ...prevValues["address"],
        formdata: "jugal",
        id: "address",
        backendLabel: "address",
        label: "Address",
        name: "Address",
        type: "text",
        inputType: "text",
      },
      benefits: {
        ...prevValues["benefits"],
        id: "benefits",
        backendLabel: "benefits",
        label: "Benefits",
        name: "Benefits",
        type: "text",
        inputType: "text",
      },
      onlineReferenceNumber: {
        ...prevValues["onlineReferenceNumber"],
        id: "onlineReferenceNumber",
        backendLabel: "onlineReferenceNumber",
        label: "Online Reference Number",
        name: "onlineReferenceNumber",
        type: "text",
        inputType: "text",
      },
      allocatedToInspectorId: {
        ...prevValues["allocatedToInspectorId"],
        name: "allocatedToInspectorId",
        backendLabel: "allocatedToInspectorId",

        label: "Allocat The Inspector",
        value: InspectorId,

        id: "allocatedToInspectorId",

        inputType: "select",
      },
      contactPersonId: {
        ...prevValues["contactPersonId"],
        name: "contactPersonId",
        backendLabel: "contactPersonId",

        label: "Contact Person Name",
        value: contactid,

        id: "contactPersonId",

        inputType: "select",
      },
      customerLoginId: {
        ...prevValues["customerLoginId"],
        id: "customerLoginId",
        backendLabel: "customerLoginId",
        label: "Customer Login Id",
        name: "customerLoginId",
        type: "text",
        inputType: "text",
      },
      customerLoginPassword: {
        ...prevValues["customerLoginPassword"],
        id: "customerLoginPassword",
        backendLabel: "customerLoginPassword",
        label: "Customer LoginPassword",
        name: "customerLoginPassword",
        type: "text",
        inputType: "text",
      },
      bankId: {
        ...prevValues["bankId"],
        name: "bankId",
        backendLabel: "bankId",

        label: "Bank Name",
        value: bid,

        id: "bankId",

        inputType: "select",
      },
      branchId: {
        ...prevValues["branchId"],
        name: "branchId",
        backendLabel: "branchId",

        label: "Branch Name",
        value: braid,

        id: "branchId",

        inputType: "select",
      },
      cityId: {
        ...prevValues["cityId"],
        name: "cityId",
        backendLabel: "cityId",

        label: "City Name",
        value: cid,

        id: "cityId",

        inputType: "select",
      },
      loanAmount: {
        ...prevValues["loanAmount"],
        id: "loanAmount",
        backendLabel: "loanAmount",
        label: "Loan Amount",
        name: "loanAmount",
        type: "text",
        inputType: "text",
      },
      subsidy: {
        ...prevValues["subsidy"],
        id: "subsidy",
        backendLabel: "subsidy",
        label: "Subsidy Amount",
        name: "subsidy",
        type: "text",
        inputType: "text",
      },
      sanctionDate: {
        ...prevValues["sanctionDate"],
        name: "sanctionDate",
        backendLabel: "sanctionDate",
        label: "Sanction Date",
        type: "date",
        id: "sanctionDate",

        inputType: "date",
      },
      lastDateOfApplication: {
        ...prevValues["lastDateOfApplication"],
        name: "lastDateOfApplication",
        backendLabel: "lastDateOfApplication",
        label: "Last Date Of Application",
        type: "date",
        id: "lastDateOfApplication",

        inputType: "date",
      },
      lastDateForJit: {
        ...prevValues["lastDateForJit"],
        name: "lastDateForJit",
        backendLabel: "lastDateForJit",
        label: "Last Date For Jit",
        type: "date",
        id: "lastDateForJit",

        inputType: "date",
      },
      lastDateForJitExtension: {
        ...prevValues["lastDateForJitExtension"],
        name: "lastDateForJitExtension",
        backendLabel: "lastDateForJitExtension",
        label: "Last Date For Jit Extension",
        type: "date",
        id: "lastDateForJitExtension",

        inputType: "date",
      },
      jitVisitDate: {
        ...prevValues["jitVisitDate"],
        name: "jitVisitDate",
        backendLabel: "jitVisitDate",
        label: "Jit Visit Date",
        type: "date",
        id: "jitVisitDate",

        inputType: "date",
      },
      marketingPersonId: {
        ...prevValues["marketingPersonId"],
        name: "marketingPersonId",
        backendLabel: "marketingPersonId",

        label: "Marketing Person Id",
        value: mpid,

        id: "marketingPersonId",

        inputType: "select",
      },
      statusId: {
        ...prevValues["statusId"],
        name: "statusId",
        backendLabel: "statusId",

        label: "Status Id",
        value: stid,

        id: "statusId",

        inputType: "select",
      },
      stateDate: {
        ...prevValues["stateDate"],
        name: "stateDate",
        backendLabel: "stateDate",
        label: "Status Date",
        type: "date",
        id: "stateDate",

        inputType: "date",
      },
      uid: {
        ...prevValues["uid"],
        id: "uid",
        backendLabel: "uid",
        label: "Aadhar Number",
        name: "uid",
        type: "text",
        inputType: "text",
      },
      remark: {
        ...prevValues["remark"],
        id: "remark",
        backendLabel: "remark",
        label: "Remark",
        name: "remark",
        type: "text",
        inputType: "text",
      },
      inwardSlip: {
        ...prevValues["inwardSlip"],
        id: "inwardSlip",
        backendLabel: "inwardSlip",
        label: "Inward Slip",
        name: "inwardSlip",
        value: ["true", "false"],
        inputType: "select",
      },
      referenceDate: {
        ...prevValues["referenceDate"],
        name: "referenceDate",
        backendLabel: "referenceDate",
        label: "Reference Date",
        type: "date",
        id: "referenceDate",

        inputType: "date",
      },
      categoryId: {
        ...prevValues["categoryId"],
        name: "categoryId",
        backendLabel: "categoryId",

        label: "Categories",
        value: Catid,

        id: "categoryId",

        inputType: "select",
      },
      schemeId: {
        ...prevValues["schemeId"],
        name: "schemeId",
        backendLabel: "schemeId",

        label: "Scheme",
        value: Shid,

        id: "schemeId",

        inputType: "select",
      },
      interest: {
        ...prevValues["interest"],
        id: "interest",
        backendLabel: "interest",
        label: "Interest",
        name: "interest",
        type: "text",
        inputType: "text",
      },
      capital: {
        ...prevValues["capital"],
        id: "capital",
        backendLabel: "capital",
        label: "Capital",
        name: "capital",
        type: "text",
        inputType: "text",
      },
      claimUpTo: {
        ...prevValues["claimUpTo"],
        id: "claimUpTo",
        backendLabel: "claimUpTo",
        label: "ClaimUpTo",
        name: "claimUpTo",
        type: "text",
        inputType: "text",
      },
      processDoneById: {
        ...prevValues["processDoneById"],
        name: "processDoneById",
        backendLabel: "processDoneById",

        label: "Process Done By Id",
        value: proid,

        id: "processDoneById",

        inputType: "select",
      },
      fileNumber: {
        ...prevValues["fileNumber"],
        id: "fileNumber",
        backendLabel: "fileNumber",
        label: "File Number",
        name: "fileNumber",
        type: "text",
        inputType: "text",
      },
      acknowledgementNumber: {
        ...prevValues["acknowledgementNumber"],
        id: "acknowledgementNumber",
        backendLabel: "acknowledgementNumber",
        label: "Acknowledgement Number",
        name: "acknowledgementNumber",
        type: "text",
        inputType: "text",
      },
      lastClaimQuarter: {
        ...prevValues["lastClaimQuarter"],
        id: "lastClaimQuarter",
        backendLabel: "lastClaimQuarter",
        label: "Last Claim Quarter",
        name: "lastClaimQuarter",
        type: "text",
        inputType: "text",
      },
    }));
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
    updateProductDataService(formdata.id, data)
      .then((response) => {
        alert("update success");
        console.log(">>session", response);
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
        title={"ADD Product Data"}
      />
    </div>
  );
}
