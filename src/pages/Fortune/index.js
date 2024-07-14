import "./index.css";
import "animate.css";
import logoFortuneLarge from "../../images/fortune-large-figma.png";
import { IoIosSearch } from "react-icons/io";
import siteMap from "./images/Fortune Site Navigation (1).png";
import currentNavigation from "./images/current-navigation.png";
import competitiveAnalysis from "./images/competitive-analysis.png";
import competitiveAudit from "./images/competitive-audit.png";
import { FaArrowRight } from "react-icons/fa";
import newsBefore from "./images/news-before.png";
import newsAfter from "./images/news-after.png";
import techBefore from "./images/tech-before.png";
import techAfter from "./images/tech-after.png";
import financeBefore from "./images/finance-before.png";
import financeAfter from "./images/finance-after.png";
import leadershipBefore from "./images/leadership-before.png";
import leadershipAfter from "./images/leadership-after.png";
import wellBefore from "./images/well-before.png";
import wellAfter from "./images/well-after.png";
import recommendsBefore from "./images/recommends-before.png";
import recommendsAfter from "./images/recommends-after.png";
import fortuneBefore from "./images/500-before.png";
import fortuneAfter from "./images/500-after.png";
import directComp from "./images/direct-comp-analysis.png";
import indirectComp from "./images/indirect-comp-analysis.png";

