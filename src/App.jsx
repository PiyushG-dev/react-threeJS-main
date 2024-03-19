import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const timeline = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.5 });

  useGSAP(() => {
    timeline.to("#box", {
      x: 500,
      borderRadius: "100%",
      ease: "back.inOut",
      duration: 2,
    });

    timeline.to("#box", {
      x: 1000,
      borderRadius: 0,
      ease: "back.inOut",
      duration: 2,
    });
  }, []);

  return (
    <div className="h-screen bg-black text-white">
      <div id="box" className="h-[200px] w-[200px] bg-slate-400"></div>
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
        className="px-6 py-2 mt-10 ml-10 rounded-md bg-white text-black"
      >
        play/pause
      </button>
    </div>
  );
};

export default App;
