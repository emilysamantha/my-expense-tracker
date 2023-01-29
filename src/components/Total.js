import React from "react";
import { numberWithCommas } from "../utils/format";

const Total = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h1 id="balance">${numberWithCommas(1000)}</h1>
    </div>
  );
};

export default Total;
