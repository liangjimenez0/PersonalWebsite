import "./index.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const ArticleItem = ({ title, description, date, time, id, photo }) => {
  return (
    <Link
      className="article-link flex align-middle"
      key={id}
      to={`/writing/${id}`}
    >
      <div className="article-item" data-aos="fade-up">
        <div className="article-photo">
          <img src={photo}></img>
        </div>
        <div className="article-item-info">
          <p className="muted m-0">{title}</p>
          <p className="description m-0">{description}</p>
          <div className="article-details-info left">
            <div className="article-details">
              <p className="muted"> Publish date</p>
              <p className="bold"> {date}</p>
            </div>
            <div className="article-details">
              <p className="muted">Reading time</p>
              <p className="bold">{time}</p>
            </div>
          </div>
          <div>
            <button className="button flex">
              Read article
              <span className="arrow">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
