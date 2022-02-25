import React, { useCallback, useEffect, useState } from 'react';
import { ITableItem } from "../../../models/table";
import Table from "../components/Table";
import TableItem from "../components/TableItem";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { mockData } from '../../../configs/table-data'

interface Props {
  data: ITableItem[];
  sort(): void;
}
console.log(mockData)


const TablePage = (props: Props) => {
  const { sort } = props;
  const data = mockData
  const [dataTable, setDataTable] = useState<ITableItem[]>();
  return <div>
    <Table data={data} sort={() => {}} />
  </div>
}

export default TablePage