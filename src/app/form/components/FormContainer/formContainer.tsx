"use client";
import { Checkbox } from "@/app/components";

import styles from "./formContainer.module.css";
import type { IFormContainer } from "../../form.types";

const FormContainer = ({
  options,
  onSave,
  onChange,
  label,
}: IFormContainer) => {
  return (
    <div className={styles.container}>
      <h1>Selecione as opções de {label}</h1>
      <div className={styles.checkboxes}>
        {options.map((option) => (
          <Checkbox
            key={option.name}
            value={option.name}
            onChange={(isChecked) => onChange(isChecked, option)}
          />
        ))}
      </div>
      <button className={styles.saveButton} onClick={onSave}>
        Salvar
      </button>
    </div>
  );
};

export default FormContainer;
