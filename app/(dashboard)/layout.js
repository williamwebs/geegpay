"use client";

import { Inter } from "next/font/google";
import "/styles/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";


export default function DashboardLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <html lang="en">
      <body className="">
        <div className="flex gap-0 md:gap-5 h-full bg-gray50 dark:text-white dark:bg-gray900 w-full">
          <section>
            <Sidebar />
          </section>
          <section className="w-screen overflow-x-hidden ml-0 md:ml-14 px-4 md:px-0 font-globalFont">
            <Navbar openModal={toggleModal} />
            <main className="px-0 md:px-5 py-3">
              {children}

              {isModalOpen && (
                <Modal isOpen={toggleModal} onClose={toggleModal}>
                  <h3 className="block w-full mt-2 mb-1 text-lg text-gray-300 dark:text-gray-900 font-bold text-center">
                    No Notification!
                  </h3>
                </Modal>
              )}
            </main>
          </section>
        </div>
      </body>
    </html>
  );
}
