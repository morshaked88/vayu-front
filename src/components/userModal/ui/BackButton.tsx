import { Button } from "@/components/ui/button";
import { SetStepType, StepType } from "@/types";
import React from "react";

const BackButton = ({
  currentStep,
  setStep,
}: {
  currentStep: StepType;
  setStep: SetStepType;
}) => {
  return (
    <Button
      type="button"
      onClick={() => setStep((currentStep - 1) as StepType)}
      disabled={currentStep === 1}
    >
      Back
    </Button>
  );
};

export default BackButton;
