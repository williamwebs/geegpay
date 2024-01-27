"use client";

import { CiSearch } from "react-icons/ci";
import {
  IoCloseOutline,
  IoMenuOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiCalendar } from "react-icons/hi2";
import Sidebar from "../mobileSidebar/Sidebar";
import Profile from "../profile/Profile";

const Navbar = ({ openModal }) => {
  const [todaysDate, setTodaysDate] = useState();
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);

  const pathname = usePathname();

  // handle menu click on mobile
  const handleMenuClick = (e) => {
    e.preventDefault();
    setToggleNav((prev) => !prev);
  };

  // dummy data for bar chart
  const getPresentDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const date = `${month} ${day}, ${year}`;
    setTodaysDate(date);
  };

  useEffect(() => {
    getPresentDate();
  }, []);

  // open notification modal
  const toggleNotification = () => {
    openModal();
  };

  // open notification modal
  const handleProfile = () => {
    setToggleProfile((prev) => !prev);
  };

  return (
    <div className="h-fit md:h-20 border-b border-[#e5eaef] dark:border-gray-800 py-[18px] px-0 md:px-5">
      {/* desktop navbar */}
      <div className="hidden md:flex items-center justify-between">
        <div className="font-semibold text-xl text-gray900 dark:text-white font-globalFont capitalize">
          {pathname.split("/").pop()}
        </div>

        {/* right navbar */}
        <div className="right_menu flex items-center gap-5">
          {/* searchbox */}
          <div className="search_box bg-white dark:bg-gray800 flex items-center gap-2 w-[348px] h-12 border border-[#dadddd] dark:border-gray-800 px-2 rounded-3xl overflow-hidden">
            <div className="search_icon">
              <CiSearch className="text-xl text-[#78828a]" />
            </div>
            <input
              type="text"
              className="w-full bg-transparent outline-none"
              placeholder="Search..."
            />
          </div>

          {/* profile */}
          <div className="profile flex items-center gap-5">
            {/* date */}
            <div className="flex items-center gap-2">
              <HiCalendar className="text-sm text-gray900 dark:text-white" />
              <div className="date font-medium text-sm text-gray900 dark:text-white">
                {todaysDate}
              </div>
            </div>

            {/* notification */}
            <div
              onClick={toggleNotification}
              className="notification w-10 h-10 flex items-center justify-center rounded-full border border-[#dadddd] dark:border-gray-800 cursor-pointer"
            >
              <IoNotificationsOutline className="text-xl text-gray900 dark:text-white" />
            </div>

            {/* user profile */}
            <div
              onClick={handleProfile}
              className="profile border border-[#dadddd] dark:border-gray-800 rounded-full p-1 flex items-center gap-5 cursor-pointer"
            >
              <div className="profile_details flex items-center gap-2">
                <div className="image w-[38px] h-[38px] rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src="/images/profile-geegpay.png"
                    alt="user image"
                  />
                </div>
                <div className="credentials">
                  <h5 className="text-sm font-normal text-gray900 dark:text-white">
                    Justin Bergson
                  </h5>
                  <span className="font-normal text-xs text-[#787486] dark:text-gray-300 block">
                    justin@gmail.com
                  </span>
                </div>
              </div>
              <div className="arrow">
                {toggleProfile ? (
                  <IoIosArrowUp className="text-lg text-gray800 dark:text-white mr-1" />
                ) : (
                  <IoIosArrowDown className="text-lg text-gray800 dark:text-white mr-1" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="flex md:hidden items-center justify-between">
        <div className="flex flex-col items-start gap-1">
          <div className="font-semibold text-lg text-gray900 dark:text-white font-globalFont capitalize">
            {pathname.split("/").pop()}
          </div>
          {/* date */}
          <div className="md:hidden -mt-1">
            <div className="date font-medium text-xs text-gray900 dark:text-gray400">
              {todaysDate}
            </div>
          </div>
        </div>

        {/* right navbar */}
        <div className="right_menu flex items-center gap-2">
          {/* searchbox change */}

          {/* profile */}
          <div className="profile flex items-center gap-2">
            {/* notification */}
            <div
              onClick={toggleNotification}
              className="notification w-10 h-10 flex items-center justify-center rounded-full border border-[#dadddd] dark:border-gray-800 cursor-pointer"
            >
              <IoNotificationsOutline className="text-xl text-gray900 dark:text-white" />
            </div>

            {/* user profile */}
            <div
              onClick={handleProfile}
              className="profile border border-[#dadddd] dark:border-gray-800 rounded-full cursor-pointer flex items-center justify-center w-10 h-10 p-[2px] "
            >
              <Image
                width={100}
                height={100}
                src="/images/profile-geegpay.png"
                alt="user image"
                className="object-contain"
              />
            </div>

            {/* menu icon */}
            <div
              onClick={handleMenuClick}
              className="border border-[#dadddd] dark:border-gray-800 rounded-full cursor-pointer flex items-center justify-center w-10 h-10"
            >
              {toggleNav ? (
                <IoCloseOutline className="text-2xl font-bold" />
              ) : (
                <IoMenuOutline className="text-2xl font-bold" />
              )}
            </div>
          </div>
        </div>

        <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      </div>

      <Profile toggleProfile={toggleProfile} />
    </div>
  );
};

export default Navbar;
