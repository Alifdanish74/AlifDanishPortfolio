"use client";

import dynamic from "next/dynamic";
import { memo } from "react";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const AnimationLottie = memo(({ animationData, width }) => {
  return (
    <Lottie
      loop
      play
      animationData={animationData}
      style={{ width: width || "100%", height: "auto" }}
    />
  );
});

export default AnimationLottie;
