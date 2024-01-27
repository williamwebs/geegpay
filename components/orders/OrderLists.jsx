"use client";

import { latestOrders } from "@/constants/menuList";
import Image from "next/image";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import Modal from "../Modal/Modal";
import { useState } from "react";

const OrderLists = () => {
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const viewOrder = (e) => {
    setData(e);
    setOpenModal((prev) => !prev);
    console.log("clicked:", data);
  };

  return (
    <>
      <aside className="px-2 mt-3 overflow-x-scroll md:overflow-x-hidden">
        <div className="grid grid-cols-6 gap-20 md:gap-5 w-full font-medium text-[#9CA4AB] text-sm mb-5">
          <h4 className="col-span-2">Name</h4>
          <h4>Date</h4>
          <h4>Amount</h4>
          <h4>Status</h4>
          <h4>Invoice</h4>
        </div>

        {latestOrders.map((i, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-20 md:gap-5 w-full font-medium text-sm md:text-base items-start text-[#9CA4AB] my-3"
          >
            <div className="col-span-2 flex items-center gap-3">
              <div className="hidden w-8 h-8 border rounded-full md:flex items-center justify-center overflow-hidden">
                <Image
                  src={i.image}
                  width={100}
                  height={100}
                  alt={i.name}
                  className="object-cover"
                />
              </div>
              <p className="font-medium text-xs md:text-sm text-[#3A3F51] dark:text-white">
                {i.name}
              </p>
            </div>
            <p className="font-medium text-xs md:text-sm text-[#737373] dark:text-[#9CA4AB]">
              {i.date}
            </p>
            <p className="font-medium text-xs md:text-sm text-[#3A3F51] dark:text-white">
              ${i.amount}
            </p>
            <p
              className={`font-medium text-xs md:text-sm ${
                i.success ? "text-success" : "text-error"
              }`}
            >
              {i.success ? "Paid" : "Refund"}
            </p>
            <button
              onClick={() => viewOrder(i)}
              className="flex items-center gap-1"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <HiOutlineDocumentDuplicate className="text-sm" />
              </div>
              <p className="font-medium text-xs md:text-sm text-[#3A3F51] dark:text-[#9CA4AB]">
                View
              </p>
            </button>
          </div>
        ))}
      </aside>

      {/*  */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 border rounded-full md:flex items-center justify-center overflow-hidden">
              <Image
                src={data.image}
                width={100}
                height={100}
                alt={data.name}
                className="object-cover"
              />
            </div>
            <h4>{data.name}</h4>
          </div>
          <div className="flex items-center justify-between">
            <p>${data.amount}</p>
            <span>{data.date}</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderLists;
