import React from "react";
import { Card, NavLink } from "reactstrap";
import "../styles/tourcard.css";
import calculateAvgRating from "../utils/avgRating";
function TourCard({ tour }) {
  const { id, city, title, photo, price, featured, reviews } = tour;
  // }
  const { avgRating, totalRating } = calculateAvgRating(reviews);
  return (
    <div className="tour__card">
      <div className="card">
        <div className="tour__img">
          <img src={photo} alt="" />
          {featured && <span>Featured</span>}
        </div>
      </div>

      <div className="cardbody">
        <div className="card__top">
          <span className="tour__location">
            <i class="uil uil-location-point"></i>
            {city}
          </span>
          <span className="tour__rating">
            <i class="uil uil-star"></i>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>

        <h5 className="tour__title">
          <NavLink to={`/tour/${id}`}>{title}</NavLink>
        </h5>

        <div className="card__bottom">
          <h5>
            ${price} <span>/per person</span>
          </h5>
          <button className="btn booking__btn">
            <NavLink to={`/tour/${id}`}>Book Now</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
