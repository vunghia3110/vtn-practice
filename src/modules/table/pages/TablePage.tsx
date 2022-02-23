import React, { useState } from "react";
import { ITableItem } from "../../../models/table";
import Table from "../components/Table";
import TableItem from "../components/TableItem";

interface Props {
  data: ITableItem[];
  sort(): void;
}

const TablePage = (props: Props) => {
  const { data, sort } = props;

  const [dataTable, setDataTable] = useState<ITableItem[]>();
  return <div>
    <Table data={[]} sort={() => {}} />
  </div>
}

export default TablePage