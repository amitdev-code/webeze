import { Fragment, useEffect, useRef, useState } from "react";
import {
  BaseButton,
  BaseHeading,
  BaseIconBox,
  BaseParagraph,
  BaseText,
  BaseThemeToggle,
} from "../../../component";
import { Link } from "react-router-dom";

const UserVerification = () => {
  const [input, setInput] = useState([]);
  const [validatePin, setValidatePin] = useState(false);
  const codeLength = 4;
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text").slice(0, codeLength);
    const newInput = [...pastedData].map((char) => char);
    setInput(newInput);

    // Focus last input after paste
    if (inputRefs.current[pastedData.length - 1]) {
      inputRefs.current[pastedData.length - 1].focus();
    }
  };

  const handleType = (event, index) => {
    const { key } = event;
    const currentInput = [...input];

    if (key === "Backspace") {
      if (currentInput[index - 1] !== undefined) {
        currentInput[index - 1] = "";
        setInput(currentInput);
        if (inputRefs.current[index - 2]) {
          inputRefs.current[index - 2].focus();
        }
      }
      return;
    }

    if (!/^\d$/.test(key)) {
      event.preventDefault();
      return;
    }

    currentInput[index - 1] = key;
    setInput(currentInput);

    // Check if PIN is complete and valid
    if (currentInput.join("") === "1234") {
      setValidatePin(true);
    }

    // Move to next input
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  return (
    <Fragment>
      <div className="bg-muted-100 dark:bg-muted-900 min-h-screen">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            className="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
          >
            {/* <TairoLogo class="size-10" /> */}
          </Link>
          <div className="flex items-center gap-4">
            <BaseThemeToggle />
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="flex size-full flex-col">
            <div className="pointer-events-none flex w-full items-center justify-center pt-8">
              <div className="flex h-16 items-center justify-center">
                {validatePin ? (
                  // <TairoCheckAnimated size="sm" />
                  <></>
                ) : (
                  <BaseIconBox
                    color="primary"
                    size="lg"
                    rounded="full"
                    className="mx-auto"
                  >
                    {/* <Lock className="text-primary-500 mx-auto size-8" /> */}
                  </BaseIconBox>
                )}
              </div>
            </div>

            <div className="pt-4 text-center">
              <BaseHeading size="3xl" weight="medium" className="mb-1">
                Enter your code
              </BaseHeading>
              <BaseParagraph className="text-muted-500 dark:text-muted-400 mb-2">
                Enter the pin code we've just sent you
              </BaseParagraph>
              <BaseText
                size="xs"
                lead="snug"
                className="text-muted-500 dark:text-muted-400 mb-8"
              >
                <span className="block">
                  <span className="font-bold">1234</span> is the demo PIN.
                </span>
              </BaseText>
            </div>

            <div className="text-muted-800 dark:text-muted-100 mx-auto flex h-60 w-72 flex-col rounded text-center">
              <div
                className={`flex w-full justify-center gap-3 ${
                  validatePin ? "pointer-events-none" : ""
                }`}
              >
                {[...Array(codeLength)].map((_, i) => (
                  <input
                    key={`pin${i + 1}`}
                    ref={(el) => (inputRefs.current[i] = el)}
                    type="text"
                    name={`pin${i + 1}`}
                    maxLength={1}
                    className="dark:bg-muted-800 unselectable nui-focus inline w-16 select-none rounded-lg bg-white py-5 text-center text-4xl font-bold transition-all"
                    value={input[i] !== undefined ? input[i] : "-"}
                    placeholder="0"
                    disabled={input.length < i || validatePin}
                    onPaste={handlePaste}
                    onKeyDown={(e) => handleType(e, i + 1)}
                    readOnly
                  />
                ))}
              </div>

              <div className="mt-10">
                <BaseButton
                  href="/dashboards"
                  className="!h-12 w-full"
                  // variant={validatePin ? "default" : "secondary"}
                  disabled={!validatePin}
                >
                  Take me to Dashboard
                </BaseButton>

                <div className="mt-8 flex items-center justify-between">
                  <BaseText size="sm" className="text-muted-400">
                    Didn't receive the code?
                  </BaseText>
                  <button
                    type="button"
                    className="text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
                  >
                    Send it again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserVerification;
