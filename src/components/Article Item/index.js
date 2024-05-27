import "./index.css";

export const ArticleItem = ({ title, description, date, time, href }) => {
  return (
    <a className="article-link flex align-middle" href={href}>
      <div className="article-item" data-aos="fade-up">
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
        </div>
      </div>
    </a>
  );
};
