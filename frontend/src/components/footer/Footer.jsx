import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
function Footer(props) {
  const year = new Date().getFullYear();
  const quick__links = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "about",
      display: "About",
    },
    {
      path: "tour",
      display: "Tour",
    },
  ];

  const quick__links2 = [
    {
      path: "gallery",
      display: "Gallery",
    },
    {
      path: "login",
      display: "Login",
    },
    {
      path: "register",
      display: "Register",
    },
  ];
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__one footer">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis molestiae eaque repellendus et est aperiam.
          </p>

          <div className="social__link">
            <span>
              <NavLink>
                <i
                  class="uil uil-youtube"
                  style={{
                    color: "red",
                  }}
                ></i>
              </NavLink>
            </span>
            <span>
              <NavLink>
                <i
                  class="uil uil-facebook"
                  style={{
                    color: "lightblue",
                  }}
                ></i>
              </NavLink>
            </span>{" "}
            <span>
              <NavLink>
                <i
                  class="uil uil-instagram-alt"
                  style={{
                    color: "pink",
                  }}
                ></i>
              </NavLink>
            </span>{" "}
            <span>
              <NavLink>
                <i class="uil uil-github"></i>
              </NavLink>
            </span>
          </div>
        </div>

        <div className="footer__two footer">
          <h5 className="footer__link-title">Discover</h5>
          <ListGroup className="footer__quick-links">
            {quick__links.map((item, index) => {
              return (
                <ListGroupItem key={index} className="item__link">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </div>

        <div className="footer__three footer">
          <h5 className="footer__link-title">Quick Links</h5>
          <ListGroup className="footer__quick-links">
            {quick__links2.map((item, index) => {
              return (
                <ListGroupItem key={index} className="item__link">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </div>

        <div className="footer__four footer">
          <h5 className="footer__link-title">Contact</h5>
          <ListGroup className="footer__quick-links">
            <ListGroupItem className="GroupItem ">
              <h5>
                <span>
                  <i class="uil uil-location-point"></i>
                </span>
                Address:
              </h5>
              <p>Da Nang City</p>
            </ListGroupItem>{" "}
            <ListGroupItem className="GroupItem">
              <h5>
                <span>
                  <i class="uil uil-location-point"></i>
                </span>
                Address:
              </h5>
              <p>Nha Trang </p>
            </ListGroupItem>{" "}
            <ListGroupItem className="GroupItem">
              <h5>
                <span>
                  <i class="uil uil-location-point"></i>
                </span>
                Address:
              </h5>
              <p>Ha Noi City</p>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="copyright">
          Copyright {year}, design and develop by Anh Dev. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
