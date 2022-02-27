import React, { useCallback, useEffect, useState } from 'react';
import { ITableItem } from "../../../models/table";
import Table from "../components/Table";
import TableItem from "../components/TableItem";
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/reducer';
import { Action } from 'redux';
import { mockData } from '../../../configs/table-data'
import dayjs from 'dayjs';

interface Props {
  data: ITableItem[];
  sort(): void;
}
console.log(mockData)


const TablePage = (props: Props) => {
  const data = mockData
  const filterByStatus = () => {
    return data.filter((item) => {
      return item.status === 'Fulfilled'
    })
  }
  const filterByStartDate = () => {
    return data.filter((item) => {
      return item.time_created === "2022-02-14T07:19:55Z"
    })
  }
  const { sort } = props;
  const [dataTable, setDataTable] = useState<ITableItem[]>();
  return <div>
    <Table data={filterByStatus()} sort={() => {}} />
  </div>
}

export default TablePage