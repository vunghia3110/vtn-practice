import React, { memo } from "react";
import FooterSlider from "./FooterSlider";
import { mockData } from "../../../configs/table-data";

const TableFooter = () => {
  return <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontWeight: 400}}>
        Rows per page: 
        <span className="fw-bold">
          <select style={{margin: '0 10px 0 10px'}}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </span> 
        <span className="fw-light">
          <span className="mx-2 fw-bold">1-5</span>
          <span className="mx-2">of</span>
          <span className="mx-2 fw-bold">{mockData.length}</span>
        </span>
      </div>
      <FooterSlider />
    </div>
};

export default memo(TableFooter);