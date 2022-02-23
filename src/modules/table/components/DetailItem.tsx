import React, { memo } from "react";
import { BsChevronDown } from 'react-icons/bs';

const DetailItem = () => {
  const css = `
    #detail-item {
      padding: 10px;
      border-radius: 25px;
      cursor: pointer;
    }
  `
  return <div id="detail-item" style={{border: '1px solid #698EA4'}}>
    <style>{css}</style>
    View details
    <BsChevronDown />
  </div>
}

export default memo(DetailItem) 