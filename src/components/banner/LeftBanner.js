import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer.", "Full Stack Developer.", "Competitive Programmer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Fraol MG</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor= 'designColor'
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I create bold, engaging web experiences that feel natural and 
        effortless. Every detail is designed to spark excitement and 
        make interactions unforgettable.
        </p>
      </div>
     <Media />
    </div>
  );
}

export default LeftBanner