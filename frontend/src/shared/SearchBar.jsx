import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

function SearchBar(props) {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }
  };
  return (
    <Col lg="12" className="">
      <div className="search__bar">
        <div className="forms">
          <div className="form__group form__group-fast">
            <span>
              <i class="uil uil-location-point"></i>
            </span>

            <div>
              <h6>Location</h6>
              <input
                type="
              text"
                placeholder="Where are you going ?"
                ref={locationRef}
              />
            </div>
          </div>
          <div className="form__group form__group-fast">
            <span>
              <i class="uil uil-map"></i>
            </span>

            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </div>
          <div className="form__group form__group-fast">
            <span>
              <i class="uil uil-users-alt"></i>
            </span>

            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </div>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="uil uil-search"></i>
          </span>
        </div>
      </div>
    </Col>
  );
}

export default SearchBar;
