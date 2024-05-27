import "./index.css";
import "animate.css";
import headshot from "../../images/headshot.JPG";

export function About() {
  return (
    <div className="flex flex-col">
      <div>
        <div
          className="section aos-init aos-animate animate__animated animate__fadeIn"
          data-aos="fade-up"
        >
          <div className="about-paragraph chapter" data-aos="fade-up">
            <p className="about-heading">About</p>
            <div className="about-body">
              <p>
                Hello, I'm Liang, a Dallas born ex-Texan and a 3rd-year Honors
                student at Northeastern University studying Computer Science and
                Cognitive Psychology.
              </p>

              <p>
                By some miracle, my mom, a Singaporean-born professional
                pianist, met my dad, an electrical engineer and a native of
                Spain, met in Manhattan, New York. As a hybrid of two cultures
                and passions, I have spent my entire life using a technical
                background to solve creative problems and vice versa. This
                practice extends to <span className="italic">how</span> I
                design.
              </p>

              <p>
                I aim to design digital products, informed by the principles of
                computer and cognitive science, to tell a story. In the
                direction our technology-centered society is heading, I believe
                that humanizing the user experience should be at its core.
              </p>

              <p>
                Outside of work, I love to dance (to any music sent my way),
                make music (with a piano, ukulele, or DJ controller), and eat
                food (in Singapore, NYC, and Spain to say a few).
              </p>
            </div>
          </div>
        </div>
        <div
          className="section aos-init aos-animate animate__animated animate__fadeIn"
          data-aos="fade-up"
        >
          <div className="about-paragraph chapter" data-aos="fade-up">
            <p className="about-heading">Experience</p>
            <ul className="journey-items" data-aos="fade-up">
              <li>
                Northeastern University
                <div className="spacer-line"></div>
                <div className="journey-items-date">
                  {" "}
                  <div class="current-indicator"></div>
                  Current
                </div>
              </li>
              <p className="journey-items-sentence">
                3rd-Year Student in Computer Science and Cognition
              </p>

              <li>
                Fortune
                <div className="spacer-line"></div>
                <div className="journey-items-date">2024</div>
              </li>
              <p className="journey-items-sentence">
                Product Management and UX Intern
              </p>
            </ul>
          </div>
        </div>
        <div
          className="section aos-init aos-animate animate__animated animate__fadeIn"
          data-aos="fade-up"
        >
          {/* <div className="about-paragraph chapter" data-aos="fade-up">
            <p className="about-heading">Currently</p>
            <div className="now-content">
              <p className="now-title mt-4">Reading</p>
              <div class="details card project">
                <div class="info">
                  <div class="flex">
                    <p class="now-subtitle">Hench</p>
                    <p class="m-0 ml-3">
                      <span class="badge grey">Natalie Zina Walschots</span>
                    </p>
                  </div>
                  <p class="muted m-0">
                    Attempting to get back into reading (always).
                  </p>
                </div>
              </div>
              <p className="now-title mt-10">Writing</p>
              <a className="now-link" href="/article/website">
                <div class="details card project">
                  <div class="info">
                    <div class="flex">
                      <p class="now-subtitle">This website</p>
                      <p class="m-0 ml-3">
                        <span class="badge grey">2024</span>
                      </p>
                    </div>
                    <p class="muted m-0">
                      How but more importantly, why I built this website
                    </p>
                  </div>
                </div>
              </a>
              <p className="now-title mt-10">Watching</p>
              <div class="details card project">
                <div class="info">
                  <div class="flex">
                    <p class="now-subtitle">Modern Family</p>
                    <p class="m-0 ml-3">
                      <span class="badge grey">Hulu</span>
                    </p>
                  </div>
                  <p class="muted m-0">Just a good show</p>
                </div>
              </div>
              <p className="now-title mt-10">Listening</p>
              <a
                className="now-link"
                target="_blank"
                href="https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh?si=NnfSR9YtSreE-Mdk3BAkZw"
              >
                <div class="details card project">
                  <div class="info">
                    <div class="flex">
                      <p class="now-subtitle">Ctrl</p>
                      <p class="m-0 ml-3">
                        <span class="badge grey">SZA</span>
                      </p>
                    </div>
                    <p class="muted m-0">
                      Because there is never a time I'm not listening to this
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div>
        <img src={headshot}></img>
      </div> */}
    </div>
  );
}
