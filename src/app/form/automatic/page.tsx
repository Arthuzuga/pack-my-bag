"use client";

import { useMemo, useState } from "react";
// import { getWeatherData } from "../lib/openWeather";
import styles from "./page.module.css";
import type { gender } from "../form.types";
import { DayStep, GenderForm, PlaceStep } from "../components";

const AutomaticPage = () => {
  const [step, setStep] = useState<"days" | "gender" | "local">("days");
  const [selectedOptions, setSelectedOptions] = useState<gender>("homem");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [days, setDays] = useState<number>(1);
  const [place, setPlace] = useState<string>("");

  const handleSave = (option: gender) => {
    setIsLoading(true);
    setSelectedOptions(option);
    const currentStep = step;
    if (currentStep === "gender") setStep("local");
    return setIsLoading(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(false);
    setStep("days");
  };

  const handleDays = (value: number) => {
    setDays(value);
    setStep("gender");
  };

  const handlePlace = (value: string) => {
    setPlace(value);
    return setIsModalOpen(true);
  };

  const stepsComponent = useMemo(() => {
    if (step === "days") {
      return <DayStep onSave={handleDays} />;
    }

    if (step === "gender") {
      return <GenderForm loading={isLoading} onSave={handleSave} />;
    }

    return <PlaceStep onSave={handlePlace} />;
  }, [step, days, selectedOptions, isLoading, place]);

  return (
    <main className={styles.main}>
      {stepsComponent}
      {isModalOpen && (
        <div>
          {selectedOptions}-{days}-{place}
        </div>
      )}
    </main>
  );
};

export default AutomaticPage;
