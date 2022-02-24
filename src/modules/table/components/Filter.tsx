import React, { memo, useState } from 'react';
import { IFilterDropdown } from '../../../models/table';
import { BsChevronDown } from 'react-icons/bs';
import { AiFillCalendar } from 'react-icons/ai';
import dayjs from 'dayjs';

interface Props {
  type: string;
  onFilter(values: IFilterDropdown): void;
  name: string;
}

const Filter = (props: Props) => {
  const { type, onFilter, name } = props;
  return (
    <div onClick={() => onFilter} style={{ minWidth: '100px', margin: '0 10px 0 10px', borderRadius: '5px' }}>
      {type === 'status' && (
        <div className="form-group" style={{ backgroundColor: '#fff', width: '100%', height: '100%', borderRadius: '5px' }}>
          <select className="form-control" id="status-filter" style={{ width: '100%', height: '100%' }}>
            <option value="" disabled selected style={{ color: 'gray' }}>
              {name}
            </option>
            <option>Processing</option>
            <option>Fulfilled</option>
            <option>Pending</option>
            <option>Receive</option>
          </select>
        </div>
      )}
      {/* <p>{name}</p>
      <span>
        {type === 'text' && <BsChevronDown />}
        {type === 'date' && <AiFillCalendar />}
      </span> */}
      {type === 'date' && (
        <div onClick={() => onFilter} style={{ backgroundColor: '#fff', minWidth: '100px', borderRadius: '5px' }}>
          <input
            type="date"
            className="form-control"
            placeholder="to"
            // min={dayjs(filterValue[1].value).format('YYYY-MM-DD')}
            onChange={(e) => {
              // filterByField({ ...filterValue[1], value2: e.target.value });
            }}
          />
        </div>
      )}
      {type === 'invoice' && (
        <div onClick={() => onFilter} style={{ backgroundColor: '#fff', minWidth: '100px' }}>
          <input
            type="text"
            className="form-control"
            placeholder={name}
            // min={dayjs(filterValue[1].value).format('YYYY-MM-DD')}
            onChange={(e) => {
              // filterByField({ ...filterValue[1], value2: e.target.value });
            }}
            style={{}}
          />
        </div>
      )}
    </div>
  );
};

export default memo(Filter);
