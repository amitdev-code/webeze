import { Icon } from '@iconify/react/dist/iconify.js';
import React, { Fragment } from 'react'
import { data } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { BaseInput, BaseButton, BasePlaceholderPage, BaseCard, BaseAvatar, BaseHeading, BaseParagraph, BaseTag, BaseAvatarGroup, BaseButtonAction, BasePagination } from '../../../../component';
import WebezeContentWrapper, { LeftSlot, RightSlot } from '../../../../component/wrappers/WebezeContentWrapper';

const BlogListing = () => {

  const data = [
    {
      id: '5',
      name: 'Mary Lebowski',
      location: 'San Diego, CA',
      role: 'Project Manager',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/5.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16,
      },
      teams: [{ src: '/img/avatars/9.svg' }, { src: '/img/avatars/11.svg' }],
    },
    {
      id: '34',
      name: 'Daniel Redbird',
      location: 'Toronto, Canada',
      role: 'Web Developer',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/20.svg',
        flag: '/img/icons/flags/canada.svg',
      },
      stats: {
        projects: 45,
        replies: 12,
        posts: 5,
      },
      teams: [
        { src: '/img/avatars/12.svg' },
        { src: '/img/avatars/22.svg' },
        { src: '/img/avatars/10.svg' },
      ],
    },
    {
      id: '8',
      name: 'Hermann Mayer',
      location: 'New York, NY',
      role: 'Product Manager',
      roleColor: 'secondary',
      medias: {
        avatar: '/img/avatars/16.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 14,
        replies: 97,
        posts: 16,
      },
      teams: [{ src: '/img/avatars/7.svg' }, { src: '/img/avatars/23.svg' }],
    },
    {
      id: '40',
      name: 'Jeanne Marchand',
      location: 'Paris, France',
      role: 'Mobile Developer',
      roleColor: 'orange',
      medias: {
        avatar: '/img/avatars/19.svg',
        flag: '/img/icons/flags/france.svg',
      },
      stats: {
        projects: 6,
        replies: 12,
        posts: 8,
      },
      teams: [
        { src: '/img/avatars/18.svg' },
        { src: '/img/avatars/13.svg' },
        { src: '/img/avatars/8.svg' },
        { src: '/img/avatars/4.svg' },
        { src: '/img/avatars/5.svg' },
        { src: '/img/avatars/6.svg' },
        { src: '/img/avatars/7.svg' },
        { src: '/img/avatars/9.svg' },
      ],
    },
    {
      id: '27',
      name: 'Carmen Escudero',
      location: 'Madrid, Spain',
      role: 'HR Manager',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/21.svg',
        flag: '/img/icons/flags/spain.svg',
      },
      stats: {
        projects: 8,
        replies: 158,
        posts: 54,
      },
      teams: [{ src: '/img/avatars/18.svg' }],
    },
    {
      id: '9',
      name: 'Anna Baker',
      location: 'San Francisco, CA',
      role: 'UI/UX Designer',
      roleColor: 'green',
      medias: {
        avatar: '/img/avatars/9.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 19,
        replies: 28,
        posts: 12,
      },
      teams: [{ src: '/img/avatars/12.svg' }, { src: '/img/avatars/5.svg' }],
    },
    {
      id: '18',
      name: 'Esteban Castellanos',
      location: 'Miami, FL',
      role: 'UI/UX Designer',
      roleColor: 'green',
      medias: {
        avatar: '/img/avatars/18.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 59,
        replies: 158,
        posts: 16,
      },
      teams: [
        { src: '/img/avatars/19.svg' },
        { src: '/img/avatars/16.svg' },
        { src: '/img/avatars/22.svg' },
        { src: '/img/avatars/4.svg' },
        { src: '/img/avatars/5.svg' },
        { src: '/img/avatars/2.svg' },
        { src: '/img/avatars/6.svg' },
        { src: '/img/avatars/9.svg' },
        { src: '/img/avatars/7.svg' },
        { src: '/img/avatars/3.svg' },
      ],
    },
    {
      id: '10',
      name: 'Kendra Wilson',
      location: 'Miami, FL',
      role: 'Business Analyst',
      roleColor: 'primary',
      medias: {
        avatar: '/img/avatars/10.svg',
        flag: '/img/icons/flags/united-states-of-america.svg',
      },
      stats: {
        projects: 42,
        replies: 15,
        posts: 2,
      },
      teams: [{ src: '/img/avatars/15.svg' }, { src: '/img/avatars/22.svg' }],
    },
  ]

  return (
   <Fragment>
    <WebezeContentWrapper>
       <LeftSlot>
       <BaseInput
          // value={filter}
          // onChange={(e) => setFilter(e.target.value)}
          icon="lucide:search"
          placeholder="Filter Blogs..."
          classes={{
            wrapper: 'w-full sm:w-auto',
          }}
        />
       </LeftSlot>
       <RightSlot>
       <BaseButton className="w-full sm:w-32" onClick={()=>{}}>Manage</BaseButton>
          <BaseButton color="primary" className="w-full sm:w-32">
            <Icon icon="lucide:plus" className="size-4" />
            <span>Add Blog</span>
          </BaseButton>
       </RightSlot>
      <div>
        {data?.length === 0 ? (
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <div className="image">
              <img
                className="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-1.svg"
                alt="Placeholder"
              />
              <img
                className="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-1-dark.svg"
                alt="Placeholder"
              />
            </div>
          </BasePlaceholderPage>
        ) : (
          <div className="space-y-4">
            <TransitionGroup>
              {data?.map((item) => (
                <BaseCard
                  key={item.id}
                  rounded="lg"
                  className="flex flex-col p-5 sm:flex-row sm:items-center my-3"
                >
                  <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left">
                    <BaseAvatar
                      size="lg"
                      src={item.medias.avatar}
                      badgeSrc={item.medias.flag}
                    />
                    <div>
                      <BaseHeading
                        as="h3"
                        size="sm"
                        weight="medium"
                        className="text-muted-800 dark:text-muted-100"
                      >
                        {item.name}
                      </BaseHeading>
                      <BaseParagraph
                        size="xs"
                        lead="none"
                        className="text-muted-400 flex items-end text-sm"
                      >
                        <Icon icon="lucide:map-pin" className="size-4" />
                        <span>{item.location}</span>
                      </BaseParagraph>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-4 sm:ms-auto sm:flex-row sm:items-center sm:justify-end sm:pt-0">
                    <div className="flex w-full items-center justify-center sm:w-[160px] sm:justify-end">
                      <BaseTag
                        size="sm"
                        color="primary"
                        variant="pastel"
                        rounded="full"
                      >
                        {item.role}
                      </BaseTag>
                    </div>
                    <div className="divide-muted-200 dark:divide-muted-700 flex items-center justify-center divide-x">
                      {(['projects', 'replies', 'posts'] as Array<keyof typeof item.stats>).map((stat) => (
                        <div className="flex flex-col gap-1 px-4 text-center" key={stat}>
                          <BaseHeading
                            as="h3"
                            size="md"
                            weight="semibold"
                            className="text-muted-800 dark:text-muted-100"
                          >
                            <span>{item.stats[stat]}</span>
                          </BaseHeading>
                          <BaseParagraph
                            lead="none"
                            weight="semibold"
                            className="text-muted-400 !text-[0.65rem] uppercase"
                          >
                            <span>{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                          </BaseParagraph>
                        </div>
                      ))}
                    </div>
                    <div className="ptablet:hidden flex w-full items-center justify-center gap-1 py-3 sm:w-[160px] sm:justify-end sm:py-0">
                      <BaseAvatarGroup size="xs" avatars={item.teams} limit={3} />
                      <p className="text-muted-400 urbanist text-xs">In Team</p>
                    </div>
                    <div className="sm:ms-6">
                      <BaseButtonAction className="w-full sm:w-auto">View</BaseButtonAction>
                    </div>
                  </div>
                </BaseCard>
              ))}
            </TransitionGroup>
            <div>
              <BasePagination
                totalItems={20}
                itemPerPage={10}
                currentPage={1}
                rounded="full"
              />
            </div>
          </div>
        )}
      </div>
    </WebezeContentWrapper>
   </Fragment>
  )
}

export default BlogListing