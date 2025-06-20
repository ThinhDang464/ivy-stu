import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("work");
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="w-full px-8 py-5 flex items-start">
        {/* Left side - Name and Navigation */}
        <div className="flex flex-col space-y-10">
          <h1 className="text-2xl font-semibold text-black">Ivy Tran</h1>
          <nav className="flex flex-col space-y-1">
            <a
              onClick={() => setActiveSection("work")}
              href="#work"
              className={`${
                activeSection === "work" ? "text-black" : "text-gray-400"
              } font-[550] leading-none text-xl`}
            >
              Work Featured
            </a>
            <a
              onClick={() => setActiveSection("archives")}
              href="#archives"
              className={`${
                activeSection === "archives" ? "text-black" : "text-gray-300"
              } font-[550] leading-none text-xl`}
            >
              Archives
            </a>
          </nav>
        </div>

        {/* Middle column - Description */}
        <div className="flex flex-col space-y-4 max-w-md ml-35">
          <p className="text-gray-300 text-xl leading-[1.27] font-semibold">
            HCM City based
            <br />
            Graphic Designer,
            <br />
            specializing in branding,
            <br />
            print and digital design for
            <br />
            brands and individuals.
          </p>
          <p className="text-gray-300 text-xl font-semibold leading-[1.27]">
            Combining taste and
            <br />
            strategic thinking to solve
            <br />
            business problems and
            <br />
            help create meaningful
            <br />
            engagements with
            <br />
            their audiences.
          </p>
        </div>

        {/* Right side - Contact Info */}
        <div className="flex flex-col items-end ml-auto">
          <a
            href="mailto:ivy.tran3006@gmail.com"
            className="text-black text-xl font-semibold"
          >
            ivy.tran3006@gmail.com
          </a>
          <a
            href="tel:+84707126802"
            className="text-black text-xl font-semibold leading-[1.2]"
          >
            (+84) 707 126 802
          </a>
        </div>
      </header>

      {/* Gallery Section - Now positioned at bottom via flex */}
      <section className="px-4 pb-8">
        <div className="grid grid-cols-4 -space-x-4 items-end">
          <div className="flex flex-col items-center">
            <img
              src="/project1.png"
              alt="Nookscape Interior Studio"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="/project2.png"
              alt="Love Now Never Later"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="/project3.png"
              alt="Love Now Never Later"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img
              src="/project4.png"
              alt="Melodicity Music App"
              className="w-full h-auto object-cover cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
