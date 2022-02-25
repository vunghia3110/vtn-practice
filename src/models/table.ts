import { statusType } from "../modules/table/constants";

export interface ITableItem {
  status: string;
  time_created: string;
  payment_type: string;
  currency: string;
  volume_input_in_input_currency: number;
  payroll_id: string;
  fees: number;
}

export interface IFilterDropdown {
  type: string;
  options: string[];
  option: string;
}