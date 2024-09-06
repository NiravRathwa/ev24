"use client";
import Image from "next/image";
import Header from "./components/Header";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CardComponent from "./components/CardComponent";
import SwiperComponent from "./components/SwiperComponent";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const cardData = [
  {
    img: "https://framerusercontent.com/images/Cc6aGhevuc57Mtchugz61of8kU.jpg?scale-down-to=1024",
    title: "Top-tier",
    subTitle: "Professionals",
    description:
      "With years of experience and a passion for all things automotive, our skilled technicians are the driving force behind our reputation for exceptional service",
  },
  {
    img: "https://framerusercontent.com/images/PaEToSaQAMaWFRWyd2HuIdM6f4I.jpg?scale-down-to=1024",
    title: "Cutting-edge",
    subTitle: "Tools & Gear",
    description:
      "To deliver the best results, we rely on cutting-edge tools and gear in our state-of-the-art facility. Our dedication to staying up-to-date with the latest automotive technology ensures that your vehicle receives the highest level of care.",
  },
  {
    img: "https://framerusercontent.com/images/iwBWtilT2BTg5uzvc56rS4y7Ok.jpg?scale-down-to=1024",
    title: "Commitment to",
    subTitle: "Perform",
    description:
      "At our Auto Repair Shop, your safety & your car performance are our priorities. We are unwavering in our commitment to providing you with a safe and reliable driving experience.",
  },
];
const feedbackData = [
  {
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem esse unde ab dolor laudantium accusamus fuga aperiam. Eveniet, earum praesentium.",
    avatarUrl:
      "https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png",
    name1: "John Doe",
    name2: "Jane Smith",
  },
  {
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    avatarUrl:
      "https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",
    name1: "Michael Brown",
    name2: "Sarah Connor",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatarUrl:
      "https://primefaces.org/cdn/primereact/images/avatar/ivanmagalhaes.png",
    name1: "Emily Davis",
    name2: "James Williams",
  },
  {
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    avatarUrl:
      "https://primefaces.org/cdn/primereact/images/avatar/arjunsrinivasan.png",
    name1: "Olivia Harris",
    name2: "Liam Johnson",
  },
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    avatarUrl:
      "https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",
    name1: "Ava Martinez",
    name2: "Noah Wilson",
  },
];

export default function Home() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { amount: 0.5 });
  const isInView2 = useInView(ref2, { amount: 0.5 });
  const isInView3 = useInView(ref3, { amount: 0.5 });

  return (
    <>
      <section ref={ref1} className="w-full h-screen overflow-hidden">
        <Header />
        <div className="absolute inset-0 bg-custom-gradient z-0"></div>
        <motion.div
          className="relative z-10 flex flex-col items-start justify-normal gap-5 w-full h-full mt-20 text-white md:mt-8 p-8"
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
            className="md:w-2/4 mt-20"
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
        className="h-screen grid md:grid-cols-2 grid-cols-1 border border-solid  "
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

      <section className="w-full min-h-screen flex flex-col items-center justify-center gap-5 bg-slate-200 ">
        <div className="flex  flex-col md:flex-row justify-center items-center gap-5 p-4 flex-wrap">
          {cardData.map((data) => (
            <CardComponent data={data} />
          ))}
        </div>
        <button className="bg-red-600 mb-5 md:mb-0 p-2 rounded-md">
          Meet Our Team
        </button>
      </section>

      <section className="w-full  min-h-[50vh] bg-blue-200 flex justify-center items-center">
        <SwiperComponent type="logo" content={cardData} />
      </section>
      <section className="w-full  min-h-screen bg-red-400 flex justify-center items-center">
        <SwiperComponent type="feedback" content={feedbackData} />
      </section>
    </>
  );
}
