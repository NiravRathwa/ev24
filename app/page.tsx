"use client";
import Image from "next/image";
import Header from "./components/Header";
import { motion } from "framer-motion";
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
export default function Home() {
  return (
    <>
      <section>
        <div className="relative w-full h-screen overflow-hidden  ">
          <Header />
          <div className="absolute inset-0 bg-custom-gradient z-0"></div>
          {/* <video
          autoPlay
          muted
          loop
          className="absolute top-1/2 left-1/2 w-auto h-auto min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-50"
          >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
          <motion.div className="relative z-10 flex flex-col items-start justify-normal  gap-5 w-full h-full text-white md:mt-8 p-8">
            <motion.div
              className="md:w-2/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mt-4 text-lg md:text-2xl">
              tenetur molestias, facilis cum eius quod placeat officiis
                perferendis! Veniam qui cumque facere.
              </p>
            </motion.div>
            <motion.div
              className="md:w-2/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold">Welcome </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                numquam, veniam laboriosam nulla reiciendis, a similique officia
                
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-[url('/example.png')] bg-cover bg-center h-screen ">
        <motion.div
          variants={containerVariants}
          className="relative z-10 flex flex-col items-start justify-center gap-5 w-full h-full text-white p-8"
        >
          <motion.div
              className="md:w-2/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
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
      <section className="h-screen grid grid-cols-2 flex-col md:flex-row ">
        <div className="bg-[url('/example.png')] "></div>
        <div className="bg-[url('/example.png')] "></div>
      </section>
    </>
  );
}
