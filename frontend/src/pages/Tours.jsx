import React from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import tourData from "../assets/data/tours";

import TourCard from "../shared/TourCard";

import SearchBar from "../shared/SearchBar";

import Newsletter from "../shared/Newsletter";
import { Col, Container } from "reactstrap";
function Tours(props) {
  return (
    <>
      <CommonSection title={"All Tours"} />

      <section>
        <Container>
          <SearchBar></SearchBar>
        </Container>
      </section>

      <section>
        <div className="featuredtourlist">
          {tourData?.map((tour) => {
            return (
              <Col lg="3" className="mh-4" key={tour.id}>
                <TourCard tour={tour}></TourCard>
              </Col>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Tours;
