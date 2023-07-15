import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";
import weatherImg from "../../assets/images/weather.png";
import guideImg from "../../assets/images/guide.png";
import customizationImg from "../../assets/images/customization.png";

function ServiceList(props) {
  const servicesData = [
    {
        imgUrl: weatherImg,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: guideImg,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: customizationImg,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item}></ServiceCard>
        </Col>
      ))}
    </>
  );
}

export default ServiceList;
