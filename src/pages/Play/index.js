import "./index.css";
import processing4 from "./videos/processing-project4.mp4";
import textile from "./images/on-textile-final.png";
import iterativePattern from "./images/iterative-pattern.png";
import drawingMachine from "./videos/drawing-machine.mp4";
import piano from "./images/piano.jpg";

export function Play() {
  return (
    <div className="play-page">
      <div className="play-page-content">
        <div className="play-description">
          <p className="animate__animated animate__fadeIn">
            I try to spend more time playing than working. Here are some of my
            experiments.
          </p>
        </div>

        <div className="play-content gap-8 grid grid-cols-2">
          <div className="grid gap-8">
            <a
              href="https://github.com/liangjimenez0/CustomPixel"
              target="_blank"
            >
              <div className="play-content-item">
                <video
                  src={processing4}
                  autoPlay="true"
                  muted="true"
                  loop="true"
                  className="mb-4 h-auto max-w-full"
                ></video>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm mb-1">Swapping color palettes</p>
                    <p className="text-xs text-gray-400">Processing</p>
                  </div>
                  <p className="text-gray-400 text-xs">Java</p>
                </div>
              </div>
            </a>
            <div className="play-content-item">
              <a href="" target="_blank">
                <img src={piano} className="mb-4 h-auto max-w-full"></img>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm mb-1">Piano Playing</p>
                    <p className="text-xs text-gray-400">
                      In a restaurant in Vienna
                    </p>
                  </div>
                  <p className="text-gray-400 text-xs">15 years</p>
                </div>
              </a>
            </div>
          </div>
          <div className="grid gap-8">
            <div className="play-content-item">
              <a
                href="https://drive.google.com/file/d/1neZwgvhXQEWX3rDCU2xi_XwbqkM_rDhA/view?usp=sharing"
                target="_blank"
              >
                <img src={textile} className="mb-4 h-auto max-w-full"></img>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm mb-1">Screen Printing</p>
                    <p className="text-xs text-gray-400">FabricFabrik</p>
                  </div>
                  <p className="text-gray-400 text-xs">Textiles</p>
                </div>
              </a>
            </div>
            <div className="play-content-item">
              <a
                href="https://drive.google.com/file/d/1neZwgvhXQEWX3rDCU2xi_XwbqkM_rDhA/view?usp=sharing"
                target="_blank"
              >
                <img src={textile} className="mb-4 h-auto max-w-full"></img>
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm mb-1">Screen Printing</p>
                    <p className="text-xs text-gray-400">FabricFabrik</p>
                  </div>
                  <p className="text-gray-400 text-xs">Textiles</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
