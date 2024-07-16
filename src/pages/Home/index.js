import "./index.css";
import React from "react";
import { useState, useEffect } from "react";
import "animate.css";
import logoFortune from "../../images/logo-fortune.png";
import logoFortuneLarge from "../../images/fortune-large-figma.png";
import logoFortuneMockUp from "../../images/fortune-large.png";
import logoFortuneRecommends from "../../images/fortune-recommends-large.png";
import logoClimate from "../../images/climate-clock-logo.png";
import logoClimateLarge from "../../images/climate-clock-large.webp";
import logoPorkify from "../../images/porkify-logo.png";
import logoPorkifyLarge from "../../images/porkify-large.png";
import { WorkItem } from "../../components/Work Item";

function ScrollIndicator() {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHideScrollIndicator(true);
      } else {
        setHideScrollIndicator(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="icon-scroll"
      style={{
        opacity: hideScrollIndicator ? 0 : 1,
        pointerEvents: hideScrollIndicator ? "none" : "auto",
      }}
    ></div>
  );
}

export default ScrollIndicator;

export function Home() {
  return (
    <div>
      <div className="home-items flex-col animate__animated animate__fadeIn">
        <div className="title">
          <h1>Liang Jimenez</h1>
        </div>
        <div className="introduction">
          <div>
            <p>
              is a full stack UX designer interested in creating digital
              experiences with beauty, precision, and intelligence
            </p>
          </div>
          <div className="flex-col text-grey flex currently">
            <div className="flex flex-row">
              <p className="currently-title">Currently</p>
              <p className="currently-body">
                Undergraduate Student at Northeastern University studying
                Computer Science and Cognition
              </p>
            </div>

            <div className="flex flex-row">
              <p className="currently-title">Previously</p>
              <p className="currently-body">
                Product Management and UX Intern at Fortune Media
              </p>
            </div>

            <div className="flex flex-row">
              <p className="currently-title ">Looking for</p>
              <p className="currently-body">Internship from Jan - June 2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <ScrollIndicator></ScrollIndicator>
      </div>

      <div className="project-list">
        <WorkItem
          company="Fortune Media"
          logo={logoFortune}
          title="Navigation Redesign"
          description="Redesigned the website's navigation bar and hamburger menu in collaboration with UX and SEO teams, based on internal user testing and competitive analysis"
          bullets="Internship • Product Management • UX Design"
          image={logoFortuneLarge}
          image2={logoFortuneMockUp}
          image3={logoFortuneRecommends}
          link="/fortune"
        ></WorkItem>
        <WorkItem
          company="Ars Electronica"
          logo={logoClimate}
          title="Climate Countdown"
          description=" Designed and programmed a 5-minute LED light show inspired
          by our rapidly changing climate, projected on Ars
          Electronica"
          bullets="Overview • Creative Coding • Lighting"
          image={logoClimateLarge}
          link="/climate-countdown"
        ></WorkItem>
        <WorkItem
          company="CS 4500: Website Development"
          logo={logoPorkify}
          title="Porkify"
          description="Collaborated with a team of 5 peers in crafting a full-stack
          website inspired by Letterboxd, reimagined for music
          enthusiasts"
          bullets="Overview • Full Stack Website • School Project"
          image={logoPorkifyLarge}
          link="/porkify"
        ></WorkItem>
      </div>
    </div>
  );
}
