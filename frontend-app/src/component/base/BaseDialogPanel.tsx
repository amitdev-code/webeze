import { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { BaseButtonClose } from "./BaseButtonClose";

interface BaseDialogPanelProps {
  show: boolean;
  title: string;
  size?: "sm" | "md" | "xl" | "2xl" | "3xl" | "4xl";
  backdrop?: boolean;
  children?: React.ReactElement;
}

const BaseDialogPanel = ({
  backdrop = true,
  size = "md",
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
              <Dialog.Panel
                className={`pointer-events-auto relative w-screen max-w-${size} transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700`}
              >
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6 flex items-center justify-between">
                    <Dialog.Title className="text-base font-semibold text-gray-900">
                      {title}
                    </Dialog.Title>
                    <BaseButtonClose
                      onClick={() => {
                        setOpen(!open);
                      }}
                    />
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
{
  /* <BaseDialogPanel show={true} title='Builder'>
       </BaseDialogPanel> */
}
