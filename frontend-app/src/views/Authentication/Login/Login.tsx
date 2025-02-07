import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BaseButton, BaseCheckbox, BaseHeading, BaseInput, BaseLink, BaseParagraph, BaseThemeToggle } from '../../../component';
import { Icon } from "@iconify/react";

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_REQUIRED: 'A password is required',
};

const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
});

const initialValues = {
  email: '',
  password: '',
  trustDevice: false,
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: { password: string; }) => {
    console.log('auth-success', data);
    try {
      await new Promise((resolve, reject) => {
        if (data.password !== 'password') {
          setTimeout(() => reject(new Error('Fake backend validation error')), 2000);
        }
        setTimeout(resolve, 4000);
      });
    } catch (error) {
      if (error instanceof Error && error.message === 'Fake backend validation error') {
        setError('password', { type: 'manual', message: 'Invalid credentials (use "password")' });
      }
    }
  };

  return (
    <div className="dark:bg-muted-800 flex min-h-screen bg-white">
      <div className="relative flex flex-1 flex-col justify-center px-6 py-12 lg:w-2/5 lg:flex-none">
        <div className="dark:bg-muted-800 relative mx-auto w-full max-w-sm bg-white">
          <div className="flex w-full items-center justify-between">
            <BaseLink href="/" className="text-muted-400 hover:text-primary-500 flex items-center gap-2 font-sans font-medium transition-colors duration-300">
              <Icon icon="gg:arrow-long-left" className="size-5" />
              <span>Back to Home</span>
            </BaseLink>
            <BaseThemeToggle />
          </div>
          <div>
            <BaseHeading
              as="h2"
              size="3xl"
              lead="relaxed"
              weight="medium"
              className="mt-6"
            >
              Welcome back.
            </BaseHeading>
            <BaseParagraph size="sm" className="text-muted-400 mb-6">
              Login with social media or your credentials
            </BaseParagraph>
            <div className="flex flex-wrap justify-between gap-4">
              <button
                className="dark:bg-muted-700 text-muted-800 border-muted-300 dark:border-muted-600 nui-focus relative inline-flex grow items-center justify-center gap-2 rounded border bg-white px-6 py-4 dark:text-white"
              >
                <Icon icon="logos:google-icon" className="size-5" />
                <div>Login with Google</div>
              </button>
            </div>
            <div className="flex-100 mt-8 flex items-center">
              <hr
                className="border-muted-200 dark:border-muted-700 flex-auto border-t-2"
              />
              <span
                className="text-muted-600 dark:text-muted-300 px-4 font-sans font-light"
              >
                OR
              </span>
              <hr
                className="border-muted-200 dark:border-muted-700 flex-auto border-t-2"
              />
            </div>
          </div>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mt-5">
              <div className="space-y-4">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <BaseInput
                      error={errors.email?.message}
                      type="email"
                      label="Email address"
                      placeholder="Email address"
                      classes={{ input: 'h-12' }}
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
                    <BaseInput
                      error={errors.password?.message}
                      type="password"
                      label="Password"
                      placeholder="Password"
                      classes={{ input: 'h-12' }}
                      onBlur={field.onBlur}
                      value={field.value}
                      onInput={field.onChange}
                    />
                  )}
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Controller
                  name="trustDevice"
                  control={control}
                  render={({ field }) => (
                    <BaseCheckbox
                      {...field}
                      disabled={isSubmitting}
                      rounded="sm"
                      label="Trust for 60 days"
                      color="primary"
                    />
                  )}
                />
                <div className="text-xs leading-5">
                  <BaseLink href="/forgot-password" className="text-primary-600 hover:text-primary-500 font-sans font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
                    Forgot your password?
                  </BaseLink>
                </div>
              </div>
              <div className="mt-6">
                <BaseButton
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  type="submit"
                  color="primary"
                  className="!h-11 w-full"
                >
                  Sign in
                </BaseButton>
              </div>
            </div>
            <p className="text-muted-400 mt-4 flex justify-between font-sans text-xs leading-5">
              <span>Don't have an account?</span>
              <BaseLink href="/register" className="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline">
                start your 14-day free trial
              </BaseLink>
            </p>
          </form>
        </div>
      </div >
      <div className="bg-muted-100 dark:bg-muted-900 relative hidden w-0 flex-1 items-center justify-center lg:flex lg:w-3/5">
        <div className="mx-auto w-full max-w-4xl">
          <img className="mx-auto max-w-md" src="/img/illustrations/magician.svg" alt="" width="500" height="500" />
        </div>
      </div>
    </div >
  );
};

export default Login;