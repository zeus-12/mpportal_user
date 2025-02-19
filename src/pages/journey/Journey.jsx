import "./journey.scss";
import "animate.css";
import Timeline from "../../components/timeline/Timeline";

export default function Journey() {
  return (
    <div className="wrapper-media">
      <div className="media-page">
        <h1 className="journey-heading">my journey</h1>
        <div className="agro-mission">
          <h1 className="agro-heading">
            Mp's youth agro mission
            <br />
            <span>2020</span>
          </h1>
          <div className="grid-content">
            <img className="img1" src=".\assets\images\img1.jfif" alt="" />
            <div className="inner-grid-content d-flex justify-content-evenly">
              <img className="img2" src=".\assets\images\img2.jfif" alt="" />
              <img className="img3" src=".\assets\images\img3.jfif" alt="" />
            </div>
          </div>
          <div className="img-caption">
            <p>
              MP'S Youth Agro Mission 2020 is an initiative of Adv.Dean
              Kuriakose. This mission is a Joint Venture of Idukki Care
              Foundation and Congress(I) members of Idukki district to motivate
              the youth towards conventional and organic farming at Idukki
              district. Agro Mission was cordially Inaugurated on 01 June 2020,
              by Adv. Dean Kuriakose, in the presence of Roshy Augustine MLA and
              the members of Congress Mandalam Committee of Vazhathope, Idukki
              district on a one hectare property. Foundation has 75 volunteers
              across 75 panchayats of Idukki district. Through this mission,
              Idukki Care Foundation will be bringing forward more properties on
              rent for promoting conventional and organic agricultural
              activities at Idukki district in the coming days.
            </p>
          </div>
        </div>
        <div className="my-journey">
          <h1 className="heading">My journey...</h1>
          <Timeline />
        </div>
        <div className="wrapper-videos">
          <h1 className="heading">RECENT MATTERS</h1>
          <div className="videos my-3">
            <div className="video-embed vid-1" data-aos="slide-up">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PsW7rBIqJtU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                Medical Termination-Pregnancy Bill (Amendment)
                <br />
                <span>2020</span>
              </h3>
            </div>
            <div className="video-embed" data-aos="slide-up">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rz5lQG1jjzQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                Matters of Urgent Public Importance
                <br />
                <span classsName="golden-span">Lok Sabha</span>
                <br />
                <span>2020</span>
              </h3>
            </div>
            <div className="video-embed " data-aos="slide-up">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/d3qthzkX7E8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                Matters of Urgent Public Importance
                <br />
                <span>Idukki Medical College</span>
              </h3>
            </div>
            <div className="video-embed" data-aos="slide-up">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sDUGpQ1LY14"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>
                Idukki Election Results
                <br />
                <span>2019</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
