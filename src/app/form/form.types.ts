export interface IOption {
  category: "basic" | "cloth" | "accessories" | "hygienic";
  weight: number;
  name: string;
  quantity: number;
}

export interface IAccumulator {
  basicItems: IOption[];
  clothItems: IOption[];
  accessoriesItems: IOption[];
  hygienicItems: IOption[];
}

export interface IStep {
  label: string;
  options: Array<IOption>;
  onSave: (options: Array<IOption>) => void;
  loading: boolean;
}

export interface IFormContainer {
  options: Array<IOption>;
  onChange: (isChecked: boolean, option: IOption) => void;
  onSave: () => void;
  label: string;
}
