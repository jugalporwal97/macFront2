import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Edit.css";

import Form from "../Form/Form";
import {
  
  updateProductDataService,
} from "../services/addProductData";
import { getAllBank, getPagenatedBankDataServise } from "../services/bank";
import { getAllBranches, getPagenatedBranches } from "../services/branches";
import { getAllcategories, getPagenatedCategoriesDataServise } from "../services/categories";
import { getAllContactPerson, getPagenatedContactPersonDataServise } from "../services/contactPerson";
import { getAllInspector, getPagenatedInspectorDataServise } from "../services/inspector";
import { getAllMarketingPerson, getPagenatedMarketingPDataServise } from "../services/marketingPerson";
import { getAllProcessDoneBy, getPagenatedProcessDonrByDataServise } from "../services/processDoneBy";
import { getAllproducts, getPagenatedProductDataServise } from "../services/products";
import { getAllSchemes, getPagenatedSchemesDataServise } from "../services/schemes";
import { getAllStates, getPagenatedCityDataServise } from "../services/state";
import { getAllStatus, getPagenatedStatusDataServise } from "../services/status";
import { getAllunitTypes, getPagenatedUnitDataServise } from "../services/unitTypes";



export default function Edit(props) {
  const location = useLocation();

  const formdata = location.state.detail;


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

  const [product,setProduct] = useState([]);
  const [unitid, setunitid] = useState([]);
  const [Inspector, setInspector] = useState([]);
  const [contact, setcontact] = useState([]);
  const [bankid, setbankid] = useState([]);
  const [branchid, setbranchid] = useState([]);
  const [cityid, setcityid] = useState([]);
  const [marPerson, setmarPerson] = useState([]);
  const [status, setstatus] = useState([]);
  const [Categoriesid, setCategoriesid] = useState([]);
  const [Schmeid, setSchmeid] = useState([]);
  const [processdonebyid, setprocessdonebyid] = useState([]);



  useEffect(() => {
    getAllproducts()
    .then(async (response) => {
      const getPagenatedData = (pagenumber) => {
        getPagenatedProductDataServise(pagenumber)
          .then((response) => {
            setProduct((prev) => [...prev, ...response.data]);
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
    })
   
    getAllunitTypes()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedUnitDataServise(pagenumber)
            .then((response) => {
              setunitid((prev) => [...prev, ...response.data]);
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

      getAllInspector()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedInspectorDataServise(pagenumber)
            .then((response) => {
              setInspector((prev) => [...prev, ...response.data]);
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
      getAllContactPerson()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedContactPersonDataServise(pagenumber)
            .then((response) => {
              setcontact((prev) => [...prev, ...response.data]);
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

      getAllBank()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedBankDataServise(pagenumber)
            .then((response) => {
              setbankid((prev) => [...prev, ...response.data]);
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

      getAllBranches()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedBranches(pagenumber)
            .then((response) => {
              setbranchid((prev) => [...prev, ...response.data]);
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

      getAllStates()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedCityDataServise(pagenumber)
            .then((response) => {
              setcityid((prev) => [...prev, ...response.data]);
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

      getAllMarketingPerson()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedMarketingPDataServise(pagenumber)
            .then((response) => {
              setmarPerson((prev) => [...prev, ...response.data]);
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

      getAllStatus()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedStatusDataServise(pagenumber)
            .then((response) => {
              setstatus((prev) => [...prev, ...response.data]);
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

      getAllcategories()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedCategoriesDataServise(pagenumber)
            .then((response) => {
              setCategoriesid((prev) => [...prev, ...response.data]);
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

      getAllSchemes()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedSchemesDataServise(pagenumber)
            .then((response) => {
              setSchmeid((prev) => [...prev, ...response.data]);
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

      getAllProcessDoneBy()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedProcessDonrByDataServise(pagenumber)
            .then((response) => {
              setprocessdonebyid((prev) => [...prev, ...response.data]);
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

  const convertToformData =  (p) =>{
    let value = [];

    const body = Object.values(p).map((k, v) => {
      return k.id;
    });
    const body2 = Object.values(p).map((k, v) => {
      return k.name;
    });

    for (let index = 0; index < body.length; index++) {
      value.push({ val: body[index], payload: body2[index] });
    }
    return value


  }


  useEffect(() => {

      setpid(convertToformData(product));
      setuid(convertToformData(unitid));
      setInspectorId(convertToformData(Inspector));
      setcontactid(convertToformData(contact));
      setbid(convertToformData(bankid));
      setbraid(convertToformData(branchid));
      setcid(convertToformData(cityid));
      setmpid(convertToformData(marPerson));
      setstid(convertToformData(status));
      setCatid(convertToformData(Categoriesid));
      setShid(convertToformData(Schmeid));
      setproid(convertToformData(processdonebyid));


  }, [processdonebyid,Schmeid,Categoriesid,status,marPerson,cityid,product,unitid,Inspector,contact,bankid,branchid])

  useEffect(() => {


    setFormGenerator((prevValues) => {

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

    updateProductDataService(formdata.id, data)
      .then((response) => {
        alert("update success");

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
        title={"EDIT Product Data"}
      />
    </div>
  );
}
