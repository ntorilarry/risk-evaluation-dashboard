import { HiMiniBars4, HiOutlineBell, HiMiniChevronDown } from "react-icons/hi2";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import DarkModeToggle from "./DarkModeToggle";
import FullScreen from "./FullScreen";

import { HiMenu } from "react-icons/hi";

const userNavigation = [
  { name: "Your profile", href: "/profile" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = ({ setSidebarOpen, collapsed, setCollapsed }) => {
  return (
    <div>
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white dark:bg-slate-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 dark:text-white lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <HiMiniBars4 className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="lg:block text-gray-500 dark:text-gray-400 focus:outline-none hidden"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="sr-only">Toggle sidebar</span>
          <HiMenu className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div
          className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
          aria-hidden="true"
        />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          {/* <SearchTable /> */}
          {/* Separator */}

          <div className="flex flex-1 justify-end items-center gap-x-4 lg:gap-x-6">
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />
            <FullScreen />
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <HiOutlineBell className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />

            <DarkModeToggle />

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 dark:bg-white/10 lg:hidden"
              aria-hidden="true"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src={`https://ui-avatars.com/api/?name=Admin&background=random&size=40`}
                  alt=""
                />
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-slate-800 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-white"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
