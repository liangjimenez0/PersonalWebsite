import "./index.css";
import { ArticleItem } from "../../components/Article Item";

export function Writing() {
  return (
    <div className="container-about flex justify-center">
      <div className="crop ">
        <div className="article-heading flex justify-center animate__animated animate__fadeIn">
          <p>
            In an effort to be more intentional about the things I learn and
            processes I fulfill, I started writing. Also, sometimes it feels
            easier than speaking.
          </p>
        </div>
        <div className="articles flex flex-col align-left animate__animated animate__fadeIn">
          <ArticleItem
            title="This website"
            description="How but more importantly, why I built this website"
            date="May 2, 2024"
            time="17 minutes"
            href="/article/website"
          ></ArticleItem>{" "}
        </div>
      </div>
    </div>
  );
}
