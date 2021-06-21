import { deleteProductDataService, getAllProductData, getAllProductDataById } from "../services/addProductData";
import React, { Component, useState, useEffect } from "react";
import Moment from "react-moment";
import {getAllunitTypes, getPagenatedUnitDataServise} from "../services/unitTypes"
import MaterialTable from "../Table/Table";
import "moment-timezone";
import { Button, TextField } from "@material-ui/core";
import { getSearch } from "../services/search";
import { getAllproducts } from "../services/products";
import { getAllInspector } from "../services/inspector";
import { getAllContactPerson } from "../services/contactPerson";
import { getAllBank } from "../services/bank";
import { getAllBranches } from "../services/branches";
import { getAllStates } from "../services/state";
import { getAllMarketingPerson } from "../services/marketingPerson";
import { getAllStatus } from "../services/status";
import { getAllcategories } from "../services/categories";
import { getAllSchemes } from "../services/schemes";
import { getAllProcessDoneBy } from "../services/processDoneBy";
import { withRouter } from "react-router";
import MaterialTableWithoutpagination from "../Table/MaterialTableWithoutpagination";
import { SimCardAlert } from "material-ui-icons";




function Search(props) {

  const [body,setbody] = useState([]);
  const [searchresult,setSeachResult] = useState([])
  const [searchKey,setSearchKey] = useState();
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
  const [columns, setColumns] = useState([
    {
      id: "productId",
      label: "Product",
      minWidth: 100,
    },
    {
      id: "inwardDate",
      label: "Inward Date",
      minWidth: 100,
    },

    {
      id: "pan",
      label: "PAN",
      minWidth: 100,
    },
    {
      id: "unitTypeId",
      label: "Unit",
      minWidth: 100,
    },
    {
      id: "address",
      label: "Address",
      minWidth: 100,
    },
    {
      id: "benefits",
      label: "Benefits",
      minWidth: 100,
    },
    {
      id: "onlineReferenceNumber",
      label: "Online Reference Number",
      minWidth: 100,
    },
    {
      id: "allocatedToInspectorId",
      label: "Allocated Inspector",
      minWidth: 100,
    },
    {
      id: "contactPersonId",
      label: "Contact Person",
      minWidth: 100,
    },
    {
      id: "customerLoginId",
      label: "Customer Login",
      minWidth: 100,
    },
    {
      id: "customerLoginPassword",
      label: "Password",
      minWidth: 100,
    },

    {
      id: "bankId",
      label: "Bank",
      minWidth: 100,
    },
    {
      id: "branchId",
      label: "Branch",
      minWidth: 100,
    },
    {
      id: "cityId",
      label: "City",
      minWidth: 100,
    },
    {
      id: "loanAmount",
      label: "Loan Amount",
      minWidth: 100,
    },
    {
      id: "subsidy",
      label: "Subsidy",
      minWidth: 100,
    },

    {
      id: "sanctionDate",
      label: "Sanction Date",
      minWidth: 100,
    },
    {
      id: "lastDateOfApplication",
      label: "Last Date Of Application",
      minWidth: 100,
    },
    {
      id: "lastDateForJit",
      label: "Last Date For Jit",
      minWidth: 100,
    },
    {
      id: "lastDateForJitExtension",
      label: "Last Date For Jit Extension",
      minWidth: 100,
    },
    {
      id: "jitVisitDate",
      label: "Jit Visit Date",
      minWidth: 100,
    },

    {
      id: "marketingPersonId",
      label: "Marketing Person",
      minWidth: 100,
    },
    {
      id: "statusId",
      label: "Status",
      minWidth: 100,
    },

    {
      id: "stateDate",
      label: "Status Date",
      minWidth: 100,
    },
    {
      id: "uid",
      label: "Aadhar Number",
      minWidth: 100,
    },
    {
      id: "remark",
      label: "Remark",
      minWidth: 100,
    },
    {
      id: "inwardSlip",
      label: "Inward Slip",
      minWidth: 100,
    },
    {
      id: "referenceDate",
      label: "Reference Date",
      minWidth: 100,
    },

    {
      id: "categoryId",
      label: "Category",
      minWidth: 100,
    },
    {
      id: "schemeId",
      label: "Scheme",
      minWidth: 100,
    },
    {
      id: "interest",
      label: "Interest",
      minWidth: 100,
    },
    {
      id: "capital",
      label: "Capital",
      minWidth: 100,
    },
    {
      id: "claimUpTo",
      label: "Claim UpTo",
      minWidth: 100,
    },

    {
      id: "processDoneById",
      label: "Process DoneBy",
      minWidth: 100,
    },
    {
      id: "fileNumber",
      label: "File Number",
      minWidth: 100,
    },

    {
      id: "acknowledgementNumber",
      label: "Acknowledgement Number",
      minWidth: 100,
    },
    {
      id: "lastClaimQuarter",
      label: "Last Claim Quarter",
      minWidth: 100,
    },

    {
      id: "edit",
      label: "Edit",
      minWidth: 100,
    },
    {
      id: "delete",
      label: "Delete",
      minWidth: 100,
    },
  ]);
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
    
    getAllunitTypes()
      .then(async (response) => {
        const getPagenatedData = (pagenumber) => {
          getPagenatedUnitDataServise(pagenumber)
            .then((response) => {
              setbody((prev) => [...prev, ...response.data]);
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
  getSearch(searchKey)
  .then((response) => {



    setSeachResult(response)
  })
  .catch((error) => {
    console.log("Something went wrong. Please try again later.");
  });
}, [searchKey])


// searchresult && console.log("searchresult",searchresult)

// searchresult && console.log("searchresult",((pid.filter((v)=>v.val== 5))[0])&& ((pid.filter((v)=>v.val== 5))[0]).payload)
const body2 = searchresult.response
for (const key in body2 ) {
  body2[key].edit = (
    <Button
      value={"edit"}
      variant="contained"
      onClick={() => buttonClick( body2[key].id)}
      color="primary"
    >
      {" "}
      edit
    </Button>
  )


let producttest = (pid.filter((v)=>v.val== body2[key].productId))[0]
 if(producttest){
body2[key].productId = producttest.payload
 }

 let bankIdtest = (bid.filter((v)=>v.val== body2[key].bankId))[0]
 if(bankIdtest){
body2[key].bankId = bankIdtest.payload
 }

 let cityIdtest = (cid.filter((v)=>v.val== body2[key].cityId))[0]
 if(cityIdtest){
body2[key].cityId = cityIdtest.payload
 }

 let statusIdtest = (stid.filter((v)=>v.val== body2[key].statusId))[0]
 if(statusIdtest){
body2[key].statusId = statusIdtest.payload
 }
 
 let schemeIdtest = (Shid.filter((v)=>v.val== body2[key].schemeId))[0]
 if(schemeIdtest){
body2[key].schemeId = schemeIdtest.payload
 }

 let branchIdtest = (braid.filter((v)=>v.val== body2[key].branchId))[0]
 if(branchIdtest){
body2[key].branchId = branchIdtest.payload
 }

 
 let contactPersonIdtest = (contactid.filter((v)=>v.val== body2[key].contactPersonId))[0]
 if(contactPersonIdtest){
body2[key].contactPersonId = contactPersonIdtest.payload
 }
  
 let marketingPersonIdtest = (mpid.filter((v)=>v.val== body2[key].marketingPersonId))[0]
 if(marketingPersonIdtest){
body2[key].marketingPersonId = marketingPersonIdtest.payload
 }

 let processDoneByIdtest = (proid.filter((v)=>v.val== body2[key].processDoneById))[0]
 if(processDoneByIdtest){
body2[key].processDoneById = processDoneByIdtest.payload
 }

 let Catidtest = (Catid.filter((v)=>v.val== body2[key].categoryId))[0]
 if(Catidtest){
body2[key].categoryId = Catidtest.payload
 }

 let unitTypeIdtest = (InspectorId.filter((v)=>v.val== body2[key].unitTypeId))[0]
 if(unitTypeIdtest){
body2[key].unitTypeId = unitTypeIdtest.payload
 }

 let allocatedToInspectorIdtest = (uid.filter((v)=>v.val== body2[key].allocatedToInspectorId))[0]
 if(allocatedToInspectorIdtest){
body2[key].allocatedToInspectorId = allocatedToInspectorIdtest.payload
 }
 body2[key].inwardDate= body2[key].inwardDate && (
  <Moment format="D MMM YYYY" withTitle>
    {body2[key].inwardDate}
  </Moment>
 )

 body2[key].jitVisitDate=  body2[key].jitVisitDate && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].jitVisitDate}
  </Moment>
)

body2[key].sanctionDate=  body2[key].sanctionDate && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].sanctionDate}
  </Moment>
)

