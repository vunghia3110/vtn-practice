import React, { memo } from "react";
import FooterSlider from "./FooterSlider";
import { mockData } from "../../../configs/table-data";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { setDisplayTable } from '../redux/tableReducer'
import { ITableItem } from "../../../models/table";
import { setRowsPerPage } from "../redux/tableReducer"

interface Props {
  data: ITableItem[];
  rowsPerPage: number;
  startPage: number;
}

const TableFooter = () => {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const rowsPerPage = useSelector((state: AppState) => state.table.rowsPerPage);
  const start = useSelector((state: AppState) => state.table.start);
  console.log(rowsPerPage)
  return <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{fontWeight: 400}}>
        Rows per page: 
        <span className="fw-bold">
          <select 
            value={rowsPerPage}
            style={{margin: '0 10px 0 10px', border: '1px solid #d4d4d4', borderRadius: '5px', padding: '5px'}}
            onChange={(e) => {dispatch(setRowsPerPage({rows: +e.target.value, startPage: 0 }))}}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </span> 
        <span className="fw-light">
          <span className="mx-2 fw-bold">{start!+1}-{start! + rowsPerPage!}</span>
          <span className="mx-2">of</span>
          <span className="mx-2 fw-bold">{mockData.length}</span>
        </span>
      </div>
      <FooterSlider />
    </div>
};

export default memo(TableFooter);