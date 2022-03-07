import React from 'react';
import './App.css';
import BannerVideo from './assets/videos/banner-motion-bg.mp4';

export const App = () => (
  <main>
    <section className="relative h-screen">
      <div className="block absolute inset-y-0 h-full w-full">
        <div className="opacity-80 bg-black min-w-full min-h-full absolute top-0 left-0"></div>
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={BannerVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="relative flex flex-1 flex-col h-full">
        <main className="flex items-center h-full px-4">
          <div className="container mx-auto text-center flex-1">
            <h2 className="text-base font-semibold tracking-wider text-blue-300 uppercase">Hey there 👋</h2>
            <h1 className="mt-2 text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-tight md:text-5xl lg:mx-24">
              I'm David. It's nice to meet you.
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-medium text-gray-300 sm:text-lg md:mt-8 md:text-xl lg:max-w-3/4">
              degen, defi, inventor, blockchain engineer
            </p>
          </div>
        </main>
      </div>
    </section>
  </main>
);
