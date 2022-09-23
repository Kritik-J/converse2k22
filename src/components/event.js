import { Component } from "react";
import "../UI/event.css";
import Image from "../assests/image.png";
const Event = (props) => {
  return (
    // <div classNameNameName="card mb-3">
    //     <div classNameName="col-md-4">
    //     <img src="https://www.converse2k21.tech/assets/MainPoster.2b9c64a8.jpg" classNameName="card-img" alt="..." />
    //     </div>
    //     <div classNameName="card-body">
    //         <h5 classNameName="card-title">Card title</h5>
    //         <p classNameName="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <p classNameName="card-text"><small classNameName="text-muted">Last updated 3 mins ago</small></p>
    //     </div>
    // </div>

    <section>
      <article class="postcard dark blue">
        <a class="postcard__img_link" href="#">
          <img class="postcard__img" src={Image} alt="Image Title" />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue">
            <a href="#">PY-IT</a>
          </h1>
          <div class="postcard__subtitle small"></div>
          <div class="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          {/* <span class="regi"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link" class="preview-card__button">REGISTER</a></span>
                    <span class="regi"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link" class="preview-card__button">REGISTER</a></span> */}
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="ragi">
                {" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link"
                  class="preview-card__button"
                >
                  REGISTER
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="ragi">
                {" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link"
                  class="preview-card__button"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="postcard dark red">
        <a class="postcard__img_link" href="#">
          <img class="postcard__img" src={Image} alt="Image Title" />
        </a>
        <div className="postcard__text">
          <h1 class="postcard__title red">
            <a href="#">IT-QUIZ</a>
          </h1>
          <div class="postcard__subtitle small"></div>
          <div class="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit
            corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam
            adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores
            nobis enim quidem excepturi, illum quos!
          </div>
          <div className="row justify-content-md-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="ragi">
                {" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link"
                  class="preview-card__button"
                >
                  REGISTER
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="ragi">
                {" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdNc_n_um97cgbLOIdqBLZMAfguvUcPwBXAWleUtv1iZ9GbKw/viewform?usp=sf_link"
                  class="preview-card__button"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Event;
