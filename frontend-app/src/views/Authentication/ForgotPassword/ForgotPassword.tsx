import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  BaseThemeToggle,
  BaseHeading,
  BaseParagraph,
  BaseMessage,
  BaseInput,
  BaseButton,
} from "../../../component";

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: "A valid email is required",
};

const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
});

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: unknown) => {
    console.log("recover-success", values);
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
    } catch {
      // discard errors
    }
    setSuccess(true);
  };

  return (
    <div className="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link
          to="/dashboards"
          className="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
        >
          {/* <TairoLogo className="size-10" /> */}
        </Link>
        <div>
          <BaseThemeToggle />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="me-auto ms-auto mt-4 w-full max-w-md">
            <div className="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Recover Password
              </BaseHeading>
              <BaseParagraph size="sm" className="text-muted-400 mb-6">
                Follow the instructions sent to your email address
              </BaseParagraph>
            </div>
            {success ? (
              <div className="px-8 py-4">
                <div className="mb-4 space-y-4">
                  <BaseMessage closable={false}>
                    <p className="text-base">
                      An email has been sent to you with instructions on how to
                      reset your password.
                    </p>
                    <small className="block pt-2">
                      If you don't receive an email, please check your spam
                      folder. If you still don't receive an email, that means
                      you don't have an account.
                    </small>
                  </BaseMessage>
                </div>
              </div>
            ) : (
              <form
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
                className="px-8 py-4"
                noValidate
              >
                <div className="mb-4 space-y-4">
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <BaseInput
                        type="email"
                        label="Email address"
                        placeholder="Email address"
                        error={errors.email?.message}
                        classes={{ input: "h-12" }}
                        onBlur={field.onBlur}
                        value={field.value}
                        onInput={field.onChange}
                      />
                    )}
                  />
                </div>
                <div className="mb-6">
                  <BaseButton
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    type="submit"
                    color="primary"
                    className="!h-12 w-full"
                  >
                    Recover Password
                  </BaseButton>
                </div>
                <p className="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5">
                  <Link
                    to="/auth/login-1"
                    className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
