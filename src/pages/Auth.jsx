/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-useless-fragment */

import { useState } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line arrow-body-style
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const switchMode = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {isSignUp ? 'Sign up to your account' : 'Sign in to your account'}
            </h2>
          </div>
          {isSignUp ? (
            <>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm space-y-5">
                  <div>
                    <label htmlFor="phn" className="sr-only">
                      Phone number
                    </label>
                    <input
                      id="phn"
                      name="phnNum"
                      type="number"
                      required
                      className="relative px-5 py-4 block w-full rounded-t-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="01x-00-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      className="relative px-5 py-4 block w-full rounded-t-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="relative px-5 py-4 block w-full rounded-b-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <Link to="/">
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              </form>
            </>
          ) : (
            <>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm space-y-5">
                  <div>
                    <label htmlFor="phn" className="sr-only">
                      Phone number
                    </label>
                    <input
                      id="phn"
                      name="phnNum"
                      type="number"
                      required
                      className="relative px-5 py-4 block w-full rounded-t-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="01x-00-00"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="relative px-5 py-4 block w-full rounded-b-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <Link to="/">
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </Link>
                </div>
              </form>
            </>
          )}
          <div className="text-center text-red-600">
            <button onClick={switchMode}>
              {isSignUp
                ? 'Already have an account? Sign in'
                : 'Dont have an account? Sign up'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
