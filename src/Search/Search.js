import { getAllProductData } from "../services/addProductData";
import React, { Component, useState, useEffect } from "react";

import {getPagenatedUnitDataServise} from "../services/unitTypes"

import "moment-timezone";
import { TextField } from "@material-ui/core";
import { getSearch } from "../services/search";



function Search() {
  const [total, settotal] = useState(0);
  const [Users, setUsers] = useState([]);
  const [body,setbody] = useState([]);
  const [searchKey,setSearchKey] = useState(3);

  useEffect(() => {
      const body = []
    getAllProductData()
    .then( async (response) => {
  

     

      


  const getPagenatedData = (pagenumber) => {
    
    getPagenatedUnitDataServise(pagenumber)
      .then((response) => {

        setbody((prev)=>[...prev,...response.data]);
      })
      .catch((error) => {
        console.log("Something went wrong. Please try again later.");
      });
  };


  console.log(`beforeloop`)
for (let index = 0; index < (response.total/10); index++) {
  console.log(`index`, index)
  await getPagenatedData(index)
  
}
console.log("after loop" )
console.log(`body`, body)

    })
    .catch((error) => {
      console.log("Something went wrong. Please try again later.");
    });
  }, []);


console.log(`body after usefee`, body)

useEffect(() => {
  getSearch(searchKey)
  .then((response) => {

    console.log("searchitem",response)
  })
  .catch((error) => {
    console.log("Something went wrong. Please try again later.");
  });
}, [searchKey])


total&& console.log("total",total)
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
          <p>{searchKey}</p>
    </div>
  );
}

export default Search;
