import { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: MdOutlineDashboard },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen, collapsed, setCollapsed }) => {
  return (
    <>
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <HiMiniXMark
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex h-screen grow flex-col gap-y-5 overflow-y-auto border dark:border-0 bg-white dark:bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                  <a
                    href="/"
                    className="flex gap-x-2 h-16 shrink-0 items-center"
                  >
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                      Risk Evaluation
                    </h1>
                  </a>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "bg-[#e7e8e8] dark:bg-slate-700 text-black dark:text-white"
                                      : "text-gray-400 hover:text-black dark:hover:text-white hover:bg-[#e7e8e8] dark:hover:bg-slate-700",
                                    "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium"
                                  )
                                }
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div
        className={classNames(
          "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-width duration-300",
          collapsed ? "lg:w-0" : "lg:w-[280px]"
        )}
      >
        <div
          className={classNames(
            "flex grow flex-col gap-y-5 overflow-y-auto bg-white  dark:bg-slate-800 px-6 pb-4",
            collapsed ? "hidden" : "block"
          )}
        >
          {/* Logo and Collapse Button */}
          <div className="flex items-center justify-between h-20 shrink-0">
            <a href="/" className="flex gap-x-2 items-center">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Risk Evaluation
              </h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-[#e7e8e8] dark:bg-slate-700 text-black dark:text-white"
                              : "text-gray-400 hover:text-black dark:hover:text-white hover:bg-[#e7e8e8] dark:hover:bg-slate-700",
                            "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-medium"
                          )
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
