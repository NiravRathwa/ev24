"use client";
import React, { useState } from "react";
import "primeicons/primeicons.css";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Header.css";
type Props = {};

const Header = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };
  const iconColor = open ? 'black' : 'white';
  const Ul = (open: boolean) => (
    <motion.ul
    className={` gap-2 md:gap-4 ${
      open ? "flex flex-col items-start text-black" : "hidden md:flex items-center justify-center"
    }`}
  >
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="#">Our Products</a>
    </motion.li>
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="#">Our Services</a>
    </motion.li>
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="/about">About</a>
    </motion.li>
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="#">Blog</a>
    </motion.li>
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="#">Contact Us</a>
    </motion.li>
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ transformOrigin: 'center' }}
    >
      <a href="/products">Products</a>
    </motion.li>
  </motion.ul>
  );
  return (
    <motion.header
      className={`header text-white p-4 z-10 relative ${
        open ? "expanded" : ""
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="md:hidden box-content ">
        <div className=" relative  flex justify-between items-center z-10  px-4 ">
          <div className="bg-white">
            {" "}
            <Image
              src="/next.svg"
              alt="Example Image"
              width={100}
              height={70}
            />
          </div>
          <div>
            {open ? (
              <i
                className="pi pi-times text-white"
                style={{ color: iconColor, fontSize: "1.5rem" }}
                onClick={toggle}
              ></i>
            ) : (
              <i
                className="pi pi-bars text-white "
                style={{ color: iconColor, fontSize: "1.5rem" }}
                onClick={toggle}
              ></i>
            )}
          </div>
        </div>
        {Ul(open)}
      </nav>

      <nav className="hidden md:block">{Ul(open)}</nav>
    </motion.header>
  );
};

export default Header;
