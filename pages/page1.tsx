/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverBackdrop,
    PopoverButton,
    PopoverPanel,
  } from "@headlessui/react";
  import {
    ArrowLongLeftIcon,
    CheckIcon,
    HandThumbUpIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    PaperClipIcon,
    QuestionMarkCircleIcon,
    UserIcon,
  } from "@heroicons/react/20/solid";
  import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
  
  const user = {
    name: "Whitney Francis",
    email: "whitney@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Dashboard", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Applicants", href: "#" },
    { name: "Company", href: "#" },
  ];
  const breadcrumbs = [
    { name: "Jobs", href: "#", current: false },
    { name: "Front End Developer", href: "#", current: false },
    { name: "Applicants", href: "#", current: true },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const attachments = [
    { name: "resume_front_end_developer.pdf", href: "#" },
    { name: "coverletter_front_end_developer.pdf", href: "#" },
  ];
  const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: "bg-gray-400" },
    advanced: { icon: HandThumbUpIcon, bgColorClass: "bg-blue-500" },
    completed: { icon: CheckIcon, bgColorClass: "bg-green-500" },
  };
  const timeline = [
    {
      id: 1,
      type: eventTypes.applied,
      content: "Applied to",
      target: "Front End Developer",
      date: "Sep 20",
      datetime: "2020-09-20",
    },
    {
      id: 2,
      type: eventTypes.advanced,
      content: "Advanced to phone screening by",
      target: "Bethany Blake",
      date: "Sep 22",
      datetime: "2020-09-22",
    },
    {
      id: 3,
      type: eventTypes.completed,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      date: "Sep 28",
      datetime: "2020-09-28",
    },
    {
      id: 4,
      type: eventTypes.advanced,
      content: "Advanced to interview by",
      target: "Bethany Blake",
      date: "Sep 30",
      datetime: "2020-09-30",
    },
    {
      id: 5,
      type: eventTypes.completed,
      content: "Completed interview with",
      target: "Katherine Snyder",
      date: "Oct 4",
      datetime: "2020-10-04",
    },
  ];
  const comments = [
    {
      id: 1,
      name: "Leslie Alexander",
      date: "4d ago",
      imageId: "1494790108377-be9c29b29330",
      body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
    },
    {
      id: 2,
      name: "Michael Foster",
      date: "4d ago",
      imageId: "1519244703995-f4e0f30006d5",
      body: "Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.",
    },
    {
      id: 3,
      name: "Dries Vincent",
      date: "4d ago",
      imageId: "1506794778202-cad84cf45f1d",
      body: "Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.",
    },
  ];
  
  function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  export default function Example() {
    return (
      <>
        {/*
              This example requires updating your template:
      
              ```
              <html class="h-full bg-gray-100">
              <body class="h-full">
              ```
            */}
        <div className="min-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <Popover className="flex h-16 justify-between">
                <div className="flex px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                        className="h-8 w-auto"
                      />
                    </a>
                  </div>
                  <nav
                    aria-label="Global"
                    className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4"
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-gray-400"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search"
                        className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <PopoverButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  </PopoverButton>
                </div>
  
                <div className="lg:hidden">
                  <PopoverBackdrop
                    transition
                    aria-hidden="true"
                    className="fixed inset-0 z-20 bg-black bg-opacity-25 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                  />
  
                  <PopoverPanel
                    focus
                    transition
                    className="absolute right-0 top-0 z-30 w-full max-w-none origin-top transform p-2 transition duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="pb-2 pt-3">
                        <div className="flex items-center justify-between px-4">
                          <div>
                            <img
                              alt="Your Company"
                              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                              className="h-8 w-auto"
                            />
                          </div>
                          <div className="-mr-2">
                            <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close menu</span>
                              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </PopoverButton>
                          </div>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="pb-2 pt-4">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img
                              alt=""
                              src={user.imageUrl}
                              className="h-10 w-10 rounded-full"
                            />
                          </div>
                          <div className="ml-3">
                            <div className="text-base font-medium text-gray-800">
                              {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                              {user.email}
                            </div>
                          </div>
                          <button
                            type="button"
                            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="h-6 w-6" />
                          </button>
                        </div>
                        <div className="mt-3 space-y-1 px-2">
                          {userNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </div>
  
                <div className="hidden lg:ml-4 lg:flex lg:items-center">
                  <button
                    type="button"
                    className="flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <MenuButton className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </Popover>
            </div>
  
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="border-t border-gray-200 py-3">
                <nav aria-label="Breadcrumb" className="flex">
                  <div className="flex sm:hidden">
                    <a
                      href="#"
                      className="group inline-flex space-x-3 text-sm font-medium text-gray-500 hover:text-gray-700"
                    >
                      <ArrowLongLeftIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600"
                      />
                      <span>Back to Applicants</span>
                    </a>
                  </div>
                  <div className="hidden sm:block">
                    <ol role="list" className="flex items-center space-x-4">
                      <li>
                        <div>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <HomeIcon
                              aria-hidden="true"
                              className="h-5 w-5 flex-shrink-0"
                            />
                            <span className="sr-only">Home</span>
                          </a>
                        </div>
                      </li>
                      {breadcrumbs.map((item) => (
                        <li key={item.name}>
                          <div className="flex items-center">
                            <svg
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="h-5 w-5 flex-shrink-0 text-gray-300"
                            >
                              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a
                              href={item.href}
                              aria-current={item.current ? "page" : undefined}
                              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                              {item.name}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </nav>
              </div>
            </div>
          </header>
  
          <main className="py-10">
            {/* Page header */}
            <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      className="h-16 w-16 rounded-full"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full shadow-inner"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Ricardo Cooper
                  </h1>
                  <p className="text-sm font-medium text-gray-500">
                    Applied for{" "}
                    <a href="#" className="text-gray-900">
                      Front End Developer
                    </a>{" "}
                    on <time dateTime="2020-08-25">August 25, 2020</time>
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Disqualify
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Advance to offer
                </button>
              </div>
            </div>
  
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="applicant-information-title"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Applicant Information
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Personal details and application.
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Application for
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Backend Developer
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Email address
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            ricardocooper@example.com
                          </dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary expectation
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                        </div>
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Phone
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            +1 555-555-5555
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                            anim incididunt cillum culpa consequat. Excepteur qui
                            ipsum aliquip consequat sint. Sit id mollit nulla
                            mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt
                            qui eu.
                          </dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            Attachments
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul
                              role="list"
                              className="divide-y divide-gray-200 rounded-md border border-gray-200"
                            >
                              {attachments.map((attachment) => (
                                <li
                                  key={attachment.name}
                                  className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                                >
                                  <div className="flex w-0 flex-1 items-center">
                                    <PaperClipIcon
                                      aria-hidden="true"
                                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    />
                                    <span className="ml-2 w-0 flex-1 truncate">
                                      {attachment.name}
                                    </span>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <a
                                      href={attachment.href}
                                      className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
                      >
                        Read full application
                      </a>
                    </div>
                  </div>
                </section>
  
                {/* Comments*/}
                <section aria-labelledby="notes-title">
                  <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-5 sm:px-6">
                        <h2
                          id="notes-title"
                          className="text-lg font-medium text-gray-900"
                        >
                          Notes
                        </h2>
                      </div>
                      <div className="px-4 py-6 sm:px-6">
                        <ul role="list" className="space-y-8">
                          {comments.map((comment) => (
                            <li key={comment.id}>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    alt=""
                                    src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                    className="h-10 w-10 rounded-full"
                                  />
                                </div>
                                <div>
                                  <div className="text-sm">
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      {comment.name}
                                    </a>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>{comment.body}</p>
                                  </div>
                                  <div className="mt-2 space-x-2 text-sm">
                                    <span className="font-medium text-gray-500">
                                      {comment.date}
                                    </span>{" "}
                                    <span className="font-medium text-gray-500">
                                      &middot;
                                    </span>{" "}
                                    <button
                                      type="button"
                                      className="font-medium text-gray-900"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-6 sm:px-6">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            alt=""
                            src={user.imageUrl}
                            className="h-10 w-10 rounded-full"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <form action="#">
                            <div>
                              <label htmlFor="comment" className="sr-only">
                                About
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                placeholder="Add a note"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <a
                                href="#"
                                className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                              >
                                <QuestionMarkCircleIcon
                                  aria-hidden="true"
                                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                />
                                <span>Some HTML is okay.</span>
                              </a>
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
  
              <section
                aria-labelledby="timeline-title"
                className="lg:col-span-1 lg:col-start-3"
              >
                <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                  <h2
                    id="timeline-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Timeline
                  </h2>
  
                  {/* Activity Feed */}
                  <div className="mt-6 flow-root">
                    <ul role="list" className="-mb-8">
                      {timeline.map((item, itemIdx) => (
                        <li key={item.id}>
                          <div className="relative pb-8">
                            {itemIdx !== timeline.length - 1 ? (
                              <span
                                aria-hidden="true"
                                className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                              />
                            ) : null}
                            <div className="relative flex space-x-3">
                              <div>
                                <span
                                  className={classNames(
                                    item.type.bgColorClass,
                                    "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white",
                                  )}
                                >
                                  <item.type.icon
                                    aria-hidden="true"
                                    className="h-5 w-5 text-white"
                                  />
                                </span>
                              </div>
                              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                <div>
                                  <p className="text-sm text-gray-500">
                                    {item.content}{" "}
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      {item.target}
                                    </a>
                                  </p>
                                </div>
                                <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                  <time dateTime={item.datetime}>
                                    {item.date}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex flex-col justify-stretch">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Advance to offer
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </>
    );
  }
  