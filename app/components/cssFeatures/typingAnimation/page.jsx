"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWriter = ({ animatedText }) => {
  const typeRef = useRef();

  useEffect(() => {
    const options = {
      strings: animatedText,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typeRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [animatedText]);
  return (
    <div>
      I am a <span ref={typeRef} className="text-cyan-400" />
    </div>
  );
};

export default TypeWriter;
