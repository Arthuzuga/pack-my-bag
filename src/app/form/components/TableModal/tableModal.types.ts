import type { IOption } from "../../form.types";

export interface ITableModal {
  onClose: () => void;
  options: Array<IOption>;
  days: number;
}
