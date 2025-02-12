import "./index.css";
import { ArticleItem } from "../../components/Article Item";
import headshot from "../../images/800x800.png";

export function Writing() {
  return (
    <div className="container-about flex justify-center">
      <div>
        <div className="article-heading flex justify-center animate__animated animate__fadeIn">
          <p>
            In an effort to keep track of my time abroad, I started writing.
          </p>
        </div>
        <div className="articles flex flex-col align-left animate__animated animate__fadeIn">
          <ArticleItem
            description="Coming soon"
            date="TBD"
            time="0 minutes"
            id="1"
            photo={headshot}
          ></ArticleItem>
          <ArticleItem
            title="6 months at Fortune"
            description="My first experience as an intern in NYC"
            date="May 2, 2024"
            time="17 minutes"
            href="https://liangjimenez.substack.com/"
            photo={headshot}
          ></ArticleItem>
        </div>
      </div>
    </div>
  );
}
