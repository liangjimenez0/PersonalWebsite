import "./index.css";
import "animate.css";
import logoFortuneLarge from "../../images/fortune-large-figma.png";
import { IoIosSearch } from "react-icons/io";

export function Fortune() {
  return (
    <div className="project-page animate__animated animate__fadeIn">
      <div className="project-page-content">
        <div className="header-image">
          <img src={logoFortuneLarge}></img>
        </div>
        <div className="header-description flex flex-row">
          <div className="flex flex-col header-left-hand">
            <h1 className="header-description-title">
              <span className="italic">Navigation Redesign</span> at Fortune
            </h1>
            <p className="header-description-subtitle text-gray-500">
              Developed and proposed revamped navigation design ideas for
              Fortune.com and Fortune.com/Recommends to enhance user experience,
              SEO, and click-through rates
            </p>
            <div className="header-full-description flex flex-row">
              <div className="header-full-description-left basis-1/2">
                <p>
                  <a
                    className="underline font-bold"
                    href="https://www.fortune.com"
                    target="_blank"
                  >
                    Fortune
                  </a>{" "}
                  <span className="font-bold">
                    is a global media company with a mission "to change the
                    world by making business better."{" "}
                  </span>
                  Just five years ago, Fortune launched Fortune.com and with
                  that, expanded their business to the digital world. For six
                  months, I worked alongside the Product team, learning the ins
                  and outs agile development processes and gaining hands-on
                  experience in the world of product.
                </p>

                <p>
                  Many users didn't use the hamburger menu, and because of this,
                  improving{" "}
                  <span className="font-bold">
                    discoverability of the navigation
                  </span>{" "}
                  on Fortune.com and Fortune.com/Recommends was a top priority
                  in the company's Q1 roadmap.
                </p>
              </div>
              <div className="basis-1/2">
                <p>
                  As the lead designer and researcher, I worked closely with UX
                  and SEO on a narrative-building UX research project aiming to
                  uncover the subtle reasons behind low navigation click-through
                  rates and to develop strategies to{" "}
                  <span className="font-bold">
                    increase user retention on our site.
                  </span>{" "}
                  I proposed these findings to stakeholders and senior
                  designers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col header-right-hand">
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Role</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Lead Designer and Researcher</p>
              </div>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Timeline</h1>
              <p className="text-gray-500 right-hand-bullet">Jan - June 2024</p>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Team</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Alexia Delest</p>
                <p>Allegra Glatzer</p>
                <p>Melissa Gerson</p>
              </div>
            </div>
            <div className="flex flex-col bullet">
              <h1 className="right-hand-title">Tools</h1>
              <div className="flex flex-col text-gray-500 right-hand-bullet">
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fortune-problem">
          <div className="problem-button">Problem</div>
          <div className="problem-description flex flex-row">
            <p>
              Everyday, over a million people visit Fortune.com to discover the
              latest news in business. The digital experience is essential in
              adding to the reading journey, to ensure that users keep coming
              back for more engaging and reliable content. Our current
              navigation is confusing to use, inconsistent, and is not fully
              representative of all of Fortune's features.
            </p>
            <video></video>
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
