import { Transition } from "@headlessui/react";
import { BaseCard, BaseButton } from "../../../component";

interface props {
  forwardTest: string;
  moveForward: () => void;
  moveBackward: () => void;
}

const OnboardingNavigationButton = ({
  forwardTest,
  moveForward,
  moveBackward,
}: props) => {
  return (
    <div>
      <Transition
        show={true}
        enter="transition-all duration-300 ease-out"
        enterFrom="translate-y-20 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all duration-100 ease-in"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-20 opacity-0"
      >
        <div className="fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]">
          <BaseCard className="shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl">
            <BaseButton rounded="lg" className="w-full" onClick={moveBackward}>
              <span>Previous</span>
            </BaseButton>
            <BaseButton
              rounded="lg"
              color="primary"
              className="w-full"
              onClick={moveForward}
            >
              <span>{forwardTest}</span>
            </BaseButton>
          </BaseCard>
        </div>
      </Transition>
    </div>
  );
};

export default OnboardingNavigationButton;
