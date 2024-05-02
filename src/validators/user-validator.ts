import { z } from "zod";

export const userNameValidator = z.object({
  firstName: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters",
    })
    .max(50, {
      message: "First name must be at most 50 characters",
    })
    //check if user entered a number as a first name
    .refine((value) => isNaN(Number(value)), {
      message: "First name must not contain numbers",
    }),
  lastName: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters",
    })
    .max(50, {
      message: "Last name must be at most 50 characters",
    })
    //check if user entered a number as a last name
    .refine((value) => isNaN(Number(value)), {
      message: "Last name must not contain numbers",
    }),
});

export const userAgeValidator = z.object({
  age: z.string().refine(
    (data) => {
      //recieve the age string from input and convert it to number
      const number = parseFloat(data);
      //check if the number is not a number and if the number is greater than 17
      return !isNaN(number) && number > 17;
    },
    {
      message: "you must be at least 18 years old to use this app",
    }
  ),
});

//merge the two types to be submitted to the form final step
export const userValidator = userNameValidator.merge(userAgeValidator);

export type TUserNameType = z.infer<typeof userNameValidator>;
export type TUserAgeType = z.infer<typeof userAgeValidator>;
export type TUserType = z.infer<typeof userValidator>;
