"use client";

import { useState } from "react";
import styles from "./dayStep.module.css";

const DayStep = ({ onSave }: { onSave: (value: number) => void }) => {
  const [value, setValue] = useState(1);

  const handleSave = () => {
    onSave(value);
  };

  return (
    <div className={styles.container}>
      <h1>Quantos dias você viajará?</h1>
      <input
        type="number"
        min={1}
        max={15}
        onChange={({ target }) => setValue(Number(target.value))}
        className={styles.input}
        placeholder="1"
      />
      <button className={styles.saveButton} onClick={handleSave}>
        Salvar
      </button>
    </div>
  );
};

export default DayStep;
