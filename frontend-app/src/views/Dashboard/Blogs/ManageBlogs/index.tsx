import React, { Fragment } from 'react'
import { BaseAvatar, BaseCard, BaseHeading, BaseParagraph, BaseText } from '../../../../component'
import { Icon } from '@iconify/react'
import { data, Link } from 'react-router-dom'

const ManageBlogs = () => {

  const settings = [
    { icon: "ph:buildings-duotone", title: "Company", desc: "Manage company" },
    { icon: "ph:users-four-duotone", title: "Team", desc: "Manage team" },
    { icon: "ph:briefcase-duotone", title: "Projects", desc: "Project settings" },
    { icon: "ph:lock-open-duotone", title: "Permissions", desc: "Manage permissions" },
    { icon: "ph:note-duotone", title: "Documents", desc: "Data privacy" },
    { icon: "ph:upload-duotone", title: "Upload", desc: "Upload settings" },
    { icon: "ph:credit-card-duotone", title: "Billing", desc: "Billing and plans" },
    { icon: "ph:chat-circle-duotone", title: "Messaging", desc: "Chat settings" },
    { icon: "ph:shield-check-duotone", title: "Security", desc: "Security settings" },
    { icon: "ph:gear-six-duotone", title: "Preferences", desc: "General settings" },
  ];


  return (
    <Fragment>
      <div className="flex w-full flex-col">
        <BaseAvatar
          src={"/img/avatars/2.svg"}
          size="2xl"
          className="mx-auto"
        />
        <div className="mx-auto w-full max-w-md text-center">
          <BaseHeading as="h2" size="xl" weight="medium" className="mt-4">
          Amit Kumar
          </BaseHeading>
          <BaseParagraph size="sm" className="text-muted-400 mb-3 mt-1">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </BaseParagraph>
          <div className="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x">
            <div className="text-muted-400 flex h-8 items-center gap-1 px-4">
              <Icon icon="ph:circles-three-duotone" className="size-5" />
              <BaseText size="sm">corporate relations</BaseText>
            </div>
            <div className="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">
              <Icon icon="ph:check-circle-duotone" className="size-5" />
              <BaseText size="sm">abc projects</BaseText>
            </div>
          </div>
        </div>
      </div>
      <div className="ltablet:grid-cols-5 mx-auto mt-6 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
      {settings.map((setting, index) => (
        <BaseCard key={index} rounded="lg" shadow="hover" className="hover:!border-primary-500 group border-2">
          <Link to="#" className="block p-6">
            <div className="text-center flex flex-col items-center">
              <Icon
                icon={setting.icon}
                className="group-hover:text-primary-500 text-muted-400 size-8 transition-all duration-300 group-hover:rotate-6"
              />
              <BaseHeading as="h3" size="sm" weight="semibold" className="mt-2 !text-[0.65rem] uppercase">
                {setting.title}
              </BaseHeading>
              <BaseText size="xs" className="text-muted-400">
                {setting.desc}
              </BaseText>
            </div>
          </Link>
        </BaseCard>
      ))}
    </div>
    </Fragment>
  )
}

export default ManageBlogs