import React, { Fragment, useState } from 'react'
import WebezeContentWrapper, { LeftSlot, RightSlot } from '../../../../component/wrappers/WebezeContentWrapper';
import { BaseAvatar, BaseCheckbox, BaseDropdown, BaseDropdownItem, BaseInput, BasePagination, BasePlaceholderPage, BaseProgressCircle, BaseSelect, BaseTag } from '../../../../component';
import WebezeTable from '../../../../component/webeze/WebezeTable';
import WebezeTableCell from '../../../../component/webeze/WebezeTableCell';
import WebezeTableHeading from '../../../../component/webeze/WebezeTableHeading';
import WebezeTableRow from '../../../../component/webeze/WebezeTableRow';

const StoreLeads = () => {

  const [filter, setFilter] = useState('');
  const [perPage, setPerPage] = useState(10);
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [data, setdata] = useState<{
    id: number;
    picture: string;
    badge: string;
    username: string;
    initials: string;
    status: string;
    location: string;
    position: string;
    completed: number;
    bio: string;
    socialProfiles: {
      name: string;
      icon: string;
      url: string;
    }[];
    color?: string;
  }[]>([
    {
      id: 29,
      picture: '/img/avatars/22.svg',
      badge: '/img/stacks/python.svg',
      username: 'Miranda L.',
      initials: 'ML',
      status: 'new',
      location: 'Berlin, Germany',
      position: 'Software Engineer',
      completed: 12,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 21,
      picture: '/img/avatars/21.svg',
      badge: '/img/icons/flags/england.svg',
      username: 'Elisabeth F.',
      initials: 'EF',
      status: 'available',
      location: 'London, UK',
      position: 'Mobile Developer',
      completed: 49,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 8,
      picture: '/img/avatars/23.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Erik K.',
      initials: 'EK',
      status: 'available',
      location: 'New York, NY',
      position: 'Software Engineer',
      completed: 61,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 7,
      picture: '/img/avatars/10.svg',
      badge: '/img/stacks/js.svg',
      username: 'Kendra W.',
      initials: 'KW',
      status: 'available',
      location: 'San Diego, CA',
      position: 'Software Engineer',
      completed: 28,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 122,
      picture: '/img/avatars/16.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Hermann M.',
      initials: 'HM',
      color: 'warning',
      status: 'busy',
      location: 'San Diego, CA',
      position: 'Product Manager',
      completed: 36,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 23,
      picture: '/img/avatars/11.svg',
      badge: '/img/icons/flags/united-states-of-america.svg',
      username: 'Dan B.',
      initials: 'DB',
      status: 'available',
      location: 'San Diego, CA',
      position: 'Project Manager',
      completed: 71,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 37,
      picture: '/img/avatars/24.svg',
      badge: '/img/icons/flags/france.svg',
      username: 'Christina F.',
      initials: 'CF',
      status: 'available',
      location: 'Paris, France',
      position: 'Product Manager',
      completed: 32,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 25,
      picture: '/img/avatars/25.svg',
      badge: '/img/stacks/js.svg',
      username: 'Melany W.',
      initials: 'MW',
      status: 'new',
      location: 'San Diego, CA',
      position: 'Web Developer',
      completed: 49,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 39,
      picture: '/img/avatars/3.svg',
      badge: '/img/stacks/python.svg',
      username: 'Alejandro B.',
      initials: 'AB',
      status: 'available',
      location: 'New York, NY',
      position: 'Business Analyst',
      completed: 58,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },
    {
      id: 19,
      picture: '/img/avatars/19.svg',
      badge: '/img/icons/flags/germany.svg',
      username: 'Greta K.',
      initials: 'GK',
      status: 'available',
      location: 'Los Angeles, CA',
      position: 'Sales Manager',
      completed: 19,
      bio: 'This is a nice user description that we can use as demo content.',
      socialProfiles: [
        {
          name: 'Facebook',
          icon: 'fa6-brands:facebook-f',
          url: 'https://facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'fa6-brands:twitter',
          url: 'https://twitter.com',
        },
        {
          name: 'Linkedin',
          icon: 'fa6-brands:linkedin-in',
          url: 'https://linkedin.com',
        },
        {
          name: 'Github',
          icon: 'fa6-brands:github',
          url: 'https://github.com',
        },
      ],
    },])

  const isAllVisibleSelected = selected.length === data?.length;

  const toggleAllVisibleSelection = () => {
    if (isAllVisibleSelected) {
      setSelected([]);
    } else {
      setSelected(data?.map(item => item.id) ?? []);
    }
  };

  return (
    <Fragment>
      <WebezeContentWrapper>
        <LeftSlot>
          <BaseInput
            value={filter}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
            icon="lucide:search"
            placeholder="Filter users..."
            classes={{ wrapper: 'w-full sm:w-auto' }}
          />
        </LeftSlot>
        <RightSlot>
          <BaseSelect
            value={perPage}
            onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => setPerPage(Number(e.target.value))}
            classes={{ wrapper: 'w-full sm:w-40' }}
          >
            <option value={10}>10 per page</option>
            <option value={25}>25 per page</option>
            <option value={50}>50 per page</option>
            <option value={100}>100 per page</option>
          </BaseSelect>
        </RightSlot>

        <div>
          {data?.length === 0 ? (
            <BasePlaceholderPage
              title="No matching results"
              subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
            >
              <div>
                <img
                  className="block dark:hidden"
                  src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                  alt="Placeholder image"
                />
                <img
                  className="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                  alt="Placeholder image"
                />
              </div>
            </BasePlaceholderPage>
          ) : (
            <div>
              <div className="w-full">
                <WebezeTable rounded="sm" scrollable={false}
                  header={
                    <Fragment>
                      <WebezeTableHeading uppercase spaced className="p-4">
                        <div className="flex items-center">
                          <BaseCheckbox
                            checked={isAllVisibleSelected}
                            indeterminate={selected.length > 0 && !isAllVisibleSelected}
                            name="table-1-main"
                            rounded="sm"
                            color="primary"
                            onClick={toggleAllVisibleSelection}
                          />
                        </div>
                      </WebezeTableHeading>
                      <WebezeTableHeading uppercase spaced>Collaborator</WebezeTableHeading>
                      <WebezeTableHeading uppercase spaced>Location</WebezeTableHeading>
                      <WebezeTableHeading uppercase spaced>Status</WebezeTableHeading>
                      <WebezeTableHeading uppercase spaced>Completed</WebezeTableHeading>
                      <WebezeTableHeading uppercase spaced className="text-end">Action</WebezeTableHeading>
                    </Fragment>
                  }
                >
                  {selected.length > 0 && (
                    <WebezeTableRow hoverable={false}>
                      <WebezeTableCell
                        colspan={6}
                        className="bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                      >
                        You have selected {selected.length} items of the total {data?.length} items.
                        <a href="#" className="outline-none hover:underline focus:underline">Click here to everything</a>
                      </WebezeTableCell>
                    </WebezeTableRow>
                  )}

                  {data?.map(item => (
                    <WebezeTableRow key={item.id}>
                      <WebezeTableCell spaced>
                        <div className="flex items-center">
                          <BaseCheckbox
                            checked={selected.includes(item.id)}
                            value={item.id}
                            name={`item-checkbox-${item.id}`}
                            rounded="sm"
                            color="primary"
                            onChange={() => {
                              setSelected(prev => prev.includes(item.id)
                                ? prev.filter(id => id !== item.id)
                                : [...prev, item.id]);
                            }}
                          />
                        </div>
                      </WebezeTableCell>
                      <WebezeTableCell spaced>
                        <div className="flex items-center">
                          <BaseAvatar src={item.picture} text={item.initials} />
                          <div className="ms-3 leading-none">
                            <h4 className="font-sans text-sm font-medium">{item.username}</h4>
                            <p className="text-muted-400 font-sans text-xs">{item.position}</p>
                          </div>
                        </div>
                      </WebezeTableCell>
                      <WebezeTableCell light spaced>{item.location}</WebezeTableCell>
                      <WebezeTableCell spaced className="capitalize">
                        <BaseTag color={item.status === 'available' ? 'success' : item.status === 'new' ? 'info' : item.status === 'busy' ? 'warning' : 'muted'} variant="pastel" rounded="full" size="sm" className="font-medium">
                          {item.status}
                        </BaseTag>
                      </WebezeTableCell>
                      <WebezeTableCell spaced>
                        <div className="flex items-center">
                          <div className="relative">
                            <BaseProgressCircle value={item.completed} thickness={1} size={50} className="text-success-500" />
                            <span className="absolute start-1/2 top-1/2 z-10 ms-0.5 -translate-x-1/2 -translate-y-1/2 font-sans text-[0.65rem] font-semibold rtl:me-0.5 rtl:ms-0 rtl:translate-x-1/2">
                              {item.completed}%
                            </span>
                          </div>
                          <span className="text-muted-400 font-sans text-xs">Tasks completed</span>
                        </div>
                      </WebezeTableCell>
                      <WebezeTableCell spaced>
                        <div className="flex justify-end">
                          <BaseDropdown variant="context" label="Dropdown" placement="bottom-end" rounded="md">
                            <BaseDropdownItem title="User" text="View details" rounded="md" />
                          </BaseDropdown>
                        </div>
                      </WebezeTableCell>
                    </WebezeTableRow>
                  ))}
                </WebezeTable>
              </div>
              <div className="mt-6">
                <BasePagination
                  totalItems={data?.length ?? 0}
                  itemPerPage={perPage}
                  currentPage={page}
                  rounded="lg"
                />
              </div>
            </div>
          )}
        </div>
      </WebezeContentWrapper>
    </Fragment>
  )
}

export default StoreLeads