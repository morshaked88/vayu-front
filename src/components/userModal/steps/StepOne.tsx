import {
  TUserNameType,
  TUserType,
  userNameValidator,
} from "@/validators/user-validator";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { SetUserType, SetStepType, StepType } from "@/types";
import { BackButton, SubmitButton } from "@/components/userModal/ui";

const StepOne = ({
  step,
  user,
  setUser,
  setStep,
}: {
  step: StepType;
  user: TUserType;
  setUser: SetUserType;
  setStep: SetStepType;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserNameType>({
    resolver: zodResolver(userNameValidator),
  });

  const onSubmit = ({ firstName, lastName }: TUserNameType) => {
    setUser((prev) => ({ ...prev, firstName, lastName }));
    setStep(2);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-lg font-bold">Step 1</h2>
      <p className="text-sm text-muted-foreground text-center">
        Please fill you first name and last name
      </p>
      <form
        className="flex flex-col items-start w-full gap-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="gap-1 py-2">
          <Label htmlFor="firstName" className="text-dor-secondary mb-2">
            First Name:
          </Label>
          <Input
            {...register("firstName")}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
            value={user.firstName}
            className={cn(
              "border-dor-secondary text-dor-secondary focus-visible:ring-dor-secondary",
              {
                "focus-visible:ring-red-500": errors.firstName,
              }
            )}
          />
          {errors.firstName && (
            <p className="mt-2 text-red-500 text-sm">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="gap-1 py-2">
          <Label htmlFor="lastName" className="text-dor-secondary mb-2">
            LastName:
          </Label>
          <Input
            {...register("lastName")}
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            placeholder="Enter your lastName"
            className={cn(
              "border-dor-secondary text-dor-secondary focus-visible:ring-dor-secondary",
              {
                "focus-visible:ring-red-500": errors.lastName,
              }
            )}
            required
          />
          {errors.lastName && (
            <p className="mt-2 text-red-500 text-sm">
              {errors.lastName.message}
            </p>
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

export default StepOne;
