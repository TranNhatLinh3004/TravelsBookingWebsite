import React from "react";
import { Button, Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";

const nav__links = [
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
function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}{" "}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="nav__right">
              <div className="nav__btns">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>

                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
