import React from "react";
import { personalInfo, navigationPaths, publicUrls } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary py-6 border-t border-[#9da2c0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-[#807070] text-[15px]">
          {/*<p>© {new Date().getFullYear()} {personalInfo.name}.</p>*/}
          <p className="font-medium">Developed + Designed by {personalInfo.name}.</p>
          <p className="text-[10px]"> COPYRIGHT © {personalInfo.name} {new Date().getFullYear()}. </p>

        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
          <p className="text-[#807070] font-medium text-[15px]">Reach out on</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mohammed-tawfik-09241712a/"
            className="text-[#807070] hover:text-white text-[15px] "
          >
            Linkedin
          </a>
          <a
            target="_blank"
            href="https://github.com/Mohtawfik"
            className="text-[#807070] hover:text-white text-[15px] "
          >
            Github
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/u/iamtawfy/"
            className="text-[#807070] hover:text-white text-[15px] "
          >
            Leetcode
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
