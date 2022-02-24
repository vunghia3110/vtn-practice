import React, { memo } from "react";
import FooterSlider from "./FooterSlider";

const TableFooter = () => {
  return <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontWeight: 400}}>
        Showing <span className="fw-bold">10</span> from <span className="fw-bold">46</span> data
      </div>
      <FooterSlider />
    </div>
};

export default memo(TableFooter);