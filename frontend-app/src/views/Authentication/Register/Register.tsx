// import React, { useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  BaseThemeToggle,
  BaseInput,
  BaseText,
  BaseButton,
  BaseParagraph,
  BaseHeading,
} from "../../../component";
import { AddonInputPassword } from "../../../component/addOn/AddonInputPassword";

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: "A valid email is required",
  USERNAME_LENGTH: "Username must be at least 3 characters",
  PASSWORD_LENGTH: "Password must be at least 8 characters",
  PASSWORD_CONTAINS_EMAIL: "Password cannot contain your email",
  PASSWORD_MATCH: "Passwords do not match",
};

const zodSchema = z
  .object({
    username: z.string().min(3, VALIDATION_TEXT.USERNAME_LENGTH),
    email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
    password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
    confirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PASSWORD_MATCH,
        path: ["confirmPassword"],
      });
    }
  });

const initialValues = {
  username: "maya",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  // const passwordRef = useRef();
  // const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: { username: string }) => {
    console.log("auth-success", values);
    try {
      await new Promise((resolve, reject) => {
        if (values.username === "maya") {
          setTimeout(
            () => reject(new Error("Fake backend validation error")),
            2000
          );
        }
        setTimeout(resolve, 4000);
      });
      // Show success message and redirect
    } catch (error) {
      if (
        error instanceof Error &&
        error.message === "Fake backend validation error"
      ) {
        // Set error on the form
        // setError('username', { type: 'manual', message: 'This username is already taken' });
      }
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex">
        <div className="mx-auto max-w-xs text-center">
          <BaseHeading
            as="h2"
            size="3xl"
            weight="medium"
            className="text-white"
          >
            Have an Account?
          </BaseHeading>
          <BaseParagraph size="sm" className="text-muted-200 mb-3">
            No need to waste time on this page, let's take you back to your
            account
          </BaseParagraph>
          <BaseButton href="/login" rounded="lg" className="w-full">
            Login to Account
          </BaseButton>
        </div>
        <div className="bg-muted-200/20 absolute -start-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-72" />
        <div className="bg-muted-200/20 absolute -top-12 start-20 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48" />
        <div className="bg-muted-200/20 absolute -start-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-40" />

        <div className="bg-muted-200/20 absolute -bottom-6 -end-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-150 duration-300 group-hover:w-72" />
        <div className="bg-muted-200/20 absolute -bottom-12 end-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-75 duration-300 group-hover:w-48" />
        <div className="bg-muted-200/20 absolute -end-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full transition-all delay-[25ms] duration-300 group-hover:w-40" />
      </div>
      <div className="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2">
        <div className="mx-auto flex w-full max-w-xs items-center justify-between">
          <Link
            to="/"
            className="text-muted-400 hover:text-primary-500 transition-colors duration-300"
          >
            {/* <TairoLogo className="size-10" /> */}
          </Link>
          <BaseThemeToggle />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-xs"
          noValidate
        >
          <h2 className="text-3xl font-medium">Welcome to Webeze</h2>
          <p className="text-muted-400 mb-6">
            Let's start by creating your account
          </p>

          <div className="mb-4 space-y-3">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <BaseInput
                  {...field}
                  error={errors.username?.message}
                  type="text"
                  placeholder="Username"
                  icon="ph:fingerprint-duotone"
                  onBlur={field.onBlur}
                  value={field.value}
                  onInput={field.onChange}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <BaseInput
                  error={errors.email?.message}
                  type="email"
                  placeholder="Email Address"
                  icon="ph:at-duotone"
                  onBlur={field.onBlur}
                  value={field.value}
                  onInput={field.onChange}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <AddonInputPassword
                  icon="ph:lock-duotone"
                  error={errors.password?.message}
                  placeholder="••••••••••"
                  classes={{ input: "h-12" }}
                  onBlur={field.onBlur}
                  value={field.value}
                  onInput={field.onChange}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <BaseInput
                  icon="ph:check"
                  error={errors.confirmPassword?.message}
                  type="password"
                  placeholder="Confirm password"
                  classes={{ input: "h-12" }}
                  onBlur={field.onBlur}
                  value={field.value}
                  onInput={field.onChange}
                />
              )}
            />
          </div>
          <BaseButton
            disabled={isSubmitting}
            loading={isSubmitting}
            type="submit"
            color="primary"
            className="!h-12 w-full"
          >
            Create Account
          </BaseButton>
          <p className="text-muted-400 mt-4 flex justify-between text-sm">
            <span>Have an account?</span>
            <Link
              to="/auth/login-1"
              className="text-primary-600 hover:text-primary-500 font-medium underline"
            >
              Login here
            </Link>
          </p>
        </form>
        <div className="text-center">
          <BaseText size="sm" className="text-muted-400">
            © {new Date().getFullYear()} Tairo. All rights reserved.
          </BaseText>
        </div>
      </div>
    </div>
  );
};

export default Register;
