"use client";

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';  // PrimeReact theme
import 'primereact/resources/primereact.min.css';           // PrimeReact core
import 'primeicons/primeicons.css';                         // PrimeIcons
import 'tailwindcss/tailwind.css'; 
type Props = {};

const About = (props: Props) => {
  const [link, setLink] = useState("");

  const handleDownload = () => {
    // Handle the download logic here
    console.log("Downloading video from:", link);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
    {/* Header */}
    {/* <header className="text-center mb-10">
      <h1 className="text-4xl font-bold text-blue-700">Instatube Downloader</h1>
      <p className="text-lg text-gray-600 mt-2">
        Download Instagram and YouTube videos with ease
      </p>
    </header> */}

    {/* Input and Button Section */}
    <div className="w-full max-w-lg mx-auto">
      <div className="mb-4">
        <InputText
          placeholder="Paste Instagram or YouTube link here"
          className="w-full p-inputtext-lg text-lg"
        />
      </div>

      <Button
        label="Download Video"
        icon="pi pi-download"
        className="w-full p-button-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
      />
    </div>

    {/* Features Section */}
    {/* <section className="mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-6">Why Use Instatube?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div className="flex flex-col items-center">
          <i className="pi pi-instagram text-4xl text-pink-500"></i>
          <h3 className="text-lg font-bold mt-4">Download from Instagram</h3>
          <p className="text-gray-600">Save your favorite Instagram videos with one click.</p>
        </div>

        <div className="flex flex-col items-center">
          <i className="pi pi-youtube text-4xl text-red-600"></i>
          <h3 className="text-lg font-bold mt-4">Download from YouTube</h3>
          <p className="text-gray-600">Easily grab YouTube videos for offline viewing.</p>
        </div>

        <div className="flex flex-col items-center">
          <i className="pi pi-clock text-4xl text-blue-500"></i>
          <h3 className="text-lg font-bold mt-4">Fast Downloads</h3>
          <p className="text-gray-600">Experience fast and reliable downloading services.</p>
        </div>

        <div className="flex flex-col items-center">
          <i className="pi pi-mobile text-4xl text-green-500"></i>
          <h3 className="text-lg font-bold mt-4">Mobile Friendly</h3>
          <p className="text-gray-600">Fully optimized for mobile and tablet devices.</p>
        </div>
      </div>
    </section> */}

    {/* Footer */}
    {/* <footer className="mt-16 text-center">
      <p className="text-gray-500">&copy; 2024 Instatube Downloader. All rights reserved.</p>
    </footer> */}
  </div>
  );
};

export default About
