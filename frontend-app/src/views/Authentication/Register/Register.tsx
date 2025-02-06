// import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
// import { AddonInputPassword } from '#components';
import { BaseThemeToggle, BaseInput, BaseText } from '../../../component';

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  USERNAME_LENGTH: 'Username must be at least 3 characters',
  PASSWORD_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_CONTAINS_EMAIL: 'Password cannot contain your email',
  PASSWORD_MATCH: 'Passwords do not match',
};

const zodSchema = z.object({
  username: z.string().min(3, VALIDATION_TEXT.USERNAME_LENGTH),
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
  confirmPassword: z.string(),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: VALIDATION_TEXT.PASSWORD_MATCH,
      path: ['confirmPassword'],
    });
  }
});

const initialValues = {
  username: 'maya',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  // const passwordRef = useRef();
  // const history = useHistory();
  const { control, handleSubmit, formState: { isSubmitting, errors } } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: { username: string; }) => {
    console.log('auth-success', values);
    try {
      await new Promise((resolve, reject) => {
        if (values.username === 'maya') {
          setTimeout(() => reject(new Error('Fake backend validation error')), 2000);
        }
        setTimeout(resolve, 4000);
      });
      // Show success message and redirect
    } catch (error) {
      if (error instanceof Error && error.message === 'Fake backend validation error') {
        // Set error on the form
        // setError('username', { type: 'manual', message: 'This username is already taken' });
      }
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="from-primary-900 to-primary-500 i group relative hidden w-1/2 items-center justify-around overflow-hidden bg-gradient-to-tr md:flex">
        <div className="mx-auto max-w-xs text-center">
          <h2 className="text-white text-3xl font-medium">Have an Account?</h2>
          <p className="text-muted-200 mb-3">No need to waste time on this page, let's take you back to your account</p>
          <Link to="/auth/login-1" className="w-full rounded-lg">Login to Account</Link>
        </div>
        {/* Background decorations omitted for brevity */}
      </div>
      <div className="dark:bg-muted-900 flex flex-col items-center justify-between bg-white py-10 md:w-1/2">
        <div className="mx-auto flex w-full max-w-xs items-center justify-between">
          <Link to="/dashboards" className="text-muted-400 hover:text-primary-500 transition-colors duration-300">
            {/* <TairoLogo className="size-10" /> */}
          </Link>
          <BaseThemeToggle />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-xs" noValidate>
          <h2 className="text-3xl font-medium">Welcome to Tairo</h2>
          <p className="text-muted-400 mb-6">Let's start by creating your account</p>

          <div className="mb-4 space-y-3">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <BaseInput
                  {...field}
                  error={errors.username?.message}
                  // disabled={isSubmitting}
                  type="text"
                  placeholder="Username"
                  icon="ph:fingerprint-duotone"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <BaseInput
                  {...field}
                  error={errors.email?.message}
                  // disabled={isSubmitting}
                  type="email"
                  placeholder="Email Address"
                  icon="ph:at-duotone"
                />
              )}
            />
            {/* <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <AddonInputPassword
                  // ref={passwordRef}
                  {...field}
                  error={errors.password?.message}
                  disabled={isSubmitting}
                  // userInputs={[control.getValues('username') ?? '', control.getValues('email') ?? '']}
                  placeholder="Password"
                  icon="ph:lock-duotone"
                />
              )}
            /> */}
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <BaseInput
                  {...field}
                  error={errors.confirmPassword?.message}
                  // disabled={isSubmitting}
                  type="password"
                  placeholder="Confirm password"
                  icon="ph:check"
                />
              )}
            />
          </div>
          <button disabled={isSubmitting} type="submit" className="!h-11 w-full rounded-lg">
            {isSubmitting ? 'Loading...' : 'Create Account'}
          </button>
          <p className="text-muted-400 mt-4 flex justify-between text-sm">
            <span>Have an account?</span>
            <Link to="/auth/login-1" className="text-primary-600 hover:text-primary-500 font-medium underline">Login here</Link>
          </p>
        </form>
        <div className="text-center">
          <BaseText size="sm" className="text-muted-400">© {new Date().getFullYear()} Tairo. All rights reserved.</BaseText>
        </div>
      </div>
    </div>
  );
};

export default Register;