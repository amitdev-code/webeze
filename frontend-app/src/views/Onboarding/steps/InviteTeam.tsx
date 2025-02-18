import { stepDataInterface } from '../OnBoarding';
import { Icon } from '@iconify/react';
import { BaseAvatar, BaseInput, BaseButtonIcon, BaseProgress } from '../../../component';


interface props {
    stepData: stepDataInterface;
    setStepData: (label: keyof stepDataInterface, data: string) => void;
}

const InviteTeam = ({ }: props) => {
    return (
        <div className="relative mx-auto max-w-5xl">
            <div className="flex w-full flex-col items-center">
                <BaseAvatar
                    size="xl"
                    src="/img/avatars/2.svg"
                    badgeSrc="/img/icons/flags/united-states-of-america.svg"
                />
                <p className="text-muted-400 my-3 font-sans text-sm">
                    You are the project owner
                </p>
                <div className="relative w-full max-w-sm">
                    <BaseInput
                        icon="lucide:search"
                        rounded="lg"
                        placeholder="ex: Clarissa, Kendra, ..."
                        classes={{
                            wrapper: 'w-full relative z-10',
                            input: 'h-12 text-base !ps-12',
                            icon: 'h-12 w-12',
                        }}
                    />
                </div>
                <div className="mx-auto mt-8 w-full max-w-2xl pb-40">
                    <div className="w-full space-y-2">
                        <div
                            className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-4"
                        >
                            <BaseAvatar size="sm" src={"/img/avatars/3.svg"} />
                            <div className="flex flex-col">
                                <h3 className="text-muted-800 dark:text-muted-100 font-sans text-sm font-semibold">
                                    Invited
                                </h3>
                                <p className="text-muted-500 dark:text-muted-400 font-sans text-xs">
                                    david.joe@gmail.com
                                </p>
                            </div>
                            <div className="ms-auto">
                                <div className="relative flex w-48 justify-between">
                                    {['invited', 'accepted', 'profile setup'].map((progress, roleIndex) => (
                                        <div
                                            key={roleIndex}
                                            role="button"
                                            className="relative z-10 shrink-0"
                                            data-webeze-tooltip={progress.charAt(0).toUpperCase() + progress.slice(1)}
                                        >
                                            <div
                                                className={`size-3 rounded-full ${progress === 'invited' ? 'bg-primary-500' : 'bg-muted-300 dark:bg-muted-700'}`}
                                            />
                                        </div>
                                    ))}
                                    <div className="absolute top-1/2 w-full -translate-y-1/2">
                                        <BaseProgress size="xs" value={0} max={2} />
                                    </div>
                                </div>
                            </div>
                            <div className="ms-8">
                                <BaseButtonIcon size='sm' rounded="full" onClick={() => { }}>
                                    <Icon icon="lucide:x" className="size-4" />
                                </BaseButtonIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InviteTeam