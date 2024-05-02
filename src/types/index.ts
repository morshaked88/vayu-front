import { TUserType } from "@/validators/user-validator";

export type SetUserType = React.Dispatch<React.SetStateAction<TUserType>>;

export type StepType = 1 | 2 | 3;

export type SetStepType = React.Dispatch<React.SetStateAction<StepType>>;
