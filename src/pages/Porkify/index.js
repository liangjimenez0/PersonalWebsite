import "./indexPorkify.css";
import "animate.css";
import logoPorkifyLarge from "../../images/porkify-large.png";
// import climate1 from "./images/ars-group-picture.webp";
// import climate2 from "./images/ars-group-working.webp";
// import climate3 from "./images/ars-present.webp";
// import climate4 from "./images/ars-climate.webp";
// import climate5 from "./images/ars-climate-2.webp";
// import climate6 from "./images/Photo 6691.jpeg";
// import climate7 from "./images/Photo 6616.jpeg";
// import climate8 from "./images/Photo 4785.jpeg";
// import climate9 from "./images/IMG_4784_Original.jpg";
// import climate10 from "./images/Original Photo 6354.jpg";
// import climateVideo from "./videos/video-clip.mp4";
// import climateVideoVertical from "./videos/video-vertical.mp4";
import { IoIosSearch } from "react-icons/io";

export function Porkify() {
  return (
    <div className="project-page animate__animated animate__fadeIn">
      <div className="project-page-content">
        <div className="header-image-porkify">
          <img src={logoPorkifyLarge}></img>
        </div>
        <div className="header-description flex flex-row">
          <div className="flex flex-col header-left-hand">
            <h1 className="header-description-title">Porkify</h1>
            <p className="header-description-subtitle text-gray-500">
              Collaborated with a team of 5 peers in crafting a full-stack
              website inspired by Letterboxd, reimagined for music enthusiasts
            </p>
            <div className="header-full-description flex flex-row">
              <div className="header-full-description-left basis-1/2">
                <p>
                  As the culmination of our CS5610 Web Development course, we
                  were tasked with deploying individually crafted websites,
                  adhering to specific requirements and applying the acquired
                  knowledge.
                </p>

                <p>
                  Driven by our shared passions for music and film, my team
                  developed a dynamic full-stack platform inspired by the
                  popular film rating application, Letterboxd. Introducing
                  "Porkify" – a unique twist on the concept, where users can
                  create accounts, rate their favorite music selections, and
                  explore others' ratings and comments . With a focus on the
                  user experience, Porkify has a fully responsive design,
                  ensuring accessibility across various devices, and gives users
                  access to a vast library of music choices and their statistics
                  through the Spotify API.
                </p>
              </div>
              <div className="basis-1/2">
                <p>
                  My involvement in this project focuses heavily on the{" "}
                  front-end development, where I helped to design and code the
                  appearance of our website . This project showcases our
                  proficiency in web development, merging technical skills with
                  creative vision to deliver a compelling user experience.
                </p>
                <p>
                  View the website{" "}
                  <a
                    href="https://dapper-biscuit-01c4f7.netlify.app/"
                    target="_blank"
                    className="underline"
                  >
                    here
                  </a>{" "}
                  (delete token and refresh for full experience).
                </p>
                <p>
                  Access the front end code{" "}
                  <a
                    href="https://github.com/liangjimenez0/PorkifyReactWebApp"
                    target="_blank"
                    className="underline"
                  >
                    here
                  </a>
                  .<br></br>
                  Access the back end code{" "}
                  <a
                    href="https://github.com/liangjimenez0/PorkifyNodeServerApp"
                    target="_blank"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </p>

                <p></p>
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
              <p className="text-gray-500 right-hand-bullet">December 2023</p>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Team</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Aarohi Nadkarni</p>
                <p>Steve Magliocchino</p>
                <p>Max Leroux</p>
                <p>Nikhil Goel</p>
              </div>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Tools</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>React.js</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
                <p>MongoDB</p>
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
        {/* <div className="project-page-gallery">
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
            <img src={climate9}></img>
            <video
              src={climateVideoVertical}
              autoPlay="true"
              muted="true"
              loop="true"
              height=""
            ></video>
            <img src={climate4} className="col-span-2"></img>
          </div>
        </div> */}
      </div>
    </div>
  );
}
