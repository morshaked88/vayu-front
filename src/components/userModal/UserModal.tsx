"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { StepOne, StepTwo, StepThree } from "@/components/userModal/steps";
import { TUserType } from "@/validators/user-validator";
import { StepType } from "@/types";
import React, { useState } from "react";

const UserModal = () => {
  const [step, setStep] = useState<StepType>(1);
  const [user, setUser] = useState<TUserType>({} as TUserType);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClearForm = () => {
    handleIsOpen();
    setUser({} as TUserType);
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleIsOpen}>
      <DialogTrigger
        className="px-4 py-1 mt-6 border rounded-md bg-blue-600 text-white font-medium"
        onClick={handleIsOpen}
      >
        Fill Form
      </DialogTrigger>
      <DialogContent className="flex justify-center min-h-52">
        {step === 1 && (
          <StepOne setUser={setUser} setStep={setStep} user={user} />
        )}
        {step === 2 && (
          <StepTwo setUser={setUser} setStep={setStep} user={user} />
        )}
        {step === 3 && (
          <StepThree
            user={user}
            setStep={setStep}
            handleClearForm={handleClearForm}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
