"use client";

import { useState } from "react";
import styles from "./placeStep.module.css";

const PlaceStep = ({ onSave }: { onSave: (value: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSave = () => {
    onSave(value);
  };

  return (
    <div className={styles.container}>
      <h1>Para onde deseja viajar?</h1>
      <input
        type="text"
        onChange={({ target }) => setValue(target.value)}
        className={styles.input}
        placeholder="Salvador"
      />
      <button className={styles.saveButton} onClick={handleSave}>
        Gerar Tabela
      </button>
    </div>
  );
};

export default PlaceStep;
