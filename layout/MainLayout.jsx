import React, { useState, useEffect, memo } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

/* Actions */
import ACTION_TYPES from "../store/actionTypes";

/* Components */
import NavLeft from "../components/NavLeft";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/Footer";

function MainLayout(mainProps) {
  const { children, dispatch, storeLayout } = mainProps;

  /* layout vars */
  const wideNav = { width: "240px" };
  const wideContent = { marginLeft: "240px" };

  const [isOpen, setIsOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isWideNav, setIsWideNav] = useState({ ...wideNav });
  const [isWideContent, setIsWideContent] = useState({ ...wideContent });

  const toggle = () => setIsOpen(!isOpen);
  const toggleLeft = () => {
    setIsToggled(!isToggled);
    if (storeLayout.toggle) {
      setIsWideNav({ ...wideNav });
      setIsWideContent({ ...wideContent });
    } else {
      setIsWideNav({ width: 0, padding: 0 });
      setIsWideContent({ marginLeft: 0 });
    }
    dispatch({
      type: ACTION_TYPES.LAYOUT.TOGGLE,
      toggle: isToggled
    });
  };

  const props = {
    /* state vars */
    isOpen,
    isToggled,
    /* toggles */
    toggle,
    toggleLeft
  };

  return (
    <>
      <NavBar {...props} />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left" style={isWideNav}>
            <NavLeft />
          </Col>
          <Col className="wrapper-content" style={isWideContent}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default connect(state => state)(MainLayout);
