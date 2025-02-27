import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface BaseDialogPanelProps {
  show: boolean;
  backdrop?: boolean;
  title: string;
  children: React.ReactElement;
}

const BaseDialogPanel = ({
  backdrop = true,
  show,
  title,
  children,
}: BaseDialogPanelProps) => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Fragment>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        {backdrop && (
          <Dialog.Backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0" />
        )}

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                <Transition show={true}>
                  <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
                    </button>
                  </div>
                </Transition>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-base font-semibold text-gray-900">
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {children}
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default BaseDialogPanel;
