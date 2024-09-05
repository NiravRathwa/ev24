"use client";
import React, { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import Image from "next/image";
import { motion, MotionProps } from "framer-motion";
import "./Header.css";
import { ReactNode } from "react";
type Props = {};

const itemVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.8 },
};

type MotionListItemProps = MotionProps & {
  children: ReactNode;
};

const MotionListItem = ({ children, ...props }: MotionListItemProps) => (
  <motion.li
    variants={itemVariants}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
    transition={{ type: "spring", stiffness: 300 }}
    style={{ transformOrigin: "center" }}
    {...props}
    className="text-black md:text-white"
  >
    {children}
  </motion.li>
);

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const Header = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggle = () => {
    setOpen(!open);
  };
  const iconColor = open ? "black" : "white";
  const Ul = ({ open }: { open: boolean }) => {
    return (
      <motion.ul
        className={`gap-2 md:gap-4 p-4 ${
          open
            ? "flex flex-col md:flex-row md:justify-center items-start md:items-center"
            : "hidden"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
      >
        <MotionListItem>
          <a href="#">Our Products</a>
        </MotionListItem>
        <MotionListItem>
          <a href="#">Our Services</a>
        </MotionListItem>
        <MotionListItem>
          <a href="#">About</a>
        </MotionListItem>
        <MotionListItem>
          <a href="#">Blog</a>
        </MotionListItem>
        <MotionListItem>
          <a href="#">Contact Us</a>
        </MotionListItem>
        <MotionListItem>
          <a href="#">Products</a>
        </MotionListItem>
      </motion.ul>
    );
  };
  return (
    <motion.header
      className={`header p-4 z-10 relative ${open ? "expanded" : "collapsed"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className=" box-content ">
        <div className="md:hidden relative flex justify-between items-center z-10  px-4 ">
          <div className="bg-white">
            <Image
              src="/next.svg"
              alt="Example Image"
              width={100}
              height={70}
            />
          </div>
          <div className="mt-10">
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

        {!isMobile ? (
          <motion.ul
            className="flex justify-center items-center gap-4 p-4"
            initial="hidden"
            animate="visible"
          >
            <MotionListItem>
              <a href="#">Our Products</a>
            </MotionListItem>
            <MotionListItem>
              <a href="#">Our Services</a>
            </MotionListItem>
            <MotionListItem>
              <a href="#">About</a>
            </MotionListItem>
            <li className="bg-white">
            <Image
              src="/next.svg"
              alt="Example Image"
              width={100}
              height={70}
            ></Image>
          </li>
            <MotionListItem>
              <a href="#">Blog</a>
            </MotionListItem>
            <MotionListItem>
              <a href="#">Contact Us</a>
            </MotionListItem>
            <MotionListItem>
              <a href="#">Products</a>
            </MotionListItem>
          </motion.ul>
        ) : (
          <Ul open={open} />
        )}
      </nav>

      <nav className="hidden md:block"></nav>
    </motion.header>
  );
};

export default Header;
