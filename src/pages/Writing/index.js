import "./index.css";
import { ArticleItem } from "../../components/Article Item";

export function Writing() {
  return (
    <div className="container-about flex justify-center">
      <div>
        <div className="article-heading flex justify-center animate__animated animate__fadeIn">
          <p>
            In an effort to be more intentional about the things I learn and
            processes I fulfill, I started writing. Also, sometimes it feels
            easier than speaking.
          </p>
        </div>
        <div className="articles flex flex-col align-left animate__animated animate__fadeIn">
          <ArticleItem
            description="Coming soon"
            date="TBD"
            time="0 minutes"
          ></ArticleItem>
          {/* <ArticleItem
            title="6 months at Fortune"
            description="My first experience as an intern in NYC"
            date="May 2, 2024"
            time="17 minutes"
            href="https://liangjimenez.substack.com/"
          ></ArticleItem> */}
        </div>
      </div>
    </div>
  );
}
