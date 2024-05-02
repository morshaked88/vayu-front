import { Button } from "@/components/ui/button";
import { SetStepType, StepType } from "@/types";
import React from "react";

const BackButton = ({
  currentStep,
  nextStep,
  setStep,
}: {
  currentStep: StepType;
  nextStep: StepType;
  setStep: SetStepType;
}) => {
  return (
    <Button
      type="button"
      onClick={() => setStep(nextStep)}
      disabled={currentStep === 1}
    >
      Back
    </Button>
  );
};

export default BackButton;
