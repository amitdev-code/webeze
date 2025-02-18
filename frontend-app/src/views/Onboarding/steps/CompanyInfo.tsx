import React, { Fragment, useRef } from "react";
import { stepDataInterface } from "../OnBoarding";
import {
  BaseButtonIcon,
  BaseFullscreenDropfile,
  BaseInputFileHeadless,
  BaseInputFileHeadlessRef,
} from "../../../component";
import { Icon } from "@iconify/react";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
}

const CompanyInfo = ({ stepData, setStepData }: props) => {
  const fileInputRef = useRef<BaseInputFileHeadlessRef>(null);

  return (
    <Fragment>
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4">
        <div className="flex items-center justify-center">
          <BaseFullscreenDropfile icon="ph:image-duotone" />
          <BaseInputFileHeadless ref={fileInputRef} multiple accept="image/*">
            {({ open, files, remove }): React.ReactNode => (
              <div className="relative size-20">
                <img
                  src={
                    files
                      ? URL.createObjectURL(files[0])
                      : "/img/avatars/placeholder-file.png"
                  }
                  alt="Upload preview"
                  className="bg-muted-200 dark:bg-muted-700/60 size-20 rounded-full object-cover object-center"
                />
                {
                  files?.length && files[0] ? (
                    <div className="absolute bottom-0 end-0 z-20">
                    <BaseButtonIcon
                size="sm"
                rounded="full"
                onClick={() => remove(files[0])}
              >
                <Icon icon="lucide:x" className="size-4" />
              </BaseButtonIcon>
              </div>
                  ) : (
                    <div className="absolute bottom-0 end-0 z-20">
                    <div className="relative">
                    <div className="relative">
                        size="sm"
                        rounded="full"
                        onClick={open}
                      >
                        <Icon icon="lucide:plus" className="size-4" />
                      </BaseButtonIcon>
                    </div>
                  </div>
                  )
                }
              </div>
            )}
          </BaseInputFileHeadless>
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyInfo;
