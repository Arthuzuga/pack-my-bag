"use client";
import { useState } from "react";
import type { IGenderStep, gender } from "../../form.types";
import styles from "./genderForm.module.css";
import { RadioButton } from "@/app/components";

const GenderForm = ({ onSave, loading }: IGenderStep) => {
  const [selectOptions, setSelectOptions] = useState<gender>("homem");

  const handleSave = () => {
    onSave(selectOptions);
  };

  const handleSelection = (isChecked: boolean, value: gender) => {
    if (isChecked) {
      return setSelectOptions(value);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Selecione como você melhor se identifica</h1>
      <div className={styles.checkboxes}>
        {["homem", "mulher", "não binário"].map((option) => (
          <RadioButton
            key={option}
            name="gender"
            value={option}
            onChange={(value) => handleSelection(value, option as gender)}
          />
        ))}
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Próximo
      </button>
    </div>
  );
};

export default GenderForm;
