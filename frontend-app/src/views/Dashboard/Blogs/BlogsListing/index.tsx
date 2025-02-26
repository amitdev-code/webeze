import { Icon } from '@iconify/react/dist/iconify.js';
import React, { Fragment } from 'react'
import { data } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { BaseInput, BaseButton, BasePlaceholderPage, BaseCard, BaseAvatar, BaseHeading, BaseParagraph, BaseTag, BaseAvatarGroup, BaseButtonAction, BasePagination } from '../../../../component';
import WebezeContentWrapper, { LeftSlot, RightSlot } from '../../../../component/wrappers/WebezeContentWrapper';
import WebezeTabContentWrapper from '../../../../component/wrappers/WebezeTabContentWrapper';

const BlogListing = () => {
  const data = [{
    id: '1',
    picture: '/img/illustrations/layouts/rental-1.svg',
    name: '1396 Redmond Street',
    location:
      '1396 Redmond Street, Apartment 12, Suite H 102, Los Angeles, CA',
    rating: 4,
    details: {
      rooms: 5,
      beds: 3,
      bathrooms: 1,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
    },
  },
  {
    id: '2',
    picture: '/img/illustrations/layouts/rental-2.svg',
    name: '24 Mulberry Street',
    location: '24 Mulberry Street, Suite 43, New York, NY',
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1,
    },
    amenities: {
      wifi: true,
      cleaning: true,
    },
  },
  {
    id: '3',
    picture: '/img/illustrations/layouts/rental-3.svg',
    name: '62 John Walberg Ave',
    location:
      '62 John Walberg Avenue, Apartment 10, Suite 24, Los Angeles, CA',
    rating: 5,
    details: {
      rooms: 4,
      beds: 2,
      bathrooms: 2,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
    },
  },
  {
    id: '4',
    picture: '/img/illustrations/layouts/rental-4.svg',
    name: '48 Manhattan Ave',
    location: '48 Manhattan Avenue, Suite G12, New York, NY',
    rating: 5,
    details: {
      rooms: 5,
      beds: 4,
      bathrooms: 3,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
    },
  },
  {
    id: '5',
    picture: '/img/illustrations/layouts/rental-5.svg',
    name: '12 Charity Street',
    location: '12 Charity Street, Apartment 49, Brooklynn, NY',
    rating: 4,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1,
    },
    amenities: {
      parking: true,
      wifi: true,
      cleaning: true,
    },
  },
  {
    id: '6',
    picture: '/img/illustrations/layouts/rental-6.svg',
    name: '23 Bakery Street',
    location: '23 Bakery Street, Suite 121, New York, NY',
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
      otherGreatCoolThing: true,
    },
  },
  {
    id: '7',
    picture: '/img/illustrations/layouts/rental-7.svg',
    name: '1028 Pasadena Ave',
    location: '1028 Pasadena Avenue, Suite F 24, Los Angeles, CA',
    rating: 5,
    details: {
      rooms: 7,
      beds: 5,
      bathrooms: 3,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
      other: true,
      otherThing: true,
      otherCoolThing: true,
    },
  },
  {
    id: '8',
    picture: '/img/illustrations/layouts/rental-8.svg',
    name: '54 Church Street',
    location: '54 Church Street, Apartment 2, New York, NY',
    rating: 5,
    details: {
      rooms: 2,
      beds: 1,
      bathrooms: 1,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
    },
  },
  {
    id: '9',
    picture: '/img/illustrations/layouts/rental-9.svg',
    name: '112 Old City District',
    location: '112 Old City District, Apartment 5 Suite 42, New York, NY',
    rating: 5,
    details: {
      rooms: 3,
      beds: 2,
      bathrooms: 1,
    },
    amenities: {
      parking: true,
      wifi: true,
      heater: true,
      cleaning: true,
    },
  },]

  return (
    <Fragment>
      <WebezeTabContentWrapper labels={['Published', 'Review', 'Draft']}>
        <div>
          <BaseInput
            // value={filter}
            // onChange={(e) => setFilter(e.target.value)}
            icon="lucide:search"
            placeholder="Filter Blogs..."
            classes={{ wrapper: 'w-full sm:w-auto' }}
          />
        </div>
        <div>
          {data?.length === 0 ? (
            <BasePlaceholderPage
              title="No matching results"
              subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
            >
              <div slot="image">
                <img
                  className="block dark:hidden"
                  src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                  alt="Placeholder image"
                />
                <img
                  className="hidden dark:block"
                  src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                  alt="Placeholder image"
                />
              </div>
            </BasePlaceholderPage>
          ) : (
            <div className="space-y-4">
              <TransitionGroup
                enterActiveClass="transform-gpu"
                enterFromClass="opacity-0 -translate-x-full"
                enterToClass="opacity-100 translate-x-0"
                leaveActiveClass="absolute transform-gpu"
                leaveFromClass="opacity-100 translate-x-0"
                leaveToClass="opacity-0 -translate-x-full"
              >
                {data?.map((item) => (
                  <BaseCard
                    key={item.id}
                    rounded="lg"
                    className="flex flex-col p-5 sm:flex-row sm:items-center my-2"
                  >
                    <div className="flex flex-col justify-center gap-3 text-center sm:flex-row sm:justify-start sm:text-left">
                      <img
                        className="bg-muted-100 dark:bg-muted-700/60 w-full rounded-lg sm:max-w-[130px]"
                        src={item.picture}
                        alt={item.name}
                        height={190}
                        width={130}
                      />
                      <div>
                        <div className="flex flex-col gap-2 text-left sm:flex-row sm:items-center">
                          <BaseHeading
                            as="h3"
                            size="sm"
                            weight="medium"
                            className="text-muted-800 dark:text-muted-100"
                          >
                            {item.name}
                          </BaseHeading>
                          <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, index) => (
                              <Icon
                                key={index}
                                icon="uiw:star-on"
                                className={`${item.rating > index ? 'text-yellow-400' : 'text-muted-400'} size-3`}
                              />
                            ))}
                          </div>
                        </div>
                        <BaseParagraph
                          size="xs"
                          lead="none"
                          className="text-muted-400 mt-3 flex gap-1 text-left text-sm sm:mt-0 sm:items-end"
                        >
                          <Icon icon="lucide:map-pin" className="size-3" />
                          <span>{item.location}</span>
                        </BaseParagraph>
                        <div className="text-primary-500 my-2 flex items-center gap-2">
                          <span className="font-sans text-xs">{item.details.rooms} rooms</span>
                          <span className="text-muted-400">&middot;</span>
                          <span className="font-sans text-xs">{item.details.beds} beds</span>
                          <span className="text-muted-400">&middot;</span>
                          <span className="font-sans text-xs">{item.details.bathrooms} bathrooms</span>
                        </div>
                        <div className="text-muted-400 mt-auto flex items-center gap-6">
                          {item.amenities.parking && (
                            <div className="flex items-center gap-1">
                              <Icon icon="ph:car-duotone" className="size-4" />
                              <span className="font-sans text-xs">Parking</span>
                            </div>
                          )}
                          {item.amenities.wifi && (
                            <div className="flex items-center gap-1">
                              <Icon icon="ph:broadcast-duotone" className="size-4" />
                              <span className="font-sans text-xs">Wifi</span>
                            </div>
                          )}
                          {item.amenities.heater && (
                            <div className="flex items-center gap-1">
                              <Icon icon="ph:thermometer-duotone" className="size-4" />
                              <span className="font-sans text-xs">Heater</span>
                            </div>
                          )}
                          {item.amenities.cleaning && (
                            <div className="flex items-center gap-1">
                              <Icon icon="ph:waves-duotone" className="size-4" />
                              <span className="font-sans text-xs">Cleaning</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ptablet:flex-col mt-4 flex items-center justify-end gap-2 sm:ms-auto sm:mt-4">
                      <BaseButton className="w-full sm:w-28">More Info</BaseButton>
                      <BaseButton color="primary" className="w-full sm:w-28">
                        <span>Book Now</span>
                      </BaseButton>
                    </div>
                  </BaseCard>
                ))}
              </TransitionGroup>
              <div className="mt-6">
                <BasePagination
                  totalItems={100}
                  itemPerPage={10}
                  currentPage={1}
                  rounded="full"
                />
              </div>
            </div>
          )}
        </div>
        <div>
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <div slot="image">
              <img
                className="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              />
              <img
                className="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              />
            </div>
          </BasePlaceholderPage>
        </div>
        <div>
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <div slot="image">
              <img
                className="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-2.svg"
                alt="Placeholder image"
              />
              <img
                className="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-2-dark.svg"
                alt="Placeholder image"
              />
            </div>
          </BasePlaceholderPage>
        </div>
      </WebezeTabContentWrapper>
    </Fragment>
  )
}

export default BlogListing