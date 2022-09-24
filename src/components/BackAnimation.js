import { useEffect } from "react";
import "../UI/backAnimation.css";

const BackAnimation = () => {
  // DOM selectors

  // const [stars, setStars] = useState(0);
  // const [starsCtx, setStarsCtx] = useState(null);
  //   const starsCtx = null;
  //   const slider = null;
  //   const output = null;
  useEffect(() => {
    const stars = document.getElementById("stars");
    const starsCtx = stars.getContext("2d");
    // const slider = document.querySelector(".slider input");
    // const output = document.querySelector("#speed");

    // global variables
    let screen,
      starsElements,
      starsParams = { speed: 4, number: 300, extinction: 4 };

    // run stars
    setupStars();
    updateStars();

    // handle slider
    // output.innerHTML = 3;
    // slider.oninput = function () {
    //   output.innerHTML = 3.5;
    //   starsParams.speed = 6;
    // };

    // update stars on resize to keep them centered
    window.onresize = function () {
      setupStars();
    };

    // star constructor
    function Star() {
      this.x = Math.random() * stars.width;
      this.y = Math.random() * stars.height;
      this.z = Math.random() * stars.width;

      this.move = function () {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
          this.z = stars.width;
        }
      };

      this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity =
          rad > starsParams.extinction
            ? 1.5 * (2 - rad / starsParams.extinction)
            : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
      };
    }

    // setup <canvas>, create all the starts
    function setupStars() {
      screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
      };
      
      window.cancelAnimationFrame(updateStars);
      stars.width = screen.w;
      stars.height = screen.h;
      starsElements = [];
      for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
      }
    }

    // redraw the frame
    function updateStars() {
      starsCtx.fillStyle = "#000";
      starsCtx.fillRect(0, 0, stars.width, stars.height);
      starsElements.forEach(function (s) {
        s.show();
        s.move();
      });
      window.requestAnimationFrame(updateStars);
    }
  }, []);
  return (
    <div className="back_animation">
      <canvas id="stars"></canvas>
    </div>
  );
};

export default BackAnimation;
