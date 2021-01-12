import React from "react";
import States from "../adminUtils/States";

import Bank from "../Banks/Bank";
import Branches from "../Branches/Branches";
import Categories from "../Categories/Categories";
import ContactPerson from "../ContactPerson/ContactPerson";
import Inspector from "../Inspector/Inspector";
import MarketingPerson from "../MarketingPerson/MarketingPerson";
import ProcessDoneBy from "../ProcessDoneBy/ProcessDoneBy";
import Products from "../Products/Products";
import Schemes from "../Schemes/Schemes";
import Status from "../Status/Status";
import UnitTypes from "../UnitTypes/UnitTypes";

function CreateProduct() {
  return (
    <div>
    <States/>
    <hr/>
    <Bank/>
    <hr/>
    <UnitTypes/>
    <hr/>
    <Status/>
    <hr/>
    <Schemes/>
    <hr/>
    <Branches/>
    <hr/>
    <ContactPerson/>
    <hr/>
    <Inspector/>
    <hr/>
    <MarketingPerson/>
    <hr/>
    <ProcessDoneBy/>
    <hr/>
    <Products/>
    <hr/>
    <Categories/>
    </div>

  );
}

export default CreateProduct;
