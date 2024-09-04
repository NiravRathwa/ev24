"use client";
import Image from "next/image";
import Header from "./components/Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { amount: 0.5 });
  const isInView2 = useInView(ref2, { amount: 0.5 });
  const isInView3 = useInView(ref3, { amount: 0.5 });

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden" ref={ref1}>
        <Header />
        <div className="absolute inset-0 bg-custom-gradient z-0"></div>
        <motion.div
          className="relative z-10 flex flex-col items-start justify-normal gap-5 w-full h-full text-white md:mt-8 p-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
        >
          <motion.div
            className="md:w-2/4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-4 text-lg md:text-2xl">
              Hello molestias, facilis cum eius quod placeat officiis
              perferendis! Veniam qui cumque facere.
            </p>
          </motion.div>
          <motion.div
            className="md:w-2/4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold">Welcome </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              numquam, veniam laboriosam nulla reiciendis, a similique officia
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section
        ref={ref2}
        className="w-full bg-[url('/example.png')] bg-cover bg-center h-screen"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          className="relative z-10 flex flex-col items-start justify-center gap-5 w-full h-full text-white p-8"
        >
          <motion.div
            className="md:w-2/4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-4 text-lg md:text-2xl">
              Hello molestias, facilis cum eius quod placeat officiis
              perferendis! Veniam qui cumque facere.
            </p>
          </motion.div>
          <motion.div
            className="md:w-2/4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold">Welcome </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              numquam, veniam laboriosam nulla reiciendis, a similique officia
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section
        ref={ref3}
        className="h-screen grid md:grid-cols-2 grid-cols-1 "
      >
       <motion.div
    className="bg-[url('/example.png')] bg-cover bg-center rounded-md"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-lg md:text-2xl font-semibold text-white p-4">
      Services
    </h3>
    <motion.div className="flex justify-start items-center flex-col relative top-1/4 md:top-1/2 transform -translate-y-1/4 md:-translate-y-1/2 w-3/4 md:w-1/2 p-2">
      <p className="text-white text-sm md:text-base mb-4">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </p>
      <motion.button
        className="!place-self-start bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Our Services
      </motion.button>
    </motion.div>
  </motion.div>

  <motion.div
    className="bg-[url('/example.png')] bg-cover bg-center rounded-md"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <h3 className="text-lg md:text-2xl font-semibold text-white p-4">
      Services
    </h3>
    <motion.div className="flex justify-start items-center flex-col relative top-1/4 md:top-1/2 transform -translate-y-1/4 md:-translate-y-1/2 w-3/4 md:w-1/2 p-2">
      <p className="text-white text-sm md:text-base mb-4">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
      </p>
      <motion.button
        className="!place-self-start bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Our Services
      </motion.button>
    </motion.div>
  </motion.div>
      </section>
    </>
  );
}
