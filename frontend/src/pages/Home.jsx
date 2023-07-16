import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import { Button, Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../UI/services/ServiceList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import experienceImg from "../assets/images/experience.png";
import ImagesGallery from "../components/image-gallery/ImagesGallery";

function Home(props) {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);
  return (
    <>
      <section className="section section__home">
        <Container>
          <Row>
            <div className="row__cr ">
              <Col lg="6">
                <div className="hero__content">
                  <div className="hero__subtitle">
                    <Subtitle subtitle={"Know Before You Go"}></Subtitle>
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>
                    Traveling opens the door to creating
                    <span className="highlight">memories</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod quos, consequatur modi delectus porro doloremque,
                    minima nobis asperiores cum magnam totam! Deleniti totam
                    dolor aperiam mollitia error consequuntur quia doloremque?
                  </p>
                </div>
              </Col>
              <div className="col__cr">
                <Col lg="2">
                  <div className="hero__img-box one">
                    <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg="2">
                  <div className="hero__img-box two">
                    <video src={heroVideo} alt="" controls loop="true" />
                  </div>
                </Col>{" "}
                <Col lg="2">
                  <div className="hero__img-box three">
                    <img src={heroImg02} alt="" />
                  </div>
                </Col>
              </div>
            </div>
            <SearchBar></SearchBar>
          </Row>
        </Container>
      </section>
      <section className="section section__services">
        <Container>
          <div className="service__wrapper">
            <div className="services__heading">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </div>
            <div className="cards">
              <ServiceList></ServiceList>
            </div>
          </div>
        </Container>
      </section>

      {/*  */}

      <section className="section section__explore">
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Explore"}></Subtitle>
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>

            <div className="featuredtourlist">
              <FeaturedTourList></FeaturedTourList>
            </div>
          </Row>
        </Container>
      </section>

      {/*  */}

      <section className="section section__experience">
        <div className="experience__left">
          <div className="experience__content">
            <Subtitle subtitle={"Experience"}></Subtitle>

            <h2>
              With our all experience <br />
              we will serve you
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Sequi deleniti nobis perspiciatis suscipit ea obcaecati minus
              commodi.
            </p>
          </div>
          <div className="counter__wrapper">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successfull trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular clients</h6>
            </div>{" "}
            <div className="counter__box">
              <span>15</span>
              <h6>Year Experience</h6>
            </div>
          </div>

          {/* <button className="btn learn__btn">Learn more</button> */}
        </div>

        <div className=".experience__right">
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
        </div>
      </section>

      {/*  */}

      <section className="section section__gallery">
        <Col>
          <Subtitle subtitle={"Gallery"}></Subtitle>
          <h2 className="gallery__title">Visit our customers tour gallery</h2>
        </Col>
        <Col>
          <ImagesGallery />
        </Col>
      </section>
      {/*  */}

      <section className="section section__gallery">
        <Col>
          <Subtitle subtitle={"Fans Love"}></Subtitle>
          <h2 className="gallery__title">What our fans say about us</h2>
        </Col>
      </section>
    </>
  );
}

export default Home;
