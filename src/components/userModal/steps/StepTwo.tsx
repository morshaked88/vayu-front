import React from "react";
import { useForm } from "react-hook-form";
import { TUserAgeType, userAgeValidator } from "@/validators/user-validator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetUserType, SetStepType, StepType } from "@/types";
import { BackButton, SubmitButton } from "@/components/userModal/ui";

const StepTwo = ({
  step,
  user,
  setUser,
  setStep,
}: {
  step: StepType;
  user: TUserAgeType;
  setUser: SetUserType;
  setStep: SetStepType;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserAgeType>({
    resolver: zodResolver(userAgeValidator),
  });

  const onSubmit = ({ age }: TUserAgeType) => {
    setUser((prev) => ({ ...prev, age }));
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-bold">Step 2</h2>
      <p className="text-sm text-muted-foreground text-center">
        Please fill your age
      </p>
      <form
        className="flex flex-col items-start w-full gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="gap-1 py-2">
          <Label htmlFor="age" className="text-dor-secondary mb-2">
            Age:
          </Label>
          <Input
            {...register("age")}
            type="number"
            id="age"
            name="age"
            value={user.age}
            placeholder="Enter your age"
            required
            className={cn(
              "border-dor-secondary text-dor-secondary focus-visible:ring-dor-secondary",
              {
                "focus-visible:ring-red-500": errors.age,
              }
            )}
          />
          {errors.age && (
            <span className="text-red-500 text-sm">{errors.age.message}</span>
          )}
        </div>
        <div className="flex gap-x-5">
          <BackButton setStep={setStep} currentStep={step} />
          <SubmitButton title="Next" />
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
