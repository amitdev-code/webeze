import { Fragment, useRef } from "react";
import { stepDataInterface } from "../OnBoarding";
import {
  BaseButtonIcon,
  BaseFullscreenDropfile,
  BaseInput,
  BaseInputFileHeadless,
  BaseInputFileHeadlessRef,
  BaseTextarea,
} from "../../../component";
import { Icon } from "@iconify/react";

interface props {
  stepData: stepDataInterface;
  setStepData: (label: keyof stepDataInterface, data: string) => void;
}

const CompanyInfo = ({ stepData }: props) => {
  const fileInputRef = useRef<BaseInputFileHeadlessRef>(null);

  return (
    <Fragment>
      <div className="mx-auto flex w-full max-w-5xl flex-col px-4">
        <div className="flex items-center justify-center">
          <BaseFullscreenDropfile icon="ph:image-duotone" />
          <BaseInputFileHeadless
            ref={fileInputRef}
            accept="image/*"
            // @ts-ignore - Ignoring type check for this line
            children={(context: BaseInputFileHeadlessRef) => {
              const { open, files, remove } = context;
              return (
                <div className="relative size-20">
                  <img
                    src={
                      files && files[0]
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
                          onClick={() => { remove(files[0]) }}
                        >
                          <Icon icon="lucide:x" className="size-4" />
                        </BaseButtonIcon>
                      </div>
                    ) : (
                      <div className="absolute bottom-0 end-0 z-20">
                        <div className="relative">
                          <BaseButtonIcon
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
              )
            }}
          />
        </div>
        <div className="my-4 text-center font-sans">
          <p className="text-muted-500 text-sm">
            Upload a company logo
          </p>
          <p className="text-muted-400 text-xs">
            File size cannot exceed 2MB
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-sm flex-col gap-3">
          <BaseInput
            value={stepData.companyName}
            // onInput={(event) => setStepData("companyName", value)}
            // name="name"
            // error={errors.fields.name}
            rounded="lg"
            placeholder="Company name"
            classes={{
              input: 'h-12 text-base text-center',
            }}
          />
          <BaseTextarea
            value={stepData.companyDescription}
            // onChange={handleInputChange}
            name="description"
            // error={errors.fields.description}
            rounded="lg"
            placeholder="Describe your company..."
            autogrow
            className="max-h-52"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CompanyInfo;
