export interface ITableItem {
  status: string;
  currency: string;
  volume_input_in_input_currency: number;
  time_created: string;
  payroll_id: string;
  fees: number;
}

export interface IFilterDropdown {
  type: string;
  options: string[];
  option: string;
}