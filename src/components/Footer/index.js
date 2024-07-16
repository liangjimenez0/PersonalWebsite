import "./index.css";
import React, { useState, useEffect } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdCode } from "react-icons/io";

export function Footer() {
  return (
    <div className="footer flex bg-grey-800 flex-row">
      <div className=" flex flex-col-reverse footer-links left-hand-footer w-2/4">
        <a
          href="https://www.linkedin.com/in/liang-jimenez"
          target="_blank"
          className="flex flex-row"
        >
          LinkedIn{" "}
          <span>
            <IoMdArrowRoundForward />
          </span>
        </a>
        <a
          href="https://drive.google.com/file/d/1AYo6-EesfegsWWVTDbm_J03rMuxszKcP/view?usp=sharing"
          target="_blank"
          className="flex flex-row"
        >
          Resume{" "}
          <span>
            <IoMdArrowRoundForward />
          </span>
        </a>
        <a href="mailto:jimenez.lia@northeastern.edu" className="flex flex-row">
          jimenez.lia@northeastern.edu{" "}
          <span>
            <IoMdArrowRoundForward />{" "}
          </span>
        </a>
      </div>

      <div className=" made-by flex flex-col">
        <p className="flex flex-row justify-end">
          Made with{" "}
          <a
            href="https://github.com/liangjimenez0/personal-website"
            target="_blank"
          >
            <IoMdCode />
          </a>{" "}
          by me
        </p>{" "}
        <p className="flex justify-end last-updated">Last updated 7.2024</p>
      </div>
    </div>
  );
}
