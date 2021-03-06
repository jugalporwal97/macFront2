import React, { useState, useEffect } from "react";


import "moment-timezone";

import Moment from "react-moment";

import MaterialTable from "../Table/Table";

import {

  getPagenatedDataServise

} from "../services/addProductData";
import "./Home.css";
import { withRouter } from "react-router";


function UserHome(props) {
  const [Search, SetSearch] = useState("");
  const [Users, setUsers] = useState([]);

  const [total, settotal] = useState(0);


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
    }
  ]);

  const getPagenatedData = (pagenumber) => {
    getPagenatedDataServise(pagenumber)
      .then((response) => {
        settotal(response.total);
        const body = Object.values(response.data).map((val) => {
          return {
            ...val,
            inwardDate: val.inwardDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.inwardDate}
              </Moment>
            ),
            jitVisitDate: val.jitVisitDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.jitVisitDate}
              </Moment>
            ),

            sanctionDate: val.sanctionDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.sanctionDate}
              </Moment>
            ),

            lastDateOfApplication: val.lastDateOfApplication && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateOfApplication}
              </Moment>
            ),

            lastDateForJit: val.lastDateForJit && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateForJit}
              </Moment>
            ),

            lastDateForJitExtension: val.lastDateForJitExtension && (
              <Moment format="D MMM YYYY" withTitle>
                {val.lastDateForJitExtension}
              </Moment>
            ),

            stateDate: val.stateDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.stateDate}
              </Moment>
            ),
            referenceDate: val.referenceDate && (
              <Moment format="D MMM YYYY" withTitle>
                {val.referenceDate}
              </Moment>
            ),

            inwardSlip:
              val.inwardSlip && val.inwardSlip === true
                ? "true"
                : val.inwardSlip === false
                ? "false"
                : null,

           
          };
        });

        // console.log(
        //   body.map((bof) => {
        //     return bof.type === 1
        //       ? (bof.type = "OWNER")
        //       : bof.type === 2
        //       ? (bof.type = "ADMIN")
        //       : (bof.type = "USER");
        //   })
        // );


        const allu = Object.values(body).map((bo) => {
          return {
            ...bo,
            bankId: bo.bank && bo.bank.name,
            cityId: bo.city && bo.city.name,
            statusId: bo.status && bo.status.name,

            schemeId: bo.scheme && bo.scheme.name,
            branchId: bo.branch && bo.branch.name,
            contactPersonId: bo.contactPerson && bo.contactPerson.name,

            marketingPersonId: bo.marketingPerson && bo.marketingPerson.name,
            processDoneById: bo.processDoneBy && bo.processDoneBy.name,

            categoryId: bo.category && bo.category.name,
            productId: bo.product && bo.product.name,
            unitTypeId: bo.unitType && bo.unitType.name,

            allocatedToInspectorId:
              bo.allocatedInspector && bo.allocatedInspector.name,
          };
        });

        // const temp = [...body, (body[0].bankId = body[0].bank.name)];

        // console.log(">>temp", temp);

        setUsers((preValues) => {
      ;
          return allu;
        });
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };
  useEffect(() => {

    getPagenatedData(0);
  }, []);




  const row = Users.filter((row) => {
    if (Search) {
      return row.productId
        .toString()
        .toLowerCase()
        .includes(Search.toString().toLowerCase());
    }
    return true;
  });

  return (
    <div className="table">
      <div className="TextField">
  
      </div>
      <div className="table">
        <MaterialTable
          total={total}
          getPagenatedData={getPagenatedData}
          rows={row ? row :  <p></p>}
          columns={columns}
        />
        {/* <Paper className="container">
                    {" "}
                    <MaterialTable rows={row} columns={columns} />
                  </Paper> */}
      </div>
    </div>
  );
}


export default withRouter(UserHome);
