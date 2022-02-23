import React, { memo } from "react";
import Table from "./Table";
import { ITableItem } from '../../../models/table'
import dayjs from 'dayjs';
import DetailItem from "./DetailItem";
import RemoveItem from "./RemoveItem";

// interface Props {
//   item: ITableItem;
// }
const TableItem = () => {
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
      <td scope="row">Processing</td>
      <td>{dayjs('2019-01-25').format('DD/MM/YYYY')}</td>
      {/* <td>PGS</td> */}
      <td>{'USD'}</td>
      <td>2.300.00</td>
      <td>#123456789456123</td>
      <td className="d-flex justify-content-center">
        <DetailItem />
        <RemoveItem />
      </td>
    </tr>
  );
}

export default memo(TableItem)