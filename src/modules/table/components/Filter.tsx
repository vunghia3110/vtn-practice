import React, { memo, useState } from "react";
import { IFilterDropdown } from "../../../models/table";
import { BsChevronDown } from 'react-icons/bs';
import { AiFillCalendar } from "react-icons/ai";

interface Props {
  type: string;
  onFilter(values: IFilterDropdown): void;
  name: string;
}

const Filter = (props: Props) => {
  const { type, onFilter, name } = props;
  return (
    <div 
      onClick={() => onFilter}
      style={{display: 'flex', backgroundColor: '#fff', maxWidth: '100px'}}
    >
      <p>{name}</p>
      <span>
        {type === 'text' && <BsChevronDown />}
        {type === 'date' && <AiFillCalendar />}
      </span>
    </div>
  )
}

export default memo(Filter)