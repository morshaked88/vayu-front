import { Button } from "@/components/ui/button";
import React from "react";
import { TUserType, userValidator } from "@/validators/user-validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SetStepType, StepType } from "@/types";
import { BackButton, SubmitButton } from "@/components/userModal/ui";

const StepThree = ({
  step,
  user,
  setStep,
  handleClearForm,
}: {
  step: StepType;
  user: TUserType;
  setStep: SetStepType;
  handleClearForm: () => void;
}) => {
  const { register, handleSubmit } = useForm<TUserType>({
    resolver: zodResolver(userValidator),
    defaultValues: {
      // Setting default values from passed user props because there is no input field in the form
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
    },
  });

  const onSubmit = (data: TUserType) => {
    console.log(data);
    //save to localStorage
    localStorage.setItem("userInfo", JSON.stringify(data));
    //check if the data is saved
    if (localStorage.getItem("userInfo")) {
      toast.success("User information saved successfully");
      //close the modal and clear the form
      handleClearForm();
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-bold">Step 3</h2>
      <p className="text-sm text-muted-foreground text-center">
        Please review your information and submit
      </p>
      <form
        className="flex flex-col items-start w-full gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-x-2 py-2">
          <label className="text-dor-secondary mb-2">First Name:</label>
          <span className="text-dor-primary">{user.firstName}</span>
          <input type="hidden" {...register("firstName")} />
        </div>
        <div className="space-x-2 py-2">
          <label className="text-dor-secondary mb-2">Last Name:</label>
          <span className="text-dor-primary">{user.lastName}</span>
          <input type="hidden" {...register("lastName")} />
        </div>
        <div className="space-x-2 py-2">
          <label className="text-dor-secondary mb-2">Age:</label>
          <span className="text-dor-primary">{user.age}</span>
          <input type="hidden" {...register("age")} />
        </div>
        <div className="flex gap-x-5">
          <BackButton setStep={setStep} currentStep={step} />
          <SubmitButton title="Finish" />
        </div>
      </form>
    </div>
  );
};

export default StepThree;
