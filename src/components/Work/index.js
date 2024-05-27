import "./index.css";
import { WorkItem } from "../Work Item";

export function Work() {
  return (
    <div className="bg-white">
      <div
        className="work-title mt-100"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Work
      </div>
      <hr className="line" data-aos="fade-up" data-aos-duration="300" />
      <div className="work-items ">
        <div
          className="w-layout-grid content-grid"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          <WorkItem
            name="Fortune"
            description1="Overview • Internship • Product"
            description2="6 months of Jira tickets, redesigns, and sprints • 2024"
            link="/fortune"
            color1="#400014"
            color2="#800028"
            color3="#ff0051"
          />
          {/* <p>hi</p>
          <p>hi</p> */}
          <WorkItem
            name="Climate Countdown"
            description1="Creative Coding • Processing • Lighting"
            description2="A 5-minute LED light show projected on Ars Electronica • 2023"
            link="/climate-countdown"
            color1="rgb(0, 41, 64)"
            color2="#005280"
            color3="#00a3ff"
          />
          <WorkItem
            name="Porkify"
            description1="Full Stack Website • UX Design • School Project"
            description2="Letterboxd reimagined for music lovers • 2023"
            link="/porkify"
            color1="#604056"
            color2="#9B6989"
            color3="#EBA1D2"
          />
          {/* <p>hi</p>
          <p>hi</p> */}
          <WorkItem
            name="Bullet Journal"
            description1="Java • Visual Scene Builder • School Project"
            description2="An online MVC bullet journal for event & task management • 2023"
            link="/bullet-journal"
            color1="#3d4001"
            color2="#7c7f02"
            color3="#afb303"
          />
        </div>
      </div>
    </div>
  );
}
