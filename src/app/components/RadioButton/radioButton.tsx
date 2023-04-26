import React from "react";
import type { IRadioButton } from "./radioButton.types";
import styles from "./radioButton.module.css";

const RadioButton = ({ value, onChange, name }: IRadioButton) => {
  return (
    <label htmlFor={value} className={styles.container}>
      <input
        type="radio"
        id={value}
        onChange={({ target }) => onChange(target.checked)}
        name={name}
      />
      <span className={styles.checkmark} />
      <span className={styles.info}>{value}</span>
    </label>
  );
};

export default RadioButton;
