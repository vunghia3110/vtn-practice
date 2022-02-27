import { ITableItem } from './../../../models/table';
import { ActionType, createCustomAction, getType } from 'typesafe-actions';
import { valueType } from 'antd/lib/statistic/utils';
// import { filterByDate } from '../utils';

export interface TableState {
  items?: ITableItem[];
  filteredItems?: ITableItem[];
  tempItems?: ITableItem[];
  filterType?: string;
  filterValue?: string | valueType
  start?: number;
  end?: number;
  rowsPerPage?: number;
}

export interface TableFilter {
  type: string;
  value: string | number;
}

export interface TablePage {
  start: string | number;
  end: string | number;
  rows: number | string
}

// typesafe-actions để tạo action(?)
// Action 1: dung de lay du lieu hien thi ra ngoai man hinh
export const setDisplayTable = createCustomAction('table/setTableData', (data: ITableItem[]) => ({
  data
}));
// Actin 2: dung de tao hien thi dung so dong tren mot trang 
export const setRowsPerPage = createCustomAction('table/setRowsPerPage', (data: {rows: number, startPage: number}) => ({
  data
}));

const actions = { setDisplayTable, setRowsPerPage };

//Tạo action type(?)
type Action = ActionType<typeof actions>;

export default function reducer(state: TableState = {}, action: Action) {
  switch (action.type) {
    //getType trả về tham số đầu của createCustomAction(?)
    case getType(setDisplayTable):
        return { ...state, tempItems: action.data.slice(state.start, state.start! + state.rowsPerPage!) };
      
    case getType(setRowsPerPage):
      return { ...state, rowsPerPage: action.data.rows, start: action.data.startPage };
    default:
      return { ...state, start: 0, rowsPerPage: 5 };
  }
}