"use client";

import { useMemo, useState } from "react";
// import { getWeatherData } from "../lib/openWeather";
import { stepToLabel, stepToOption } from "./constants";
import styles from "./page.module.css";
import type { IOption } from "./form.types";
import { StepForm, TableModal } from "./components";
import DayStep from "./components/DayStep";

const FormPage = () => {
  const [step, setStep] = useState<
    "days" | "basic" | "accessories" | "cloth" | "hygienic"
  >("days");
  const [selectedOptions, setSelectedOptions] = useState<Array<IOption>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [days, setDays] = useState<number>(1);

  const handleSave = (options: Array<IOption>) => {
    setIsLoading(true);
    setSelectedOptions(options);
    const currentStep = step;
    if (currentStep === "basic") setStep("cloth");
    if (currentStep === "cloth") setStep("accessories");
    if (currentStep === "accessories") setStep("hygienic");
    if (currentStep === "hygienic") {
      setIsLoading(false);
      return setIsModalOpen(true);
    }
    return setIsLoading(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(false);
    setStep("days");
  };

  const handleDays = (value: number) => {
    setDays(value);
    setStep("basic");
  };

  const stepsComponent = useMemo(() => {
    if (step === "days") {
      return <DayStep onSave={handleDays} />;
    }
    return (
      <StepForm
        label={stepToLabel[step]}
        options={stepToOption[step]}
        onSave={handleSave}
        loading={isLoading}
      />
    );
  }, [step, days, selectedOptions, isLoading]);

  return (
    <main className={styles.main}>
      {stepsComponent}
      {isModalOpen && (
        <TableModal
          options={selectedOptions}
          onClose={handleOpenModal}
          days={days}
        />
      )}
    </main>
  );
};

export default FormPage;