export function Fortune() {
  return (
    <div className="project-page animate__animated animate__fadeIn">
      <div></div>
      <div className="project-page-content-fortune">
        <div className="fortune-header">
          <div className="header-image">
            <img src={logoFortuneLarge}></img>
          </div>
          <div className="header-description flex flex-row">
            <div className="flex flex-col header-left-hand">
              <h1 className="header-description-title">
                <span className="italic">Navigation Redesign</span> at Fortune
              </h1>
              <p className="header-description-subtitle text-gray-500">
                Redesigned the website's navigation bar and hamburger menu in
                collaboration with UX and SEO teams, based on internal user
                testing and competitive analysis
              </p>
              <div className="header-full-description flex flex-row">
                <div className="header-full-description-left basis-1/2">
                  <p>
                    <a
                      className="underline"
                      href="https://www.fortune.com"
                      target="_blank"
                    >
                      Fortune
                    </a>{" "}
                    is a global media company with a mission "to change the
                    world by making business better." Just five years ago,
                    Fortune launched Fortune.com and with that, expanded their
                    business to the digital world. For six months, I worked
                    alongside the Product team, learning the ins and outs agile
                    development processes and gaining hands-on experience in the
                    world of product.
                  </p>
                </div>
                <div className="basis-1/2">
                  <p>
                    As the lead designer and researcher, I worked closely with
                    UX and SEO on a narrative-building UX research project
                    aiming to uncover the subtle reasons behind low navigation
                    click-through rates and to develop strategies to increase
                    user retention on our site. I proposed these findings to
                    stakeholders and senior designers.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col header-right-hand">
              <div className="flex flex-col bullet">
                <h1 className="right-hand-title">Role</h1>
                <div className="flex flex-col text-gray-500 right-hand-bullet">
                  <p>Product Manager and UX Design Intern</p>
                </div>
              </div>
              <div className="flex flex-col bullet">
                <h1 className="right-hand-title">Timeline</h1>
                <p className="text-gray-500 right-hand-bullet">
                  Jan - June 2024
                </p>
              </div>
              <div className="flex flex-col bullet">
                <h1 className="right-hand-title">Tools</h1>
                <div className="flex flex-col text-gray-500 right-hand-bullet">
                  <p>Figma</p>
                  <p>Jira</p>
                  <p>Adobe Suite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-page-body">
          <div
            className="flex justify-between section-header bg-gray-200"
            data-aos="fade-up"
          >
            <p>01</p>
            <p>MOTIVATION</p>
          </div>
          <div className="padding-10">
            <div className="fortune-problem" data-aos="fade-up">
              <></>
              <p className="italic problem-title">The problem</p>
              <div className="problem-description">
                <p className="text-lg font-medium">
                  Our current navigation is confusing to use, inconsistent, and
                  is not fully representative of all of Fortune's features.
                </p>
                <p className="font-09">
                  Everyday, over a million people visit Fortune.com to discover
                  the latest news in business. The digital experience is
                  essential in adding to the reading journey to ensure that
                  users keep coming back for more engaging and reliable content.
                  Despite adding a hamburger menu, users rarely use it and are
                  having trouble discovering features within Fortune.com and
                  Fortune.com/Recommends.
                </p>
                <img className=" mt-5 mb-10" src={currentNavigation}></img>
                <p className="italic problem-title">Digging deeper...</p>
                <p className="text-lg font-medium">Navigation Pain Points</p>
                <p className="font-09">
                  To better understand what people at Fortune wanted to change,
                  I reviewed existing study decks detailing specific navigation
                  pain points identified by various teams at Fortune:
                </p>
                <div className="line mt-4 mb-5"></div>
                <div className="flex gap-10">
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">📰</span> Editorial
                    </p>
                    <li className="font-09">
                      The new "topic-based navigation" reflects a shift from
                      product-based navigation to a focus on topics or subject
                      areas, aligning with the newsroom's transition towards
                      theme-based content organization
                    </li>
                    <li className="font-09">
                      Despite the emphasis on topics, there is a need to retain
                      video in the top navigation, as it remains an important
                      but not easily accessible
                    </li>
                  </div>
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">📹</span> Video Team
                    </p>
                    <li className="font-09">
                      Add specific topics to the top navigation; include video
                      for visibility. "News" is too broad.
                    </li>
                    <li className="font-09">
                      Podcasts don't need to be on the homepage navigation. The
                      navigation should list all options clearly to avoid the
                      confusion seen in the Business Insider experience.
                    </li>
                  </div>
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">📊</span> Business Consumer
                      Team
                    </p>
                    <li className="font-09">
                      Reorganize the homepage layout for improved space and
                      navigation
                    </li>
                    <li className="font-09">
                      Enhance user engagement and support by testing the
                      positioning of other business verticals, such as Fortune
                      Live Media and the Leadership Next podcast
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="fortune-problem pt-8 mt-8">
              <p className="italic problem-title">
                So with this information, I determined the goal:
              </p>
              <div className="problem-description">
                <p className="text-lg font-medium">
                  Optimize our website's navigation to provide a seamless and
                  efficient user experience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between section-header bg-gray-200"
            data-aos="fade-up"
          >
            <p>02</p>
            <p>UNDERSTAND</p>
          </div>
          <div className="padding-10">
            <div className="fortune-problem" data-aos="fade-up">
              <p className="italic problem-title">
                Reviewing Fortune's Current Navigation
              </p>
              <div className="problem-description">
                <p className="text-lg font-medium">Site Mapping</p>
                <p className="font-09">
                  To understand the current landscape, I began by creating a
                  detailed site map. This initial step allowed me to visualize
                  the current layout and pinpoint areas in need of improvement,
                  forming a solid foundation for the website's navigation
                  redesign.
                </p>
              </div>
              <img className="site-map" src={siteMap}></img>
            </div>
            <div className="fortune-problem" data-aos="fade-up">
              <p className="italic problem-title">How do navigations vary?</p>
              <div className="problem-description">
                <p className="text-lg font-medium">
                  Direct Competitive Analysis
                </p>
                <p className="font-09">
                  Next, I sought to better understand the mechanics of existing
                  navigations systems through a competitive audit of 5 media
                  companies. Each website serves a unique perspective on news,
                  which means unique approaches to how they imagine navigation
                  on their website. I conducted a competitive audit of
                  navigation systems for 5 different companies, analyzing how
                  each system performs contextually within the website
                  Unfortunately, the full competitive analysis deck is under
                  NDA.
                </p>
                <img className="rounded-2xl mt-5 mb-10" src={directComp}></img>
              </div>
            </div>
            <div className="fortune-problem" data-aos="fade-up">
              <div className="problem-description">
                <p className="text-lg font-medium">
                  Indirect Competitive Analysis
                </p>
                <p className="font-09">
                  And while direct competitors are the priority, I found it
                  intriguing to examine the navigation of various startups to
                  see where website design is heading. These navigation bars
                  used out-of-the-box ideas that still proved to be extremely
                  functional.
                </p>
                <img className="rounded-2xl mt-5" src={indirectComp}></img>
              </div>
            </div>
            {/* <div className="fortune-problem mt-8" data-aos="fade-up">
              <div className="problem-description">
                <p className="text-lg font-medium">Competitive Audit</p>
                <p className="font-09">
                  I then conducted a competitive audit of navigation systems for
                  10 different companies, analyzing how each system performs
                  contextually within the website. Unfortunately, the full
                  competitive analysis deck is under NDA.
                </p>
                <img className="rounded-2xl mt-5" src={competitiveAudit}></img>
              </div>
            </div> */}
            <div className="fortune-problem mt-8" data-aos="fade-up">
              <p className="italic problem-title">Research concluded that,</p>
              <div className="flex">
                <div className="right-hand-conclusion problem-description flex flex-col basis-11/12">
                  <p className="text-lg font-medium">
                    Fortune's presentation of information lacks clear highlights
                    and can overwhelm new users, potentially leading to decision
                    fatigue
                  </p>
                  <p className="font-09">
                    Extensive scrolling is required to explore the full menu,
                    impacting the user experience negatively.
                  </p>
                </div>
                <div className="text-4xl flex mt-12 ml-12 mr-14 justify-center">
                  <FaArrowRight />
                </div>
                <div className="right-hand-conclusion problem-description flex flex-col basis-11/12">
                  <p className="text-lg font-medium">
                    By leveraging insights from this analysis, we can enhance
                    the navigation to make it more intuitive, bringing awareness
                    to key features and increasing accessibility.
                  </p>
                  <p className="font-09">
                    Competitors utilize well-organized hamburger menus with
                    distinct sections, enhancing usability by offering easy
                    access to essential elements like search and account
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between section-header bg-gray-200"
            data-aos="fade-up"
          >
            <p>03</p>
            <p>IDEATION</p>
          </div>
          <div className="padding-10 mb-16">
            <div className="fortune-problem mt-8" data-aos="fade-up">
              <div className="problem-description">
                <p className="italic problem-title">
                  Identifying Core Redesign Goals
                </p>
                <p className="text-lg font-medium">
                  Navigation Redesign Principles
                </p>
                <p className="font-09">
                  After reviewing past research on the navigation and better
                  understanding the competitive landscape, I generated a set of
                  principles with SEO and UX to help guide my redesign of the
                  navigation.
                </p>
                <div className="flex gap-10">
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">🔄</span> Consistency
                    </p>
                    <p className="font-09">
                      Ensure the navigation menu is consistently placed across
                      all pages, use clear and descriptive labels, and utilize
                      universally recognized icons and symbols for common
                      actions.
                    </p>
                  </div>
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">🌟</span> Visual Emphasis
                    </p>
                    <p className="font-09">
                      Prominently feature products in the main menu, use
                      appealing visuals, organize detailed sub-menus, highlight
                      new and popular items, and incorporate interactive
                      features
                    </p>
                  </div>
                  <div>
                    <p className="font-09 font-medium">
                      <span className="text-lg mr-2">👥</span> User-Centric
                      Design
                    </p>
                    <p className="font-09">
                      Organize navigation items intuitively based on user
                      research, ensure accessibility for all users, and design
                      navigation that works seamlessly on all devices.
                    </p>
                  </div>
                </div>
                <div className="line mt-4 mb-5"></div>
                <div data-aos="fade-up">
                  <p className="italic problem-title mt-8">
                    With these principles in mind, I proposed these
                  </p>
                  <p className="text-lg font-medium">
                    Final Design Recommendations
                  </p>
                </div>

                <div className="flex flex-col gap-14">
                  <div
                    className="compare-contrast grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                      <br></br>
                      When hovering over 'News,' nothing appears, potentially
                      confusing first-time users and leading to a less intuitive
                      experience and lower retention rates.
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                      <br></br>
                      Including 'Top Topics', 'Recent Stories', and a 'Live Now'
                      section in the navigation bar allows users to easily
                      discover popular topics and engage with Fortune's latest
                      events without leaving their current page.
                    </p>
                    <img className="before-and-after" src={newsBefore}></img>
                    <img src={newsAfter} className="before-and-after"></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                      <br></br>
                      When users hover over 'Tech,' only one section appears,
                      which is unconventional for most navigation bars.
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                      <br></br>
                      Highlighting our newsletters related to the hovered topic
                      could boost their visibility and increase subscriber
                      numbers.
                    </p>
                    <img className="before-and-after" src={techBefore}></img>
                    <img src={techAfter} className="before-and-after"></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                    </p>
                    <img className="before-and-after" src={financeBefore}></img>
                    <img src={financeAfter} className="before-and-after"></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                      <br></br>
                      Like 'Tech,' 'Leadership' only has one topic that drops
                      down when hovered over, which can be misleading.
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                      <br></br>
                      Adding a 'Leadership Feature' can generate revenue by
                      offering paid highlights. Additionally, it introduces
                      users to our renowned lists, enhancing brand recognition.
                    </p>
                    <img
                      className="before-and-after"
                      src={leadershipBefore}
                    ></img>
                    <img
                      src={leadershipAfter}
                      className="before-and-after"
                    ></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                    </p>
                    <img className="before-and-after" src={wellBefore}></img>
                    <img src={wellAfter} className="before-and-after"></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                      <br></br>
                      Since Recommends is a brand under Fortune, its dropdown
                      menu has many options, potentially causing confusion and
                      decision fatigue. This design doesn't reflect the product
                      well, and first-time users might not realize they will be
                      redirected from Fortune.com.
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                      <br></br>
                      Redesigning the navigation to accurately showcase
                      everything Recommends offers can give users a clearer idea
                      of what to expect. This approach provides direct access to
                      Recommends articles and enhances the brand's visibility.
                    </p>
                    <img
                      className="before-and-after"
                      src={recommendsBefore}
                    ></img>
                    <img
                      src={recommendsAfter}
                      className="before-and-after"
                    ></img>
                  </div>
                  <div
                    className="grid grid-cols-2 gap-x-5 gap-y-6"
                    data-aos="fade-up"
                  >
                    <p className="font-09">
                      <span className="font-bold">Before</span>
                    </p>
                    <p className="font-09">
                      <span className="font-bold">After</span>
                    </p>
                    <img className="before-and-after" src={fortuneBefore}></img>
                    <img src={fortuneAfter} className="before-and-after"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div
            className="flex justify-between section-header bg-gray-200"
            data-aos="fade-up"
          >
            <p>04</p>
            <p>REFLECTION</p>
          </div> */}
          {/* <div className="padding-10">
            <div className="flex flex-row mt-14 what-i-learned">
              <div className="what-did-i-learn flex flex-row">
                <span className="search-icon">
                  <IoIosSearch />
                </span>
                What did I learn?
              </div>
              <div className="flex flex-col learned-paragraphs">
                <div className="problem-description">
                  <p className="text-lg font-medium">Find a shared language.</p>
                  <p className="font-09">
                    I spent a lot of time working with and presenting to
                    tech-focused individuals. While they relied on their
                    technical intuition, I focused on studying user behavior and
                    system interactions. To bridge this gap, I made it a
                    priority to clearly articulate the{" "}
                    <span className="italic">why</span> behind our design
                    choices.
                  </p>
                  <p className="font-09">
                    For every collaborator there is a shared langauge. Find it
                    and use it.
                  </p>
                  <p className="font-09"></p>
                </div>
                <div className="problem-description">
                  <p className="text-lg font-medium">Find a good balance.</p>
                  <p className="font-09">
                    With redesigns, it's easy to create something{" "}
                    <span className="italic">you</span> think is optimal. But
                    often times, when working for a greater company, there are
                    many more things that should be factored into a redesign.
                  </p>
                  <p className="font-09">
                    Find a good balance between the user experience, the
                    monetization strategies, stakeholder feedback, and the
                    design itself.
                  </p>
                </div>
                <div className="problem-description">
                  <p className="text-lg font-medium">Share thoughtfully.</p>
                  <p className="font-09">
                    Initially, the redesign of the navigation bar on the website
                    appeared to be solely a matter of UX and Product. However,
                    over time, I came to understand the importance of involving
                    and obtaining input from other teams.
                  </p>
                  <p className="font-09">
                    This process highlighted the critical role that
                    cross-functional collaboration plays in achieving a truly
                    effective redesign.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

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
