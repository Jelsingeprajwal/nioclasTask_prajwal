import React from "react";
import Header from "./Header";
import Illustration from "../assets/bg_image.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div>
      <Header />
      <section>
        <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row mt-8  justify-around  w-full h-full items-center">
          <div className="mt-6 md:mt-0">
            <h3 className="text-azalea font-workSans text-sm">
              Superior Academic achievement & Mastery
            </h3>
            <h1 className="md:text-[48px] text-[32px] w-full font-bold font-fontRoboto ">
              An Education
              <br />
              Product Like
              <br />
              No Other
            </h1>
            <div className="mt-8">
              <Link to={"/exam"} className="primary">
                Start Demo test
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-fit">
            <img src={Illustration} alt="Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
