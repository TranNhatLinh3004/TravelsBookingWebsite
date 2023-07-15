import React from "react";
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
function FeaturedTourList(props) {
  return (
    <>
      {tourData?.map((tour) => {
        return (
          <Col lg="3" className="mh-4" key={tour.id}>
            <TourCard tour={tour}></TourCard>
          </Col>
        );
      })}
    </>
  );
}

export default FeaturedTourList;