body2[key].lastDateOfApplication=  body2[key].lastDateOfApplication && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].lastDateOfApplication}
  </Moment>
)

body2[key].lastDateForJit=  body2[key].lastDateForJit && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].lastDateForJit}
  </Moment>
)

body2[key].lastDateForJitExtension=  body2[key].lastDateForJitExtension && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].lastDateForJitExtension}
  </Moment>
)

body2[key].stateDate=  body2[key].stateDate && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].stateDate}
  </Moment>
)
body2[key].referenceDate=  body2[key].referenceDate && (
  <Moment format="D MMM YYYY" withTitle>
    { body2[key].referenceDate}
  </Moment>
)

body2[key].inwardSlip=(
body2[key].inwardSlip &&  body2[key].inwardSlip === true
    ? "true"
    :  body2[key].inwardSlip === false
    ? "false"
    : "NA")

    body2[key].delete= (
      <Button
        onClick={() => handleDelete(body2[key].id)}
        variant="contained"
        color="secondary"
      >
        Delete
      </Button>
    )

} 

const buttonClick = async (e) => {

const body = await getAllProductDataById(e).then( response => response)


props.history.push({
  pathname: "/edit",
  search: "",
  state: { detail: body },
});
};
const handleDelete = (id) => {
  deleteProductDataService(id)
    .then((response) => {
    alert("Deleted.")
    })
    .catch((error) => {
      console.log("Something went wrong. Please try again later.");
    });
};


  return (
    <div
      style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}

    >
      

<TextField
            label="Select Unit Type"
            select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => {setSearchKey( e.target.value)}}
            value="unitType"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            hover
          >
            <option value=""></option>
            {body.map((load) => {
              return (
                <option key={load.id} value={load.id}>{load.name}</option>
              );
            })}
          </TextField>
  
         { body2 ?  <MaterialTableWithoutpagination
   
          rows={body2 }
          columns={columns}
        />: <span style={{textAlign: "center"}}><h2>Pls Select Unit Type</h2></span>}
    </div>
  );
}

export default withRouter(Search);
