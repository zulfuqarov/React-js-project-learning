import React from "react";

const companies = ({sirketinsekili,siranomreleri}) => {
  return (
    <div className="companies-img col-lg-3 col-md-6 col-12">
      <h1>{siranomreleri}</h1>
      <img src={sirketinsekili}  alt="" />
    </div>
  );
};

export default companies;
