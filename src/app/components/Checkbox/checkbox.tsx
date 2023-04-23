import React from "react";
import type { ICheckbox } from "./checkbox.types";
import styles from "./checkbox.module.css";

const Checkbox = ({ value, onChange }: ICheckbox) => {
  return (
    <label htmlFor={value} className={styles.container}>
      <input
        type="checkbox"
        id={value}
        onChange={({ target }) => onChange(target.checked)}
      />
      <span className={styles.checkmark} />
      <span className={styles.info}>{value}</span>
    </label>
  );
};

export default Checkbox;
