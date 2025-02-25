import React, { Fragment } from 'react'

const Error404 = () => {
  return (
    <Fragment>
      <div className="pb-16">
        <div className="webeze-placeholder-page webeze-placeholder-md relative !items-end">
          <div className="webeze-placeholder-page-inner">
            <div className="webeze-placeholder-page-img">
              {/*[*/}
              <img
                className="relative z-20 w-full max-w-lg mx-auto"
                src="/img/illustrations/system/404-1.svg"
              />
              {/*]*/}
            </div>
            <div className="webeze-placeholder-page-content">
              <h4 className="webeze-heading webeze-heading-xl webeze-weight-medium webeze-lead-normal webeze-placeholder-page-title">
                {/*[*/}Page not found{/*]*/}
              </h4>
              <p className="webeze-placeholder-page-subtitle">
                We couldn't find the page you were looking for, please contact a
                system administrator or try again later.
              </p>
              {/*[*/}
              <div className="mt-4">
                <div className="text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]">
                  <span>404</span>
                </div>
                <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-2">
                  <button
                    type="button"
                    rel=""
                    className="webeze-button webeze-button-md webeze-button-rounded-lg webeze-button-solid webeze-button-default mx-auto !h-12 w-full max-w-[160px] items-center gap-2"
                  >
                    {/*[*/}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="icon"
                      style={{}}
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      data-v-b4402e20=""
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m7 7l-7-7l7-7"
                      />
                    </svg>{" "}
                    Back to home {/*]*/}
                    {/**/}
                  </button>
                </div>
              </div>
              {/*]*/}
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Error404