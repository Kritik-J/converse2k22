import { useEffect, useState } from "react";
import styled from "styled-components/macro";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeigth = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const BackAnimation = () => {
  const [width, setWidth] = useState(getWidth());
  const [height, setHeight] = useState(getHeigth());

  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
      setHeight(getHeigth());
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const stars = document.getElementById("stars");
    const starsCtx = stars.getContext("2d");

    // global variables
    let screen,
      starsElements,
      starsParams = {
        speed: width > 768 ? 6 : 4,
        number: width > 768 ? 300 : 200,
        extinction: 4,
      };

    // run stars
    setupStars();
    updateStars();

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

    function setupStars() {
      screen = {
        w: width,
        h: height,
        c: [width * 0.5, height * 0.5],
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
  }, [width, height]);
  return (
    <BackgroundContainer>
      <canvas id="stars"></canvas>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -999;
  overflow: hidden;
  
  #stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -997;
  }
`;

export default BackAnimation;
