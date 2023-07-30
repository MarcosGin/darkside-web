import Lottie from "lottie-react";
import darthVaderAnimation from "@/lottie/darth_vader.json";

export default function Home() {
  return (
    <>
      <div className="mt-40 flex flex-col items-center text-center">
        <div className="w-40">
          <Lottie animationData={darthVaderAnimation} loop={true} />
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Darkside
        </h1>
        <p className="leading-7">
          In this site you will find information about the world of Star Wars
        </p>
      </div>
    </>
  );
}
