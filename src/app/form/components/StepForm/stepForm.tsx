"use client";
import { useState } from "react";
import type { IOption, IStep } from "../../form.types";
import FormContainer from "../FormContainer";

const StepForm = ({ onSave, options = [], label, loading }: IStep) => {
  const [selectOptions, setSelectOptions] = useState<Array<IOption>>([]);

  const handleSave = () => {
    onSave(selectOptions);
  };

  const handleSelection = (isChecked: boolean, value: IOption) => {
    if (isChecked) {
      const newSelectedOptions = [...selectOptions, value];
      return setSelectOptions(newSelectedOptions);
    }
    const newSelectedOptions = selectOptions.filter(
      ({ name }) => name !== value.name
    );
    return setSelectOptions(newSelectedOptions);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <FormContainer
      onChange={handleSelection}
      onSave={handleSave}
      options={options}
      label={label}
    />
  );
};

export default StepForm;
