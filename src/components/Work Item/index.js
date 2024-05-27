import "./index.css";

export const WorkItem = ({
  company,
  logo,
  title,
  description,
  bullets,
  image,
  image2,
  image3,
  link,
}) => {
  return (
    <a href={link}>
      <div
        className="flex flex-row work-item animate__animated animate__fadeIn"
        data-aos="fade-up"
      >
        <div className="flex flex-col project-left-hand">
          <div className="left-hand-content flex flex-col">
            <div className="flex flex-row logo">
              <img src={logo} alt="Logo" width="32" height="32"></img>
              <p className="company">{company}</p>
            </div>
            <div className="mobile">
              <h1 className="project-title">{title}</h1>
              <p className="project-description">{description}</p>
            </div>
            <p className="project-bullet text-gray-500">{bullets}</p>
          </div>
        </div>

        <div className="project-right-hand grid grid-cols-2 gap-3">
          <img className="col-span-2" src={image}></img>
          {/* <img src={image2}></img>
          <img src={image3}></img> */}
        </div>
      </div>
    </a>
  );
};
