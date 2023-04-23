"use client";

import type { IOption } from "../../form.types";
import { calculateClothes, separateItemsByCategory } from "../../utils";
import styles from "./tableModal.module.css";
import type { ITableModal } from "./tableModal.types";

const TableModal = ({ options, onClose, days }: ITableModal) => {
  const { basicItems, hygienicItems, accessoriesItems, clothItems } =
    options.reduce(separateItemsByCategory, {
      basicItems: [],
      clothItems: [],
      accessoriesItems: [],
      hygienicItems: [],
    });

  const sum = (acc: number, cur: IOption) => acc + cur.weight;
  const totals = {
    basic: basicItems.reduce(sum, 0) / 1000,
    cloth: calculateClothes(clothItems, days).reduce(sum, 0) / 1000,
    hygienic: hygienicItems.reduce(sum, 0) / 1000,
    accessories: accessoriesItems.reduce(sum, 0) / 1000,
  };

  const totalLuggage = totals.accessories + totals.cloth + totals.hygienic;

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.table}>
          <h3 className={styles.tableHeader}>Resumo da mala</h3>
          <div className={styles.tableData}>
            <h4>Itens básicos</h4>
            <ul className={styles.list}>
              {basicItems.map(({ name, quantity, weight }) => (
                <li className={styles.option}>
                  <span>
                    {quantity}x {name}
                  </span>
                  <span>{weight / 1000}kg</span>
                </li>
              ))}
            </ul>
            <strong>
              Total: {totals.basic.toFixed(2)}
              kg
            </strong>
          </div>
          <div className={styles.tableData}>
            <h4>Higiene</h4>
            <ul className={styles.list}>
              {hygienicItems.map(({ name, quantity, weight }) => (
                <li className={styles.option}>
                  <span>
                    {quantity}x {name}
                  </span>
                  <span>{weight / 1000}kg</span>
                </li>
              ))}
            </ul>
            <strong>Total: {totals.hygienic.toFixed(2)}kg</strong>
          </div>
          <div className={styles.tableData}>
            <h4>Roupas</h4>
            <ul className={styles.list}>
              {calculateClothes(clothItems, days).map(
                ({ name, quantity, weight }) => (
                  <li className={styles.option}>
                    <span>
                      {quantity}x {name}
                    </span>
                    <span>{weight / 1000}kg</span>
                  </li>
                )
              )}
            </ul>
            <strong>
              Total: {totals.cloth.toFixed(2)}
              kg
            </strong>
          </div>
          <div className={styles.tableData}>
            <h4>Acessórios</h4>
            <ul className={styles.list}>
              {accessoriesItems.map(({ name, quantity, weight }) => (
                <li className={styles.option}>
                  <span>
                    {quantity}x {name}
                  </span>
                  <span>{weight / 1000}kg</span>
                </li>
              ))}
            </ul>
            <strong>
              Total: {totals.accessories.toFixed(2)}
              kg
            </strong>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.totals}>
            <span>Total Mala de mão: {totals.basic.toFixed(2)}kg</span>
            <span>
              Total Mala {totalLuggage > 10 ? "despachada" : "de cabine"}:{" "}
              {totalLuggage.toFixed(2)}
              kg
            </span>
          </div>
          <button className={styles.saveButton} onClick={onClose}>
            Recomeçar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
