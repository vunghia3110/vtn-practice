import React, { useEffect, useState } from 'react';
// UI depends
import TableItem from './TableItem';
import { ITableItem } from '../../../models/table';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
// Redux dependencies
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { setDisplayTable } from '../redux/tableReducer'

interface Props {
  data: ITableItem[];
  sort(): void;
}

const Table = (props: Props) => {
  const { data, sort } = props;
  const tableFullList = data;
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const tableTempList = useSelector((state: AppState) => state.table.tempItems);
  const rows = useSelector((state: AppState) => state.table.rowsPerPage);
  
  useEffect(() => {
    dispatch(setDisplayTable([...tableFullList]));
  },[rows])
  console.log('table temp list: ', tableTempList)
  
  const css = `
    #table-container {
      padding: 40px;
      font-family: roboto;
      background-color: #F5F7FB;
      width: 100%;
    }
    #table-title {
      text-align: center;
    }
    #table-body {
    }
  `;
  return (
    <div id="table-container">
      <style>{css}</style>
      <div id="table-title" className="d-flex justify-content-between">
        <h2 style={{ color: '#000080', fontFamily: 'roboto', marginBottom: '0', lineHeight: 'inherit' }}>
          Payroll Transactions list
        </h2>
        <button className="btn btn-primary">
          Export CSV
          <BsChevronDown style={{ fontSize: '16px', marginLeft: '10px' }} />
        </button>
      </div>
      <TableHeader />
      <table id="table-body" className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col" className="d-flex">
              Date
              <p
                style={{ margin: '0px' }}
                onClick={() => {
                  sort();
                }}
              >
                <AiFillCaretDown />
              </p>
            </th>
            <th scope="col">Funding Method</th>
            <th scope="col">Payroll Currency</th>
            <th scope="col">Total</th>
            <th scope="col">Order #</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableTempList?.map((item, index) => {
            return (<><TableItem key={index} data={item} />
              <tr className="spacer" style={{ height: '10px' }}></tr></>)
          })}
        </tbody>
      </table>
      <TableFooter />
    </div>
  );
};

export default Table;
