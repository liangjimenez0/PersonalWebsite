import "./index.css";
import "animate.css";
import logoClimateLarge from "../../images/climate-clock-large.webp";
import climate1 from "./images/ars-group-picture.webp";
import climate2 from "./images/ars-group-working.webp";
import climate3 from "./images/ars-present.webp";
import climate4 from "./images/ars-climate.webp";
import climate5 from "./images/ars-climate-2.webp";
import climate6 from "./images/Photo 6691.jpeg";
import climate7 from "./images/Photo 6616.jpeg";
import climate8 from "./images/Photo 4785.jpeg";
import climate9 from "./images/IMG_4784_Original.jpg";
import climate10 from "./images/Original Photo 6354.jpg";
import climateVideo from "./videos/video-clip.mp4";
import climateVideoVertical from "./videos/video-vertical.mp4";
import climateVideoCode from "./videos/video-code.mp4";
import { IoIosSearch } from "react-icons/io";

export function ClimateCountdown() {
  return (
    <div className="project-page animate__animated animate__fadeIn">
      <div className="project-page-content">
        <div className="header-image">
          <img src={logoClimateLarge}></img>
        </div>
        <div className="header-description flex flex-row">
          <div className="flex flex-col header-left-hand">
            <h1 className="header-description-title">
              <span className="italic">Climate Countdown</span> at Ars
              Electronica
            </h1>
            <p className="header-description-subtitle text-gray-500">
              Designed and programmed a 5-minute LED light show inspired by our
              rapidly changing climate, projected on Ars Electronica
            </p>
            <div className="header-full-description flex flex-row">
              <div className="header-full-description-left basis-1/2">
                <p>
                  <a
                    target="_blank"
                    href="https://goglobal.northeastern.edu/_portal/tds-program-brochure?programid=10458"
                    className="underline"
                  >
                    Dialogue of Civilization: Textiles and Creative Coding
                  </a>
                  , a 4-week program by Northeastern Faculty,{" "}
                  <a
                    className="underline"
                    href="https://camd.northeastern.edu/people/kate-terrado/"
                    target="_blank"
                  >
                    Kate Terrado
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline"
                    href="https://www.karabraciale.com/"
                    target="_blank"
                  >
                    Kara Braciale,
                  </a>{" "}
                  <span className="font-bold">
                    blends coursework, global travel, and cultural immersion.
                  </span>{" "}
                  In the Creative Coding course, students dive into Processing,
                  crafting projects in computational textiles, algorithmic art,
                  and interactive media.
                </p>
                <p>
                  Culminating at{" "}
                  <a
                    href="https://ars.electronica.art/futurelab/en/"
                    target="_blank"
                    className="underline"
                  >
                    Ars Electronica's FutureLab
                  </a>{" "}
                  in Linz, Austria, my team of three{" "}
                  <span className="font-bold">
                    conceptualized and developed a 5-minute LED light show
                  </span>
                  . I worked closely with the researchers at FutureLab to
                  understand the the intricacies of programming for the facade.
                </p>
              </div>
              <div className="basis-1/2">
                <p>
                  Our creation, "Climate Countdown," serves as a visual
                  narrative inspired by the urgency of climate change. Through a{" "}
                  <span className="font-bold">
                    dynamic audiovisual experience showcasing extreme weather
                    events
                  </span>
                  , we visually speed up the process of climate change,
                  demonstrating its irrevsible effects. Our work is meant to{" "}
                  <span className="font-bold">
                    amplify the message of the{" "}
                    <a
                      href="https://climateclock.world/"
                      target="_blank"
                      className="underline"
                    >
                      Climate Clock Project
                    </a>
                  </span>{" "}
                  by activists Gan Golan, Andrew Boyd, artist Katie Payton
                  Hofstadter, and Adrian Carpenter.
                </p>
                <p>
                  Read about the entire process{" "}
                  <a
                    href="https://ars.electronica.art/futurelab/en/projects-northeastern-university-2023/"
                    target="_blank"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </p>
                <p>
                  Access the code{" "}
                  <a
                    href="https://github.com/liangjimenez0/ClimateCountdown"
                    target="_blank"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col header-right-hand">
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Role</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Designer & Programmer</p>
              </div>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Timeline</h1>
              <p className="text-gray-500 right-hand-bullet">July 2023</p>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Team</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Alexa VanSuch</p>
                <p>Reed Reed</p>
              </div>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Tools</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Java</p>
                <p>Processing</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="project-page-learned flex flex-row">
          <div className="what-did-i-learn flex flex-row">
            <span className="search-icon">
              <IoIosSearch />
            </span>
            What did I learn?
          </div>
          <div className="flex flex-col learned-paragraphs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
        <div className="project-page-gallery">
          <div className="preview-button">Preview</div>
          <div className="gallery grid gap-8 grid-cols-2">
            <img src={climate2} className="col-span-2"></img>
            <img src={climate7}></img>
            <img src={climate10}></img>
            <video
              src={climateVideo}
              autoPlay="true"
              className="col-span-2"
              muted="true"
              loop="true"
            ></video>
            <img src={climate3} className="col-span-2"></img>
            {/* <img src={climate8}></img> */}
            <img src={climate9}></img>
            <video
              src={climateVideoVertical}
              autoPlay="true"
              muted="true"
              loop="true"
              height=""
            ></video>
            <img src={climate4} className="col-span-2"></img>
            <video
              src={climateVideoCode}
              autoPlay="true"
              muted="true"
              loop="true"
              height=""
              className="col-span-2"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
