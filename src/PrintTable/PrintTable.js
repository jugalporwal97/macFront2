import React from "react";

export default function PrintTable(props) {
  const item = (
    props.user &&
    Object.values(props.user).map((val) => {
      return {val.allocatedInspector};
    })
  ).map((value) => {
    return { value };
  });
  const test = item.map((v) => v.value && v.value.name);
  return <div>{test}</div>;
}
