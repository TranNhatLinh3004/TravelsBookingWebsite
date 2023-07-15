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
import FeaturedTourList from "../components/featuredtours/FeaturedTourList";
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

      <section className="section section-explore">
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
    </>
  );
}

export default Home;
