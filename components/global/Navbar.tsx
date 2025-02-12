import Link from "next/link";
import React, { useState } from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  let audio;

  const toggleMusic = () => {
    if (!audio) {
      audio = new Audio("/romantic-music.mp3");
    }
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/charlie.jpg"
              width="60"
            />
            {"Charlie".split("" ).map((letter, index) => {
              return (
                <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <span className="ml-4 text-white text-2xl cursor-pointer" onClick={toggleMusic}>
      🎵 Music 🎵
      </span>
    </nav>
  );
}

export default Navbar;
