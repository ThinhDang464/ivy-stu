import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ArchiveCarousel from "./ArchiveCarousel";
const Header = () => {
  const [activeSection, setActiveSection] = useState("work");
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="w-full px-8 py-5 flex items-start">
        {/* Left side - Name and Navigation */}
        <div className="flex flex-col space-y-12">
          <h1 className="text-2xl font-semibold text-black">Ivy Tran</h1>
          <nav className="flex flex-col space-y-1">
            <p
              onClick={() => setActiveSection("work")}
              className={`${
                activeSection === "work" ? "text-black" : "text-[#BEBEBE]"
              } font-semibold leading-none text-lg cursor-pointer`}
            >
              Work Featured
            </p>
            <p
              onClick={() => setActiveSection("archives")}
              className={`${
                activeSection === "archives" ? "text-black" : "text-[#BEBEBE]"
              } font-semibold leading-none text-lg cursor-pointer`}
            >
              Archives
            </p>
          </nav>
        </div>

        {/* Middle column - Description */}
        <div className="flex flex-col space-y-4 max-w-md ml-35 mt-1">
          <p className="text-[#BEBEBE] text-lg leading-[1.27] font-semibold">
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
          <p className="text-[#BEBEBE] text-lg font-semibold leading-[1.27]">
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
            className="text-black text-lg font-semibold"
          >
            ivy.tran3006@gmail.com
          </a>
          <a
            href="tel:+84707126802"
            className="text-black text-lg font-semibold leading-[1.2]"
          >
            (+84) 707 126 802
          </a>
        </div>
      </header>

      {/* Gallery Section */}
      {activeSection === "work" ? (
        <section className="px-4 pb-8 w-full">
          <ImageCarousel />
        </section>
      ) : (
        <section className="px-4 pb-8 w-full">
          <div className="pl-10">
            <ArchiveCarousel />
          </div>
        </section>
      )}
    </div>
  );
};

export default Header;
