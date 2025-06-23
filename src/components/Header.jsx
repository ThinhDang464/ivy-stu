import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ArchiveCarousel from "./ArchiveCarousel";
import { useSearchParams } from "react-router-dom";
const Header = () => {
  // 2. Replace useState with useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();

  // This function will now update the URL instead of local state, in url something like: /?section=archives
  const handleSectionChange = (sectionName) => {
    setSearchParams({ section: sectionName }); //passing obj as arg
  };

  // 3. Read the active section from the URL, defaulting to 'work'
  const activeSection = searchParams.get("section") || "work";

  return (
    <div className="h-screen flex flex-col justify-between">
      <header className="w-full px-8 pt-2 flex items-start">
        {/* Left side - Name and Navigation */}
        <div className="flex flex-col space-y-12">
          <h1 className="text-2xl font-semibold text-black">Ivy Tran</h1>
          <nav className="flex flex-col space-y-1">
            <p
              onClick={() => handleSectionChange("work")}
              className={`${
                activeSection === "work" ? "text-black" : "text-[#BEBEBE]"
              } font-semibold leading-none text-lg cursor-pointer`}
            >
              Work Featured
            </p>
            <p
              onClick={() => handleSectionChange("archives")}
              className={`${
                activeSection === "archives" ? "text-black" : "text-[#BEBEBE]"
              } font-semibold leading-none text-lg cursor-pointer`}
            >
              Archives
            </p>
          </nav>
        </div>

        {/* Middle column - Description */}
        <div className="flex flex-col space-y-4 max-w-md ml-35 mt-2">
          {activeSection === "work" ? (
            <>
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
            </>
          ) : (
            <p className="text-[#BEBEBE] text-lg leading-[1.27] font-semibold">
              My collection of other
              <br />
              designs, explorations,
              <br />
              rejected versions
              <br />
              or anything that I coudn't
              <br />
              find a place to show...
            </p>
          )}
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

      <div className="relative">
        {/* Gallery Section */}
        {activeSection === "work" ? (
          <section className="px-4 w-full">
            <ImageCarousel />
            <p className="absolute top-[calc(100%-1.3rem)] left-8 text-[0.68rem] text-[#BEBEBE] font-medium">
              Scroll to view more
            </p>
          </section>
        ) : (
          <section className="px-4 w-full">
            <ArchiveCarousel />
            <p className="absolute top-[calc(100%-1.3rem)] left-8 text-[0.68rem] text-[#BEBEBE] font-medium">
              Scroll to view more
            </p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Header;
