import React, { memo, useEffect } from "react";
import Table from "./Table";
import { ITableItem } from '../../../models/table'
import dayjs from 'dayjs';
import DetailItem from "./DetailItem";
import RemoveItem from "./RemoveItem";

interface Props {
  data: ITableItem;
}
const TableItem = (props: Props) => {
  const { data } = props;
  const statusColor = () => {
    switch(data.status) {
      case 'Pending':
        return '#99AEBC'
      case 'Received':
        return '#50BCE6'
      case 'Fulfilled':
        return '#76D1AB'
      case 'Processed':
        return '#FFBF55'
      case 'Canceled':
        return '#FD4F8B'
      default: 
        return 'white'
    }
  }
  const css = `
    #table-item {
      background-color: #fff;
      border-radius: 10px;
      line-height: inherit;
    }
    #table-item td {
      height: 62px;
      vertical-align: middle;
    }
  `
  return (
    <tr id="table-item" className="table-row py-2">
      <style>{css}</style>
      <td scope="row" style={{fontWeight: 600, color: statusColor()}}>{data.status}</td>
      <td>{dayjs(data.time_created).format('DD/MM/YYYY')}</td>
      <td>{data.payment_type}</td>
      <td>{data.currency}</td>
      <td>{data.volume_input_in_input_currency + data.fees}</td>
      <td className="text-primary">{data.payroll_id}</td>
      <td className="d-flex justify-content-end">
        <DetailItem />
        <RemoveItem />
      </td>
    </tr>
  );
}

export default memo(TableItem)