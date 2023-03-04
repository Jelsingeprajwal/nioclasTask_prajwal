import React from "react";

function Header() {
  return (
    <section className="">
      <header className="mx-auto w-full h-20 flex justify-center items-center max-w-[1280px]">
        <div className="flex justify-end items-center w-full mx-8">
          <h1 className="text-lg md:text-2xl grow font-semibold font-workSans">
            MLesson
          </h1>
          <div className="flex justify-between items-center md:grow">
            <nav className="list-none justify-between hidden md:flex w-[400px] items-center text-azalea  ">
              <li className="hover:text-white cursor-pointer">
                Learn From Experts
              </li>
              <li className="hover:text-white cursor-pointer">Prices</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </nav>
            <button type="button" className="primary">
              Get Started
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
