import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'; // Import icons from react-icons
import { AuthContext } from '../context/auth.Context';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'WORK WITH US', href: '/connect' },
  { name: 'MY WORK', href: '/portfolio' },
  { name: 'SHOP', href: '/shop' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <Disclosure as="nav" className="bg-[#bfb9b2]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 bg-[#bfb9b2]"> {/* Change background color */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseLine className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenuLine className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">

                  {/* Your logo */}
                  {/* <img
                    className="block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Render navigation links */}
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'text-white hover:bg-[#DDDCDA] hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isLoggedIn ? (
                  // If user is logged in, render logout button
                  <button
                    onClick={logOutUser}
                    className="rounded-full bg-[#bfb9b2] p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Logout</span>
                    Logout
                  </button>
                ) : (
                  // If user is not logged in, render login and signup links
                  <>
                    <Link
                      to="/login"
                      className="text-white hover:bg-[#DDDCDA] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="text-white hover:bg-[#DDDCDA] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile version of the navigation bar */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Render navigation links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    'text-white hover:bg-[#DDDCDA] hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;