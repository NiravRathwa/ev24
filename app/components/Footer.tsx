import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-4 h-[50vh] justify-center items-center  text-white p-10 gap-6">
      <div className="flex justify-center md:justify-start mb-6 md:mb-0">
        <img src="/next.svg" alt="" className="w-32" />
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-4">Find Us</h3>
        <div className="space-y-2">
          <p className="flex items-center">
            <i className="pi pi-briefcase mr-2 text-yellow-400"></i>
            1234 Elm Street, Suite 567, Springfield, IL 62704
          </p>
          <p className="flex items-center">
            <i className="pi pi-phone mr-2 text-green-400"></i>
            (555) 123-4567
          </p>
          <p className="flex items-center">
            <i className="pi pi-envelope mr-2 text-blue-400"></i>
            contact@example.com
          </p>
        </div>
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-4">Business Hours</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white">Monday To Friday</h4>
            <h6 className="text-white">9:00AM To 7:00PM</h6>
          </div>
          <div>
            <h4 className="font-semibold text-white">Sunday</h4>
            <h6 className="text-white">9:00AM To 1:00PM</h6>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <i className="pi pi-instagram text-pink-500 text-2xl"></i>
            <i className="pi pi-twitter text-blue-400 text-2xl"></i>
            <i className="pi pi-facebook text-blue-600 text-2xl"></i>
          </div>
          <p className="text-white">
            Stay up to date with the latest news and promotions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
