import React, { useEffect, useState } from "react";
import maleTourist from "../assets/images/male-tourist.png";
import "./newsletter.css";
import handleScroll from "../feature/handleScroll";

function Newsletter(props) {
  let height = document.body.scrollHeight;
  const [scrollY, setHeight] = useState(height);
  window.addEventListener("scroll", () => {
    setHeight(document.body.scrollHeight);
  });

  useEffect(() => {
    handleScroll();

    // document.header.className = icon;
  }, [scrollY]);
  return (
    <section className="section section__newsletter hidden">
      <div className="newsletter__wrapper">
        <div className="newsletter__content">
          <h2>Subscribe now to get useful traveling information.</h2>
          <div className="newsletter__input">
            <input type="email" placeholder="Enter your email" />
            <button className="btn newsletter__btn">Subscribe</button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            molestiae odio reiciendis exercitationem quasi voluptatibus
            dignissimos! Consequuntur pariatur laboriosam culpa.
          </p>
        </div>

        <div className="newsletter__img">
          <img src={maleTourist} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
