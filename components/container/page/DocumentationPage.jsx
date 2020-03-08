import React, { memo } from "react";
import { Container, Row, Col } from "reactstrap";

const DocumentationPage = memo(props => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12" id="typography">
            <h1>Documentation</h1>
            <p className="lead">Themes default typography</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              quisquam harum odio. Natus hic quod unde corporis ipsam optio
              voluptas possimus quidem?
            </p>
            <Row id="sub-header">
              <Col lg="3">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
              </Col>
              <Col lg="3">
                <h1 className="font-lead-base">Heading 1</h1>
                <h2 className="font-lead-base">Heading 2</h2>
                <h3 className="font-lead-base">Heading 3</h3>
                <h4 className="font-lead-base">Heading 4</h4>
                <h5 className="font-lead-base">Heading 5</h5>
              </Col>
              <Col lg="3">
                <h1 className="font-head-base">Heading 1 </h1>
                <h2 className="font-head-base">Heading 2</h2>
                <h3 className="font-head-base">Heading 3</h3>
                <h4 className="font-head-base">Heading 4</h4>
                <h5 className="font-head-base">Heading 5</h5>
              </Col>
            </Row>
            <hr />
            <h3>Lead</h3>
            <Row id="sub-lead">
              <Col lg="6">
                <h4>Paragraph Lead</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="6">
                <h4>Blockquote</h4>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </blockquote>
              </Col>
            </Row>
            <h3>Content</h3>
            <Row id="sub-content">
              <Col lg="12">
                <h4>Paragraph Content</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
                <h4>Paragraph Default</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Navigation</h3>
            <Row id="sub-navigation">
              <Col lg="12">
                <h4>Default</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="12">
                <h4>Fixed</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Section</h3>
            <Row id="sub-section">
              <Col lg="12">
                <h4>Section Content</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Carousel</h3>
            <Row id="sub-carousel">
              <Col lg="6">
                <h4>Owl Carousel</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
              <Col lg="6">
                <h4>Slick Carousel</h4>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
              </Col>
            </Row>
            <h3>Icons</h3>
            <Row id="icons">
              <Col lg="12">
                <h3>Font Awesome</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque molestiae eum sapiente maxime dolorum, necessitatibus
                  sed consequuntur labore a at, quia voluptatum velit ipsa atque
                  esse, cum hic. Libero nihil quasi saepe officia.
                </p>
                <div>
                  <h5 className="my-3">Accessibility</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-accessible-icon"
                  >
                    <i className="fab fa-accessible-icon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-american-sign-language-interpreting"
                  >
                    <i className="fas fa-american-sign-language-interpreting"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-assistive-listening-systems"
                  >
                    <i className="fas fa-assistive-listening-systems"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-audio-description"
                  >
                    <i className="fas fa-audio-description"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-blind"
                  >
                    <i className="fas fa-blind"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-braille"
                  >
                    <i className="fas fa-braille"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-closed-captioning"
                  >
                    <i className="fas fa-closed-captioning"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-deaf"
                  >
                    <i className="fas fa-deaf"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-low-vision"
                  >
                    <i className="fas fa-low-vision"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-volume"
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-question-circle"
                  >
                    <i className="fas fa-question-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sign-language"
                  >
                    <i className="fas fa-sign-language"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tty"
                  >
                    <i className="fas fa-tty"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-universal-access"
                  >
                    <i className="fas fa-universal-access"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-wheelchair"
                  >
                    <i className="fas fa-wheelchair"></i>
                  </button>
                  <h5 className="my-3">Arrows</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-double-down"
                  >
                    <i className="fas fa-angle-double-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-double-left"
                  >
                    <i className="fas fa-angle-double-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-double-right"
                  >
                    <i className="fas fa-angle-double-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-double-up"
                  >
                    <i className="fas fa-angle-double-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-down"
                  >
                    <i className="fas fa-angle-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-left"
                  >
                    <i className="fas fa-angle-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-right"
                  >
                    <i className="fas fa-angle-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-angle-up"
                  >
                    <i className="fas fa-angle-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-down"
                  >
                    <i className="fas fa-arrow-alt-circle-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-down"
                  >
                    <i className="fas fa-arrow-alt-circle-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-left"
                  >
                    <i className="fas fa-arrow-alt-circle-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-left"
                  >
                    <i className="fas fa-arrow-alt-circle-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-right"
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-right"
                  >
                    <i className="fas fa-arrow-alt-circle-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-up"
                  >
                    <i className="fas fa-arrow-alt-circle-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-alt-circle-up"
                  >
                    <i className="fas fa-arrow-alt-circle-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-circle-down"
                  >
                    <i className="fas fa-arrow-circle-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-circle-left"
                  >
                    <i className="fas fa-arrow-circle-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-circle-right"
                  >
                    <i className="fas fa-arrow-circle-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-circle-up"
                  >
                    <i className="fas fa-arrow-circle-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-down"
                  >
                    <i className="fas fa-arrow-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-left"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-right"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrow-up"
                  >
                    <i className="fas fa-arrow-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrows-alt"
                  >
                    <i className="fas fa-arrows-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrows-alt-h"
                  >
                    <i className="fas fa-arrows-alt-h"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-arrows-alt-v"
                  >
                    <i className="fas fa-arrows-alt-v"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-down"
                  >
                    <i className="fas fa-caret-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-left"
                  >
                    <i className="fas fa-caret-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-right"
                  >
                    <i className="fas fa-caret-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-down"
                  >
                    <i className="fas fa-caret-square-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-down"
                  >
                    <i className="fas fa-caret-square-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-left"
                  >
                    <i className="fas fa-caret-square-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-left"
                  >
                    <i className="fas fa-caret-square-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-right"
                  >
                    <i className="fas fa-caret-square-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-right"
                  >
                    <i className="fas fa-caret-square-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-up"
                  >
                    <i className="fas fa-caret-square-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-square-up"
                  >
                    <i className="fas fa-caret-square-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-caret-up"
                  >
                    <i className="fas fa-caret-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cart-arrow-down"
                  >
                    <i className="fas fa-cart-arrow-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chart-line"
                  >
                    <i className="fas fa-chart-line"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-circle-down"
                  >
                    <i className="fas fa-chevron-circle-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-circle-left"
                  >
                    <i className="fas fa-chevron-circle-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-circle-right"
                  >
                    <i className="fas fa-chevron-circle-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-circle-up"
                  >
                    <i className="fas fa-chevron-circle-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-down"
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-left"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-right"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chevron-up"
                  >
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud-download-alt"
                  >
                    <i className="fas fa-cloud-download-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud-upload-alt"
                  >
                    <i className="fas fa-cloud-upload-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-download"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exchange-alt"
                  >
                    <i className="fas fa-exchange-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-expand-arrows-alt"
                  >
                    <i className="fas fa-expand-arrows-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-external-link-alt"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-external-link-square-alt"
                  >
                    <i className="fas fa-external-link-square-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-down"
                  >
                    <i className="fas fa-hand-point-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-down"
                  >
                    <i className="fas fa-hand-point-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-left"
                  >
                    <i className="fas fa-hand-point-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-left"
                  >
                    <i className="fas fa-hand-point-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-right"
                  >
                    <i className="fas fa-hand-point-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-right"
                  >
                    <i className="fas fa-hand-point-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-up"
                  >
                    <i className="fas fa-hand-point-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-up"
                  >
                    <i className="fas fa-hand-point-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-pointer"
                  >
                    <i className="fas fa-hand-pointer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-pointer"
                  >
                    <i className="fas fa-hand-pointer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-history"
                  >
                    <i className="fas fa-history"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-level-down-alt"
                  >
                    <i className="fas fa-level-down-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-level-up-alt"
                  >
                    <i className="fas fa-level-up-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-location-arrow"
                  >
                    <i className="fas fa-location-arrow"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-long-arrow-alt-down"
                  >
                    <i className="fas fa-long-arrow-alt-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-long-arrow-alt-left"
                  >
                    <i className="fas fa-long-arrow-alt-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-long-arrow-alt-right"
                  >
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-long-arrow-alt-up"
                  >
                    <i className="fas fa-long-arrow-alt-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mouse-pointer"
                  >
                    <i className="fas fa-mouse-pointer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-play"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-random"
                  >
                    <i className="fas fa-random"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-recycle"
                  >
                    <i className="fas fa-recycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo"
                  >
                    <i className="fas fa-redo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo-alt"
                  >
                    <i className="fas fa-redo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-reply"
                  >
                    <i className="fas fa-reply"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-reply-all"
                  >
                    <i className="fas fa-reply-all"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-retweet"
                  >
                    <i className="fas fa-retweet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-share"
                  >
                    <i className="fas fa-share"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-share-square"
                  >
                    <i className="fas fa-share-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-share-square"
                  >
                    <i className="fas fa-share-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sign-in-alt"
                  >
                    <i className="fas fa-sign-in-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sign-out-alt"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort"
                  >
                    <i className="fas fa-sort"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-alpha-down"
                  >
                    <i className="fas fa-sort-alpha-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-alpha-up"
                  >
                    <i className="fas fa-sort-alpha-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-amount-down"
                  >
                    <i className="fas fa-sort-amount-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-amount-up"
                  >
                    <i className="fas fa-sort-amount-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-down"
                  >
                    <i className="fas fa-sort-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-numeric-down"
                  >
                    <i className="fas fa-sort-numeric-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-numeric-up"
                  >
                    <i className="fas fa-sort-numeric-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sort-up"
                  >
                    <i className="fas fa-sort-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync"
                  >
                    <i className="fas fa-sync"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync-alt"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-text-height"
                  >
                    <i className="fas fa-text-height"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-text-width"
                  >
                    <i className="fas fa-text-width"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo"
                  >
                    <i className="fas fa-undo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo-alt"
                  >
                    <i className="fas fa-undo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-upload"
                  >
                    <i className="fas fa-upload"></i>
                  </button>
                  <h5 className="my-3">Audio & Video</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-audio-description"
                  >
                    <i className="fas fa-audio-description"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-backward"
                  >
                    <i className="fas fa-backward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-circle"
                  >
                    <i className="fas fa-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-closed-captioning"
                  >
                    <i className="fas fa-closed-captioning"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-compress"
                  >
                    <i className="fas fa-compress"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eject"
                  >
                    <i className="fas fa-eject"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-expand"
                  >
                    <i className="fas fa-expand"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-expand-arrows-alt"
                  >
                    <i className="fas fa-expand-arrows-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fast-backward"
                  >
                    <i className="fas fa-fast-backward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fast-forward"
                  >
                    <i className="fas fa-fast-forward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-audio"
                  >
                    <i className="fas fa-file-audio"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-video"
                  >
                    <i className="fas fa-file-video"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-film"
                  >
                    <i className="fas fa-film"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-forward"
                  >
                    <i className="fas fa-forward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-headphones"
                  >
                    <i className="fas fa-headphones"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone"
                  >
                    <i className="fas fa-microphone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone-slash"
                  >
                    <i className="fas fa-microphone-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-music"
                  >
                    <i className="fas fa-music"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pause"
                  >
                    <i className="fas fa-pause"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pause-circle"
                  >
                    <i className="fas fa-pause-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-volume"
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-play"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-play-circle"
                  >
                    <i className="fas fa-play-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-podcast"
                  >
                    <i className="fas fa-podcast"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-random"
                  >
                    <i className="fas fa-random"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo"
                  >
                    <i className="fas fa-redo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo-alt"
                  >
                    <i className="fas fa-redo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rss"
                  >
                    <i className="fas fa-rss"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rss-square"
                  >
                    <i className="fas fa-rss-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-step-backward"
                  >
                    <i className="fas fa-step-backward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-step-forward"
                  >
                    <i className="fas fa-step-forward"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-stop"
                  >
                    <i className="fas fa-stop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-stop-circle"
                  >
                    <i className="fas fa-stop-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync"
                  >
                    <i className="fas fa-sync"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync-alt"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo"
                  >
                    <i className="fas fa-undo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo-alt"
                  >
                    <i className="fas fa-undo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-video"
                  >
                    <i className="fas fa-video"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-volume-down"
                  >
                    <i className="fas fa-volume-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-volume-off"
                  >
                    <i className="fas fa-volume-off"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-volume-up"
                  >
                    <i className="fas fa-volume-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-youtube"
                  >
                    <i className="fab fa-youtube"></i>
                  </button>
                  <h5 className="my-3">Business</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-book"
                  >
                    <i className="fas fa-address-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-card"
                  >
                    <i className="fas fa-address-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-archive"
                  >
                    <i className="fas fa-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-balance-scale"
                  >
                    <i className="fas fa-balance-scale"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-birthday-cake"
                  >
                    <i className="fas fa-birthday-cake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-book"
                  >
                    <i className="fas fa-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-briefcase"
                  >
                    <i className="fas fa-briefcase"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-building"
                  >
                    <i className="fas fa-building"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullhorn"
                  >
                    <i className="fas fa-bullhorn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullseye"
                  >
                    <i className="fas fa-bullseye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calculator"
                  >
                    <i className="fas fa-calculator"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-alt"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-certificate"
                  >
                    <i className="fas fa-certificate"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chart-area"
                  >
                    <i className="fas fa-chart-area"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chart-bar"
                  >
                    <i className="fas fa-chart-bar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chart-line"
                  >
                    <i className="fas fa-chart-line"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chart-pie"
                  >
                    <i className="fas fa-chart-pie"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clipboard"
                  >
                    <i className="fas fa-clipboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-coffee"
                  >
                    <i className="fas fa-coffee"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-columns"
                  >
                    <i className="fas fa-columns"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-compass"
                  >
                    <i className="fas fa-compass"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copyright"
                  >
                    <i className="fas fa-copyright"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-open"
                  >
                    <i className="fas fa-envelope-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-square"
                  >
                    <i className="fas fa-envelope-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fax"
                  >
                    <i className="fas fa-fax"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-globe"
                  >
                    <i className="fas fa-globe"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-industry"
                  >
                    <i className="fas fa-industry"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paperclip"
                  >
                    <i className="fas fa-paperclip"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paste"
                  >
                    <i className="fas fa-paste"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pen-square"
                  >
                    <i className="fas fa-pen-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pencil-alt"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-percent"
                  >
                    <i className="fas fa-percent"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-square"
                  >
                    <i className="fas fa-phone-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-volume"
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-registered"
                  >
                    <i className="fas fa-registered"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-save"
                  >
                    <i className="fas fa-save"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sitemap"
                  >
                    <i className="fas fa-sitemap"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sticky-note"
                  >
                    <i className="fas fa-sticky-note"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-suitcase"
                  >
                    <i className="fas fa-suitcase"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-table"
                  >
                    <i className="fas fa-table"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tag"
                  >
                    <i className="fas fa-tag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tags"
                  >
                    <i className="fas fa-tags"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tasks"
                  >
                    <i className="fas fa-tasks"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbtack"
                  >
                    <i className="fas fa-thumbtack"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-trademark"
                  >
                    <i className="fas fa-trademark"></i>
                  </button>
                  <h5 className="my-3">Chess</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess"
                  >
                    <i className="fas fa-chess"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-bishop"
                  >
                    <i className="fas fa-chess-bishop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-board"
                  >
                    <i className="fas fa-chess-board"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-king"
                  >
                    <i className="fas fa-chess-king"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-knight"
                  >
                    <i className="fas fa-chess-knight"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-pawn"
                  >
                    <i className="fas fa-chess-pawn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-queen"
                  >
                    <i className="fas fa-chess-queen"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-chess-rook"
                  >
                    <i className="fas fa-chess-rook"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-square-full"
                  >
                    <i className="fas fa-square-full"></i>
                  </button>
                  <h5 className="my-3">Code</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-archive"
                  >
                    <i className="fas fa-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-barcode"
                  >
                    <i className="fas fa-barcode"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bath"
                  >
                    <i className="fas fa-bath"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bug"
                  >
                    <i className="fas fa-bug"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-code"
                  >
                    <i className="fas fa-code"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-code-branch"
                  >
                    <i className="fas fa-code-branch"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-coffee"
                  >
                    <i className="fas fa-coffee"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-download"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-code"
                  >
                    <i className="fas fa-file-code"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-filter"
                  >
                    <i className="fas fa-filter"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fire-extinguisher"
                  >
                    <i className="fas fa-fire-extinguisher"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-keyboard"
                  >
                    <i className="fas fa-keyboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microchip"
                  >
                    <i className="fas fa-microchip"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-qrcode"
                  >
                    <i className="fas fa-qrcode"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shield-alt"
                  >
                    <i className="fas fa-shield-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sitemap"
                  >
                    <i className="fas fa-sitemap"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-terminal"
                  >
                    <i className="fas fa-terminal"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-upload"
                  >
                    <i className="fas fa-upload"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-secret"
                  >
                    <i className="fas fa-user-secret"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-window-close"
                  >
                    <i className="fas fa-window-close"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-window-maximize"
                  >
                    <i className="fas fa-window-maximize"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-window-minimize"
                  >
                    <i className="fas fa-window-minimize"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-window-restore"
                  >
                    <i className="fas fa-window-restore"></i>
                  </button>
                  <h5 className="my-3">Communication</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-book"
                  >
                    <i className="fas fa-address-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-card"
                  >
                    <i className="fas fa-address-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-american-sign-language-interpreting"
                  >
                    <i className="fas fa-american-sign-language-interpreting"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-assistive-listening-systems"
                  >
                    <i className="fas fa-assistive-listening-systems"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-at"
                  >
                    <i className="fas fa-at"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell-slash"
                  >
                    <i className="fas fa-bell-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-bluetooth"
                  >
                    <i className="fab fa-bluetooth"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-bluetooth-b"
                  >
                    <i className="fab fa-bluetooth-b"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullhorn"
                  >
                    <i className="fas fa-bullhorn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comment"
                  >
                    <i className="fas fa-comment"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comment-alt"
                  >
                    <i className="fas fa-comment-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comment-dots"
                  >
                    <i className="fas fa-comment-dots"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comment-slash"
                  >
                    <i className="fas fa-comment-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comments"
                  >
                    <i className="fas fa-comments"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-open"
                  >
                    <i className="fas fa-envelope-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-square"
                  >
                    <i className="fas fa-envelope-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fax"
                  >
                    <i className="fas fa-fax"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-inbox"
                  >
                    <i className="fas fa-inbox"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-language"
                  >
                    <i className="fas fa-language"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone"
                  >
                    <i className="fas fa-microphone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone-slash"
                  >
                    <i className="fas fa-microphone-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mobile"
                  >
                    <i className="fas fa-mobile"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mobile-alt"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paper-plane"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-square"
                  >
                    <i className="fas fa-phone-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-volume"
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rss"
                  >
                    <i className="fas fa-rss"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rss-square"
                  >
                    <i className="fas fa-rss-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tty"
                  >
                    <i className="fas fa-tty"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-wifi"
                  >
                    <i className="fas fa-wifi"></i>
                  </button>
                  <h5 className="my-3">Computers</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-desktop"
                  >
                    <i className="fas fa-desktop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-download"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hdd"
                  >
                    <i className="fas fa-hdd"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-headphones"
                  >
                    <i className="fas fa-headphones"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-keyboard"
                  >
                    <i className="fas fa-keyboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-laptop"
                  >
                    <i className="fas fa-laptop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microchip"
                  >
                    <i className="fas fa-microchip"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mobile"
                  >
                    <i className="fas fa-mobile"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mobile-alt"
                  >
                    <i className="fas fa-mobile-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plug"
                  >
                    <i className="fas fa-plug"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-power-off"
                  >
                    <i className="fas fa-power-off"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-print"
                  >
                    <i className="fas fa-print"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-save"
                  >
                    <i className="fas fa-save"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-server"
                  >
                    <i className="fas fa-server"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tablet"
                  >
                    <i className="fas fa-tablet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tablet-alt"
                  >
                    <i className="fas fa-tablet-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tv"
                  >
                    <i className="fas fa-tv"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-upload"
                  >
                    <i className="fas fa-upload"></i>
                  </button>
                  <h5 className="my-3">Currency</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-bitcoin"
                  >
                    <i className="fab fa-bitcoin"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-btc"
                  >
                    <i className="fab fa-btc"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-dollar-sign"
                  >
                    <i className="fas fa-dollar-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-euro-sign"
                  >
                    <i className="fas fa-euro-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-gg"
                  >
                    <i className="fab fa-gg"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-gg-circle"
                  >
                    <i className="fab fa-gg-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lira-sign"
                  >
                    <i className="fas fa-lira-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-money-bill-alt"
                  >
                    <i className="fas fa-money-bill-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pound-sign"
                  >
                    <i className="fas fa-pound-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ruble-sign"
                  >
                    <i className="fas fa-ruble-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rupee-sign"
                  >
                    <i className="fas fa-rupee-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shekel-sign"
                  >
                    <i className="fas fa-shekel-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-won-sign"
                  >
                    <i className="fas fa-won-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-yen-sign"
                  >
                    <i className="fas fa-yen-sign"></i>
                  </button>
                  <h5 className="my-3">Date & Time</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell-slash"
                  >
                    <i className="fas fa-bell-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-alt"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-check"
                  >
                    <i className="fas fa-calendar-check"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-minus"
                  >
                    <i className="fas fa-calendar-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-plus"
                  >
                    <i className="fas fa-calendar-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-times"
                  >
                    <i className="fas fa-calendar-times"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clock"
                  >
                    <i className="fas fa-clock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hourglass"
                  >
                    <i className="fas fa-hourglass"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hourglass-end"
                  >
                    <i className="fas fa-hourglass-end"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hourglass-half"
                  >
                    <i className="fas fa-hourglass-half"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hourglass-start"
                  >
                    <i className="fas fa-hourglass-start"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-stopwatch"
                  >
                    <i className="fas fa-stopwatch"></i>
                  </button>
                  <h5 className="my-3">Design</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-adjust"
                  >
                    <i className="fas fa-adjust"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clone"
                  >
                    <i className="fas fa-clone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-crop"
                  >
                    <i className="fas fa-crop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-crosshairs"
                  >
                    <i className="fas fa-crosshairs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-dropper"
                  >
                    <i className="fas fa-eye-dropper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-slash"
                  >
                    <i className="fas fa-eye-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-object-group"
                  >
                    <i className="fas fa-object-group"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-object-ungroup"
                  >
                    <i className="fas fa-object-ungroup"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paint-brush"
                  >
                    <i className="fas fa-paint-brush"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paste"
                  >
                    <i className="fas fa-paste"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pencil-alt"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-save"
                  >
                    <i className="fas fa-save"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tint"
                  >
                    <i className="fas fa-tint"></i>
                  </button>
                  <h5 className="my-3">Editors</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-align-center"
                  >
                    <i className="fas fa-align-center"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-align-justify"
                  >
                    <i className="fas fa-align-justify"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-align-left"
                  >
                    <i className="fas fa-align-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-align-right"
                  >
                    <i className="fas fa-align-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bold"
                  >
                    <i className="fas fa-bold"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clipboard"
                  >
                    <i className="fas fa-clipboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clone"
                  >
                    <i className="fas fa-clone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-columns"
                  >
                    <i className="fas fa-columns"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-font"
                  >
                    <i className="fas fa-font"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heading"
                  >
                    <i className="fas fa-heading"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-i-cursor"
                  >
                    <i className="fas fa-i-cursor"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-indent"
                  >
                    <i className="fas fa-indent"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-italic"
                  >
                    <i className="fas fa-italic"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-link"
                  >
                    <i className="fas fa-link"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-list"
                  >
                    <i className="fas fa-list"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-list-alt"
                  >
                    <i className="fas fa-list-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-list-ol"
                  >
                    <i className="fas fa-list-ol"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-list-ul"
                  >
                    <i className="fas fa-list-ul"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-outdent"
                  >
                    <i className="fas fa-outdent"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paper-plane"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paperclip"
                  >
                    <i className="fas fa-paperclip"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paragraph"
                  >
                    <i className="fas fa-paragraph"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paste"
                  >
                    <i className="fas fa-paste"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pencil-alt"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-print"
                  >
                    <i className="fas fa-print"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-quote-left"
                  >
                    <i className="fas fa-quote-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-quote-right"
                  >
                    <i className="fas fa-quote-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo"
                  >
                    <i className="fas fa-redo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-redo-alt"
                  >
                    <i className="fas fa-redo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-reply"
                  >
                    <i className="fas fa-reply"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-reply-all"
                  >
                    <i className="fas fa-reply-all"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-share"
                  >
                    <i className="fas fa-share"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-strikethrough"
                  >
                    <i className="fas fa-strikethrough"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-subscript"
                  >
                    <i className="fas fa-subscript"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-superscript"
                  >
                    <i className="fas fa-superscript"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync"
                  >
                    <i className="fas fa-sync"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync-alt"
                  >
                    <i className="fas fa-sync-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-table"
                  >
                    <i className="fas fa-table"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tasks"
                  >
                    <i className="fas fa-tasks"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-text-height"
                  >
                    <i className="fas fa-text-height"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-text-width"
                  >
                    <i className="fas fa-text-width"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-th"
                  >
                    <i className="fas fa-th"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-th-large"
                  >
                    <i className="fas fa-th-large"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-th-list"
                  >
                    <i className="fas fa-th-list"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-trash"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-trash-alt"
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-underline"
                  >
                    <i className="fas fa-underline"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo"
                  >
                    <i className="fas fa-undo"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-undo-alt"
                  >
                    <i className="fas fa-undo-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-unlink"
                  >
                    <i className="fas fa-unlink"></i>
                  </button>
                  <h5 className="my-3">Files</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-archive"
                  >
                    <i className="fas fa-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clone"
                  >
                    <i className="fas fa-clone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-archive"
                  >
                    <i className="fas fa-file-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-audio"
                  >
                    <i className="fas fa-file-audio"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-code"
                  >
                    <i className="fas fa-file-code"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-excel"
                  >
                    <i className="fas fa-file-excel"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-image"
                  >
                    <i className="fas fa-file-image"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-pdf"
                  >
                    <i className="fas fa-file-pdf"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-powerpoint"
                  >
                    <i className="fas fa-file-powerpoint"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-video"
                  >
                    <i className="fas fa-file-video"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-word"
                  >
                    <i className="fas fa-file-word"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paste"
                  >
                    <i className="fas fa-paste"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-save"
                  >
                    <i className="fas fa-save"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sticky-note"
                  >
                    <i className="fas fa-sticky-note"></i>
                  </button>
                  <h5 className="my-3">Genders</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-genderless"
                  >
                    <i className="fas fa-genderless"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mars"
                  >
                    <i className="fas fa-mars"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mars-double"
                  >
                    <i className="fas fa-mars-double"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mars-stroke"
                  >
                    <i className="fas fa-mars-stroke"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mars-stroke-h"
                  >
                    <i className="fas fa-mars-stroke-h"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mars-stroke-v"
                  >
                    <i className="fas fa-mars-stroke-v"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-mercury"
                  >
                    <i className="fas fa-mercury"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-neuter"
                  >
                    <i className="fas fa-neuter"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-transgender"
                  >
                    <i className="fas fa-transgender"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-transgender-alt"
                  >
                    <i className="fas fa-transgender-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-venus"
                  >
                    <i className="fas fa-venus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-venus-double"
                  >
                    <i className="fas fa-venus-double"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-venus-mars"
                  >
                    <i className="fas fa-venus-mars"></i>
                  </button>
                  <h5 className="my-3">Hands</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-lizard"
                  >
                    <i className="fas fa-hand-lizard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-paper"
                  >
                    <i className="fas fa-hand-paper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-peace"
                  >
                    <i className="fas fa-hand-peace"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-down"
                  >
                    <i className="fas fa-hand-point-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-left"
                  >
                    <i className="fas fa-hand-point-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-right"
                  >
                    <i className="fas fa-hand-point-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-point-up"
                  >
                    <i className="fas fa-hand-point-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-pointer"
                  >
                    <i className="fas fa-hand-pointer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-rock"
                  >
                    <i className="fas fa-hand-rock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-scissors"
                  >
                    <i className="fas fa-hand-scissors"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hand-spock"
                  >
                    <i className="fas fa-hand-spock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-handshake"
                  >
                    <i className="fas fa-handshake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-down"
                  >
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-up"
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <h5 className="my-3">Health</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-accessible-icon"
                  >
                    <i className="fab fa-accessible-icon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ambulance"
                  >
                    <i className="fas fa-ambulance"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-h-square"
                  >
                    <i className="fas fa-h-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heartbeat"
                  >
                    <i className="fas fa-heartbeat"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hospital"
                  >
                    <i className="fas fa-hospital"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-medkit"
                  >
                    <i className="fas fa-medkit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-square"
                  >
                    <i className="fas fa-plus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-stethoscope"
                  >
                    <i className="fas fa-stethoscope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-md"
                  >
                    <i className="fas fa-user-md"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-wheelchair"
                  >
                    <i className="fas fa-wheelchair"></i>
                  </button>
                  <h5 className="my-3">Images</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-adjust"
                  >
                    <i className="fas fa-adjust"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bolt"
                  >
                    <i className="fas fa-bolt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera"
                  >
                    <i className="fas fa-camera"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera-retro"
                  >
                    <i className="fas fa-camera-retro"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clone"
                  >
                    <i className="fas fa-clone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-compress"
                  >
                    <i className="fas fa-compress"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-expand"
                  >
                    <i className="fas fa-expand"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-dropper"
                  >
                    <i className="fas fa-eye-dropper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-slash"
                  >
                    <i className="fas fa-eye-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-image"
                  >
                    <i className="fas fa-file-image"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-film"
                  >
                    <i className="fas fa-film"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-id-badge"
                  >
                    <i className="fas fa-id-badge"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-id-card"
                  >
                    <i className="fas fa-id-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-image"
                  >
                    <i className="fas fa-image"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-images"
                  >
                    <i className="fas fa-images"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sliders-h"
                  >
                    <i className="fas fa-sliders-h"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tint"
                  >
                    <i className="fas fa-tint"></i>
                  </button>
                  <h5 className="my-3">Interfaces</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ban"
                  >
                    <i className="fas fa-ban"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-barcode"
                  >
                    <i className="fas fa-barcode"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bars"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-beer"
                  >
                    <i className="fas fa-beer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell-slash"
                  >
                    <i className="fas fa-bell-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bug"
                  >
                    <i className="fas fa-bug"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullhorn"
                  >
                    <i className="fas fa-bullhorn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullseye"
                  >
                    <i className="fas fa-bullseye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calculator"
                  >
                    <i className="fas fa-calculator"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-alt"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-check"
                  >
                    <i className="fas fa-calendar-check"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-minus"
                  >
                    <i className="fas fa-calendar-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-plus"
                  >
                    <i className="fas fa-calendar-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-times"
                  >
                    <i className="fas fa-calendar-times"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-certificate"
                  >
                    <i className="fas fa-certificate"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-check"
                  >
                    <i className="fas fa-check"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-check-circle"
                  >
                    <i className="fas fa-check-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-check-square"
                  >
                    <i className="fas fa-check-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-circle"
                  >
                    <i className="fas fa-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clipboard"
                  >
                    <i className="fas fa-clipboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clone"
                  >
                    <i className="fas fa-clone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud"
                  >
                    <i className="fas fa-cloud"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud-download-alt"
                  >
                    <i className="fas fa-cloud-download-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud-upload-alt"
                  >
                    <i className="fas fa-cloud-upload-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-coffee"
                  >
                    <i className="fas fa-coffee"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cog"
                  >
                    <i className="fas fa-cog"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cogs"
                  >
                    <i className="fas fa-cogs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-database"
                  >
                    <i className="fas fa-database"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-dot-circle"
                  >
                    <i className="fas fa-dot-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-download"
                  >
                    <i className="fas fa-download"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ellipsis-h"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ellipsis-v"
                  >
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-open"
                  >
                    <i className="fas fa-envelope-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation"
                  >
                    <i className="fas fa-exclamation"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation-circle"
                  >
                    <i className="fas fa-exclamation-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation-triangle"
                  >
                    <i className="fas fa-exclamation-triangle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-external-link-alt"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-external-link-square-alt"
                  >
                    <i className="fas fa-external-link-square-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-slash"
                  >
                    <i className="fas fa-eye-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-filter"
                  >
                    <i className="fas fa-filter"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag"
                  >
                    <i className="fas fa-flag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag-checkered"
                  >
                    <i className="fas fa-flag-checkered"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-frown"
                  >
                    <i className="fas fa-frown"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hashtag"
                  >
                    <i className="fas fa-hashtag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-history"
                  >
                    <i className="fas fa-history"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-home"
                  >
                    <i className="fas fa-home"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-i-cursor"
                  >
                    <i className="fas fa-i-cursor"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info"
                  >
                    <i className="fas fa-info"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info-circle"
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-language"
                  >
                    <i className="fas fa-language"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-magic"
                  >
                    <i className="fas fa-magic"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-meh"
                  >
                    <i className="fas fa-meh"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone"
                  >
                    <i className="fas fa-microphone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-microphone-slash"
                  >
                    <i className="fas fa-microphone-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus-circle"
                  >
                    <i className="fas fa-minus-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus-square"
                  >
                    <i className="fas fa-minus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paste"
                  >
                    <i className="fas fa-paste"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pencil-alt"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-circle"
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-square"
                  >
                    <i className="fas fa-plus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-qrcode"
                  >
                    <i className="fas fa-qrcode"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-question"
                  >
                    <i className="fas fa-question"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-question-circle"
                  >
                    <i className="fas fa-question-circle"></i>
                  </button>
                  <h5 className="my-3">Maps</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ambulance"
                  >
                    <i className="fas fa-ambulance"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-anchor"
                  >
                    <i className="fas fa-anchor"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-balance-scale"
                  >
                    <i className="fas fa-balance-scale"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bath"
                  >
                    <i className="fas fa-bath"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bed"
                  >
                    <i className="fas fa-bed"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-beer"
                  >
                    <i className="fas fa-beer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell-slash"
                  >
                    <i className="fas fa-bell-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bicycle"
                  >
                    <i className="fas fa-bicycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-binoculars"
                  >
                    <i className="fas fa-binoculars"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-birthday-cake"
                  >
                    <i className="fas fa-birthday-cake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-blind"
                  >
                    <i className="fas fa-blind"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bomb"
                  >
                    <i className="fas fa-bomb"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-book"
                  >
                    <i className="fas fa-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bookmark"
                  >
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-briefcase"
                  >
                    <i className="fas fa-briefcase"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-building"
                  >
                    <i className="fas fa-building"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-car"
                  >
                    <i className="fas fa-car"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-coffee"
                  >
                    <i className="fas fa-coffee"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-crosshairs"
                  >
                    <i className="fas fa-crosshairs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-dollar-sign"
                  >
                    <i className="fas fa-dollar-sign"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-slash"
                  >
                    <i className="fas fa-eye-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fighter-jet"
                  >
                    <i className="fas fa-fighter-jet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fire"
                  >
                    <i className="fas fa-fire"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fire-extinguisher"
                  >
                    <i className="fas fa-fire-extinguisher"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag"
                  >
                    <i className="fas fa-flag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag-checkered"
                  >
                    <i className="fas fa-flag-checkered"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flask"
                  >
                    <i className="fas fa-flask"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gamepad"
                  >
                    <i className="fas fa-gamepad"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gavel"
                  >
                    <i className="fas fa-gavel"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gift"
                  >
                    <i className="fas fa-gift"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-glass-martini"
                  >
                    <i className="fas fa-glass-martini"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-globe"
                  >
                    <i className="fas fa-globe"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-graduation-cap"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-h-square"
                  >
                    <i className="fas fa-h-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heartbeat"
                  >
                    <i className="fas fa-heartbeat"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-home"
                  >
                    <i className="fas fa-home"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hospital"
                  >
                    <i className="fas fa-hospital"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-image"
                  >
                    <i className="fas fa-image"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-images"
                  >
                    <i className="fas fa-images"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-industry"
                  >
                    <i className="fas fa-industry"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info"
                  >
                    <i className="fas fa-info"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info-circle"
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-key"
                  >
                    <i className="fas fa-key"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-leaf"
                  >
                    <i className="fas fa-leaf"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lemon"
                  >
                    <i className="fas fa-lemon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-life-ring"
                  >
                    <i className="fas fa-life-ring"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lightbulb"
                  >
                    <i className="fas fa-lightbulb"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-location-arrow"
                  >
                    <i className="fas fa-location-arrow"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-low-vision"
                  >
                    <i className="fas fa-low-vision"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-magnet"
                  >
                    <i className="fas fa-magnet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-male"
                  >
                    <i className="fas fa-male"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map"
                  >
                    <i className="fas fa-map"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-marker"
                  >
                    <i className="fas fa-map-marker"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-marker-alt"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-pin"
                  >
                    <i className="fas fa-map-pin"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-signs"
                  >
                    <i className="fas fa-map-signs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-medkit"
                  >
                    <i className="fas fa-medkit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-money-bill-alt"
                  >
                    <i className="fas fa-money-bill-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-motorcycle"
                  >
                    <i className="fas fa-motorcycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-music"
                  >
                    <i className="fas fa-music"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-newspaper"
                  >
                    <i className="fas fa-newspaper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paw"
                  >
                    <i className="fas fa-paw"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone"
                  >
                    <i className="fas fa-phone"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-square"
                  >
                    <i className="fas fa-phone-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-phone-volume"
                  >
                    <i className="fas fa-phone-volume"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plane"
                  >
                    <i className="fas fa-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plug"
                  >
                    <i className="fas fa-plug"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-square"
                  >
                    <i className="fas fa-plus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-print"
                  >
                    <i className="fas fa-print"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-recycle"
                  >
                    <i className="fas fa-recycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-road"
                  >
                    <i className="fas fa-road"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rocket"
                  >
                    <i className="fas fa-rocket"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-search"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-search-minus"
                  >
                    <i className="fas fa-search-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-search-plus"
                  >
                    <i className="fas fa-search-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ship"
                  >
                    <i className="fas fa-ship"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-bag"
                  >
                    <i className="fas fa-shopping-bag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-basket"
                  >
                    <i className="fas fa-shopping-basket"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shower"
                  >
                    <i className="fas fa-shower"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-street-view"
                  >
                    <i className="fas fa-street-view"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-subway"
                  >
                    <i className="fas fa-subway"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-suitcase"
                  >
                    <i className="fas fa-suitcase"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tag"
                  >
                    <i className="fas fa-tag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tags"
                  >
                    <i className="fas fa-tags"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-taxi"
                  >
                    <i className="fas fa-taxi"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbtack"
                  >
                    <i className="fas fa-thumbtack"></i>
                  </button>
                  <h5 className="my-3">Objects</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ambulance"
                  >
                    <i className="fas fa-ambulance"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-anchor"
                  >
                    <i className="fas fa-anchor"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-archive"
                  >
                    <i className="fas fa-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-balance-scale"
                  >
                    <i className="fas fa-balance-scale"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bath"
                  >
                    <i className="fas fa-bath"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bed"
                  >
                    <i className="fas fa-bed"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-beer"
                  >
                    <i className="fas fa-beer"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bicycle"
                  >
                    <i className="fas fa-bicycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-binoculars"
                  >
                    <i className="fas fa-binoculars"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-birthday-cake"
                  >
                    <i className="fas fa-birthday-cake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bomb"
                  >
                    <i className="fas fa-bomb"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-book"
                  >
                    <i className="fas fa-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bookmark"
                  >
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-briefcase"
                  >
                    <i className="fas fa-briefcase"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bug"
                  >
                    <i className="fas fa-bug"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-building"
                  >
                    <i className="fas fa-building"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullhorn"
                  >
                    <i className="fas fa-bullhorn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullseye"
                  >
                    <i className="fas fa-bullseye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bus"
                  >
                    <i className="fas fa-bus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calculator"
                  >
                    <i className="fas fa-calculator"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-alt"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera"
                  >
                    <i className="fas fa-camera"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera-retro"
                  >
                    <i className="fas fa-camera-retro"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-car"
                  >
                    <i className="fas fa-car"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-clipboard"
                  >
                    <i className="fas fa-clipboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud"
                  >
                    <i className="fas fa-cloud"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-coffee"
                  >
                    <i className="fas fa-coffee"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cog"
                  >
                    <i className="fas fa-cog"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cogs"
                  >
                    <i className="fas fa-cogs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-compass"
                  >
                    <i className="fas fa-compass"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-copy"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cube"
                  >
                    <i className="fas fa-cube"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cubes"
                  >
                    <i className="fas fa-cubes"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cut"
                  >
                    <i className="fas fa-cut"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-open"
                  >
                    <i className="fas fa-envelope-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-dropper"
                  >
                    <i className="fas fa-eye-dropper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fax"
                  >
                    <i className="fas fa-fax"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fighter-jet"
                  >
                    <i className="fas fa-fighter-jet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-film"
                  >
                    <i className="fas fa-film"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fire"
                  >
                    <i className="fas fa-fire"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fire-extinguisher"
                  >
                    <i className="fas fa-fire-extinguisher"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag"
                  >
                    <i className="fas fa-flag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flag-checkered"
                  >
                    <i className="fas fa-flag-checkered"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-flask"
                  >
                    <i className="fas fa-flask"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-futbol"
                  >
                    <i className="fas fa-futbol"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gamepad"
                  >
                    <i className="fas fa-gamepad"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gavel"
                  >
                    <i className="fas fa-gavel"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gem"
                  >
                    <i className="fas fa-gem"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gift"
                  >
                    <i className="fas fa-gift"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-glass-martini"
                  >
                    <i className="fas fa-glass-martini"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-globe"
                  >
                    <i className="fas fa-globe"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-graduation-cap"
                  >
                    <i className="fas fa-graduation-cap"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hdd"
                  >
                    <i className="fas fa-hdd"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-headphones"
                  >
                    <i className="fas fa-headphones"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-home"
                  >
                    <i className="fas fa-home"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hospital"
                  >
                    <i className="fas fa-hospital"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hourglass"
                  >
                    <i className="fas fa-hourglass"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-image"
                  >
                    <i className="fas fa-image"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-images"
                  >
                    <i className="fas fa-images"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-industry"
                  >
                    <i className="fas fa-industry"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-key"
                  >
                    <i className="fas fa-key"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-keyboard"
                  >
                    <i className="fas fa-keyboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-laptop"
                  >
                    <i className="fas fa-laptop"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-leaf"
                  >
                    <i className="fas fa-leaf"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lemon"
                  >
                    <i className="fas fa-lemon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-life-ring"
                  >
                    <i className="fas fa-life-ring"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lightbulb"
                  >
                    <i className="fas fa-lightbulb"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lock"
                  >
                    <i className="fas fa-lock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lock-open"
                  >
                    <i className="fas fa-lock-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-magic"
                  >
                    <i className="fas fa-magic"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-magnet"
                  >
                    <i className="fas fa-magnet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map"
                  >
                    <i className="fas fa-map"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-marker"
                  >
                    <i className="fas fa-map-marker"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-marker-alt"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                  <h5 className="my-3">Payments & Shopping</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-amazon-pay"
                  >
                    <i className="fab fa-amazon-pay"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-apple-pay"
                  >
                    <i className="fab fa-apple-pay"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bookmark"
                  >
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bullhorn"
                  >
                    <i className="fas fa-bullhorn"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera"
                  >
                    <i className="fas fa-camera"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-camera-retro"
                  >
                    <i className="fas fa-camera-retro"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cart-arrow-down"
                  >
                    <i className="fas fa-cart-arrow-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cart-plus"
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-amazon-pay"
                  >
                    <i className="fab fa-cc-amazon-pay"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-amex"
                  >
                    <i className="fab fa-cc-amex"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-apple-pay"
                  >
                    <i className="fab fa-cc-apple-pay"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-diners-club"
                  >
                    <i className="fab fa-cc-diners-club"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-discover"
                  >
                    <i className="fab fa-cc-discover"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-jcb"
                  >
                    <i className="fab fa-cc-jcb"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-mastercard"
                  >
                    <i className="fab fa-cc-mastercard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-paypal"
                  >
                    <i className="fab fa-cc-paypal"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-stripe"
                  >
                    <i className="fab fa-cc-stripe"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-cc-visa"
                  >
                    <i className="fab fa-cc-visa"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-certificate"
                  >
                    <i className="fas fa-certificate"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-credit-card"
                  >
                    <i className="fas fa-credit-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-ethereum"
                  >
                    <i className="fab fa-ethereum"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gem"
                  >
                    <i className="fas fa-gem"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gem"
                  >
                    <i className="fas fa-gem"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-gift"
                  >
                    <i className="fas fa-gift"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-google-wallet"
                  >
                    <i className="fab fa-google-wallet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-handshake"
                  >
                    <i className="fas fa-handshake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-key"
                  >
                    <i className="fas fa-key"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-paypal"
                  >
                    <i className="fab fa-paypal"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-bag"
                  >
                    <i className="fas fa-shopping-bag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-basket"
                  >
                    <i className="fas fa-shopping-basket"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-star"
                  >
                    <i className="fas fa-star"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-stripe"
                  >
                    <i className="fab fa-stripe"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-stripe-s"
                  >
                    <i className="fab fa-stripe-s"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tag"
                  >
                    <i className="fas fa-tag"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-tags"
                  >
                    <i className="fas fa-tags"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-down"
                  >
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-up"
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-trophy"
                  >
                    <i className="fas fa-trophy"></i>
                  </button>
                  <h5 className="my-3">Shapes</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bookmark"
                  >
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-certificate"
                  >
                    <i className="fas fa-certificate"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-circle"
                  >
                    <i className="fas fa-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cloud"
                  >
                    <i className="fas fa-cloud"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-comment"
                  >
                    <i className="fas fa-comment"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-heart"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-map-marker"
                  >
                    <i className="fas fa-map-marker"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-play"
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-square"
                  >
                    <i className="fas fa-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-star"
                  >
                    <i className="fas fa-star"></i>
                  </button>
                  <h5 className="my-3">Spinners</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-asterisk"
                  >
                    <i className="fas fa-asterisk"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-certificate"
                  >
                    <i className="fas fa-certificate"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-circle-notch"
                  >
                    <i className="fas fa-circle-notch"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cog"
                  >
                    <i className="fas fa-cog"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-compass"
                  >
                    <i className="fas fa-compass"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-crosshairs"
                  >
                    <i className="fas fa-crosshairs"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-life-ring"
                  >
                    <i className="fas fa-life-ring"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-snowflake"
                  >
                    <i className="fas fa-snowflake"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-spinner"
                  >
                    <i className="fas fa-spinner"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sun"
                  >
                    <i className="fas fa-sun"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sync"
                  >
                    <i className="fas fa-sync"></i>
                  </button>
                  <h5 className="my-3">Sports</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-baseball-ball"
                  >
                    <i className="fas fa-baseball-ball"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-basketball-ball"
                  >
                    <i className="fas fa-basketball-ball"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bowling-ball"
                  >
                    <i className="fas fa-bowling-ball"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-football-ball"
                  >
                    <i className="fas fa-football-ball"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-futbol"
                  >
                    <i className="fas fa-futbol"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-futbol"
                  >
                    <i className="fas fa-futbol"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-golf-ball"
                  >
                    <i className="fas fa-golf-ball"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-hockey-puck"
                  >
                    <i className="fas fa-hockey-puck"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-quidditch"
                  >
                    <i className="fas fa-quidditch"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-table-tennis"
                  >
                    <i className="fas fa-table-tennis"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-volleyball-ball"
                  >
                    <i className="fas fa-volleyball-ball"></i>
                  </button>
                  <h5 className="my-3">Status</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ban"
                  >
                    <i className="fas fa-ban"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-battery-empty"
                  >
                    <i className="fas fa-battery-empty"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-battery-full"
                  >
                    <i className="fas fa-battery-full"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-battery-half"
                  >
                    <i className="fas fa-battery-half"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-battery-quarter"
                  >
                    <i className="fas fa-battery-quarter"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-battery-three-quarters"
                  >
                    <i className="fas fa-battery-three-quarters"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell"
                  >
                    <i className="fas fa-bell"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bell-slash"
                  >
                    <i className="fas fa-bell-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar"
                  >
                    <i className="fas fa-calendar"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-alt"
                  >
                    <i className="fas fa-calendar-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-check"
                  >
                    <i className="fas fa-calendar-check"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-minus"
                  >
                    <i className="fas fa-calendar-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-plus"
                  >
                    <i className="fas fa-calendar-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-calendar-times"
                  >
                    <i className="fas fa-calendar-times"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cart-arrow-down"
                  >
                    <i className="fas fa-cart-arrow-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-cart-plus"
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation"
                  >
                    <i className="fas fa-exclamation"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation-circle"
                  >
                    <i className="fas fa-exclamation-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-exclamation-triangle"
                  >
                    <i className="fas fa-exclamation-triangle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye"
                  >
                    <i className="fas fa-eye"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eye-slash"
                  >
                    <i className="fas fa-eye-slash"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info"
                  >
                    <i className="fas fa-info"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-info-circle"
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lock"
                  >
                    <i className="fas fa-lock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-lock-open"
                  >
                    <i className="fas fa-lock-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus"
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus-circle"
                  >
                    <i className="fas fa-minus-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-minus-square"
                  >
                    <i className="fas fa-minus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-circle"
                  >
                    <i className="fas fa-plus-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plus-square"
                  >
                    <i className="fas fa-plus-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-question"
                  >
                    <i className="fas fa-question"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-question-circle"
                  >
                    <i className="fas fa-question-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shield-alt"
                  >
                    <i className="fas fa-shield-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sign-in-alt"
                  >
                    <i className="fas fa-sign-in-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sign-out-alt"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thermometer-empty"
                  >
                    <i className="fas fa-thermometer-empty"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thermometer-full"
                  >
                    <i className="fas fa-thermometer-full"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thermometer-half"
                  >
                    <i className="fas fa-thermometer-half"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thermometer-quarter"
                  >
                    <i className="fas fa-thermometer-quarter"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thermometer-three-quarters"
                  >
                    <i className="fas fa-thermometer-three-quarters"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-down"
                  >
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbs-up"
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-toggle-off"
                  >
                    <i className="fas fa-toggle-off"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-toggle-on"
                  >
                    <i className="fas fa-toggle-on"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-unlock"
                  >
                    <i className="fas fa-unlock"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-unlock-alt"
                  >
                    <i className="fas fa-unlock-alt"></i>
                  </button>
                  <h5 className="my-3">Users & People</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-accessible-icon"
                  >
                    <i className="fab fa-accessible-icon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-book"
                  >
                    <i className="fas fa-address-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-address-card"
                  >
                    <i className="fas fa-address-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bed"
                  >
                    <i className="fas fa-bed"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-blind"
                  >
                    <i className="fas fa-blind"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-child"
                  >
                    <i className="fas fa-child"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-female"
                  >
                    <i className="fas fa-female"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-frown"
                  >
                    <i className="fas fa-frown"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-id-badge"
                  >
                    <i className="fas fa-id-badge"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-id-card"
                  >
                    <i className="fas fa-id-card"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-male"
                  >
                    <i className="fas fa-male"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-meh"
                  >
                    <i className="fas fa-meh"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-power-off"
                  >
                    <i className="fas fa-power-off"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-smile"
                  >
                    <i className="fas fa-smile"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-street-view"
                  >
                    <i className="fas fa-street-view"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user"
                  >
                    <i className="fas fa-user"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-circle"
                  >
                    <i className="fas fa-user-circle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-md"
                  >
                    <i className="fas fa-user-md"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-plus"
                  >
                    <i className="fas fa-user-plus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-secret"
                  >
                    <i className="fas fa-user-secret"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-user-times"
                  >
                    <i className="fas fa-user-times"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-users"
                  >
                    <i className="fas fa-users"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-wheelchair"
                  >
                    <i className="fas fa-wheelchair"></i>
                  </button>
                  <h5 className="my-3">Vehicles</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fab .fa-accessible-icon"
                  >
                    <i className="fab fa-accessible-icon"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ambulance"
                  >
                    <i className="fas fa-ambulance"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bicycle"
                  >
                    <i className="fas fa-bicycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bus"
                  >
                    <i className="fas fa-bus"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-car"
                  >
                    <i className="fas fa-car"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-fighter-jet"
                  >
                    <i className="fas fa-fighter-jet"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-motorcycle"
                  >
                    <i className="fas fa-motorcycle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paper-plane"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-plane"
                  >
                    <i className="fas fa-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-rocket"
                  >
                    <i className="fas fa-rocket"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-ship"
                  >
                    <i className="fas fa-ship"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-shopping-cart"
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-space-shuttle"
                  >
                    <i className="fas fa-space-shuttle"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-subway"
                  >
                    <i className="fas fa-subway"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-taxi"
                  >
                    <i className="fas fa-taxi"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-train"
                  >
                    <i className="fas fa-train"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-truck"
                  >
                    <i className="fas fa-truck"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-wheelchair"
                  >
                    <i className="fas fa-wheelchair"></i>
                  </button>
                  <h5 className="my-3">Writing</h5>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-archive"
                  >
                    <i className="fas fa-archive"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-book"
                  >
                    <i className="fas fa-book"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-bookmark"
                  >
                    <i className="fas fa-bookmark"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-edit"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope"
                  >
                    <i className="fas fa-envelope"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-envelope-open"
                  >
                    <i className="fas fa-envelope-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-eraser"
                  >
                    <i className="fas fa-eraser"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file"
                  >
                    <i className="fas fa-file"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-file-alt"
                  >
                    <i className="fas fa-file-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder"
                  >
                    <i className="fas fa-folder"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-folder-open"
                  >
                    <i className="fas fa-folder-open"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-keyboard"
                  >
                    <i className="fas fa-keyboard"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-newspaper"
                  >
                    <i className="fas fa-newspaper"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paper-plane"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paperclip"
                  >
                    <i className="fas fa-paperclip"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-paragraph"
                  >
                    <i className="fas fa-paragraph"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pen-square"
                  >
                    <i className="fas fa-pen-square"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-pencil-alt"
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-quote-left"
                  >
                    <i className="fas fa-quote-left"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-quote-right"
                  >
                    <i className="fas fa-quote-right"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-sticky-note"
                  >
                    <i className="fas fa-sticky-note"></i>
                  </button>
                  <button
                    className="btn btn-default btn-md"
                    data-toggle="tooltip"
                    title=".fas .fa-thumbtack"
                  >
                    <i className="fas fa-thumbtack"></i>
                  </button>

                  <div className="d-block">
                    <h5 className="my-3">Social Icons Color Rounded</h5>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-adn"
                    >
                      <i className="fab fa-adn"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-apple"
                    >
                      <i className="fab fa-apple"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-android"
                    >
                      <i className="fab fa-android"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-amazon"
                    >
                      <i className="fab fa-amazon"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-aws"
                    >
                      <i className="fab fa-aws"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-bitbucket"
                    >
                      <i className="fab fa-bitbucket"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-bitcoin"
                    >
                      <i className="fab fa-bitcoin"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-btc"
                    >
                      <i className="fab fa-btc"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-css3"
                    >
                      <i className="fab fa-css3"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-dribbble"
                    >
                      <i className="fab fa-dribbble"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-dropbox"
                    >
                      <i className="fab fa-dropbox"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook-f"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook-messenger"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-flickr"
                    >
                      <i className="fab fa-flickr"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-foursquare"
                    >
                      <i className="fab fa-foursquare"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github-alt"
                    >
                      <i className="fab fa-github-alt"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github-square"
                    >
                      <i className="fab fa-github-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google-plus"
                    >
                      <i className="fab fa-google-plus"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google-plus-square"
                    >
                      <i className="fab fa-google-plus-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-gulp"
                    >
                      <i className="fab fa-gulp"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-grunt"
                    >
                      <i className="fab fa-grunt"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-hacker-news"
                    >
                      <i className="fab fa-hacker-news"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-html5"
                    >
                      <i className="fab fa-html5"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-laravel"
                    >
                      <i className="fab fa-laravel"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-lastfm"
                    >
                      <i className="fab fa-lastfm"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-lastfm-square"
                    >
                      <i className="fab fa-lastfm-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linkedin"
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linkedin-in"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linux"
                    >
                      <i className="fab fa-linux"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-maxcdn"
                    >
                      <i className="fab fa-maxcdn"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-node-js"
                    >
                      <i className="fab fa-node-js"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-paypal"
                    >
                      <i className="fab fa-paypal"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pagelines"
                    >
                      <i className="fab fa-pagelines"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pinterest"
                    >
                      <i className="fab fa-pinterest"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pinterest-square"
                    >
                      <i className="fab fa-pinterest-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-quora"
                    >
                      <i className="fab fa-quora"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit"
                    >
                      <i className="fab fa-reddit"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit-alien"
                    >
                      <i className="fab fa-reddit-alien"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit-square"
                    >
                      <i className="fab fa-reddit-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-renren"
                    >
                      <i className="fab fa-renren"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-skype"
                    >
                      <i className="fab fa-skype"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-stack-exchange"
                    >
                      <i className="fab fa-stack-exchange"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-stack-overflow"
                    >
                      <i className="fab fa-stack-overflow"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-trello"
                    >
                      <i className="fab fa-trello"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-tumblr"
                    >
                      <i className="fab fa-tumblr"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-tumblr-square"
                    >
                      <i className="fab fa-tumblr-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-twitter-square"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-vimeo-square"
                    >
                      <i className="fab fa-vimeo-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-vk"
                    >
                      <i className="fab fa-vk"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-weibo"
                    >
                      <i className="fab fa-weibo"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-windows"
                    >
                      <i className="fab fa-windows"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-xing"
                    >
                      <i className="fab fa-xing"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-xing-square"
                    >
                      <i className="fab fa-xing-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-youtube"
                    >
                      <i className="fab fa-youtube"></i>
                    </button>
                    <button
                      className="btn color-icons icon-rounded-circle"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-youtube-square"
                    >
                      <i className="fab fa-youtube-square"></i>
                    </button>
                    <h5 className="my-3">Social Icons Color Flatted</h5>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-adn"
                    >
                      <i className="fab fa-adn"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-apple"
                    >
                      <i className="fab fa-apple"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-android"
                    >
                      <i className="fab fa-android"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-amazon"
                    >
                      <i className="fab fa-amazon"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-aws"
                    >
                      <i className="fab fa-aws"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-bitbucket"
                    >
                      <i className="fab fa-bitbucket"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-bitcoin"
                    >
                      <i className="fab fa-bitcoin"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-btc"
                    >
                      <i className="fab fa-btc"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-css3"
                    >
                      <i className="fab fa-css3"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-dribbble"
                    >
                      <i className="fab fa-dribbble"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-dropbox"
                    >
                      <i className="fab fa-dropbox"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook"
                    >
                      <i className="fab fa-facebook"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook-f"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-facebook-messenger"
                    >
                      <i className="fab fa-facebook-messenger"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-flickr"
                    >
                      <i className="fab fa-flickr"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-foursquare"
                    >
                      <i className="fab fa-foursquare"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github-alt"
                    >
                      <i className="fab fa-github-alt"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-github-square"
                    >
                      <i className="fab fa-github-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google-plus"
                    >
                      <i className="fab fa-google-plus"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-google-plus-square"
                    >
                      <i className="fab fa-google-plus-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-gulp"
                    >
                      <i className="fab fa-gulp"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-grunt"
                    >
                      <i className="fab fa-grunt"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-hacker-news"
                    >
                      <i className="fab fa-hacker-news"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-html5"
                    >
                      <i className="fab fa-html5"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-laravel"
                    >
                      <i className="fab fa-laravel"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-lastfm"
                    >
                      <i className="fab fa-lastfm"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-lastfm-square"
                    >
                      <i className="fab fa-lastfm-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linkedin"
                    >
                      <i className="fab fa-linkedin"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linkedin-in"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-linux"
                    >
                      <i className="fab fa-linux"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-maxcdn"
                    >
                      <i className="fab fa-maxcdn"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-node-js"
                    >
                      <i className="fab fa-node-js"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-paypal"
                    >
                      <i className="fab fa-paypal"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pagelines"
                    >
                      <i className="fab fa-pagelines"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pinterest"
                    >
                      <i className="fab fa-pinterest"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-pinterest-square"
                    >
                      <i className="fab fa-pinterest-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-quora"
                    >
                      <i className="fab fa-quora"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit"
                    >
                      <i className="fab fa-reddit"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit-alien"
                    >
                      <i className="fab fa-reddit-alien"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-reddit-square"
                    >
                      <i className="fab fa-reddit-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-renren"
                    >
                      <i className="fab fa-renren"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-skype"
                    >
                      <i className="fab fa-skype"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-stack-exchange"
                    >
                      <i className="fab fa-stack-exchange"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-stack-overflow"
                    >
                      <i className="fab fa-stack-overflow"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-trello"
                    >
                      <i className="fab fa-trello"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-tumblr"
                    >
                      <i className="fab fa-tumblr"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-tumblr-square"
                    >
                      <i className="fab fa-tumblr-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-twitter-square"
                    >
                      <i className="fab fa-twitter-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-vimeo-square"
                    >
                      <i className="fab fa-vimeo-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-vk"
                    >
                      <i className="fab fa-vk"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-weibo"
                    >
                      <i className="fab fa-weibo"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-windows"
                    >
                      <i className="fab fa-windows"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-xing"
                    >
                      <i className="fab fa-xing"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-xing-square"
                    >
                      <i className="fab fa-xing-square"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-youtube"
                    >
                      <i className="fab fa-youtube"></i>
                    </button>
                    <button
                      className="btn color-icons icon-flatted"
                      data-toggle="tooltip"
                      title=".color-icons > .fab .fa-youtube-square"
                    >
                      <i className="fab fa-youtube-square"></i>
                    </button>
                  </div>
                </div>
                
                {/* {% for icon, font in fontawesome %}
                  <h5 className="my-3">{{ icon }}</h5>
                    {% for icon in font %}
                    <button className="btn btn-default btn-md" data-toggle="tooltip" title="{{icon}}">
                      <i className="{{ icon|replace({".":""}) }}"></i>
                    </button>
                  {% endfor %}
                {% endfor %} */}

                {/* <div className="d-block">
                      <h5 className="my-3">Social Icons Color Rounded</h5>
                      {% for icons, social in socialicons %}
                        {% for icon, icons in social %}
                          <button className="btn color-icons icon-rounded-circle" data-toggle="tooltip" title="{{ icons }}">
                            <i className="{{ icon|replace({".":""}) }}"></i>
                          </button>
                        {% endfor %}
                      {% endfor %}
                      <h5 className="my-3">Social Icons Color Flatted</h5>
                      {% for icons, social in socialicons %}
                        {% for icon, icons in social %}
                          <button className="btn color-icons icon-flatted" data-toggle="tooltip" title="{{ icons }}">
                            <i className="{{ icon|replace({".":""}) }}"></i>
                          </button>
                        {% endfor %}
                      {% endfor %}
                    </div> */}
              </Col>
            </Row>
            <h3>Backgrounds</h3>
            <Row id="background">
              <Container fluid>
                <div
                  className="d-flex align-items-center mb-2"
                    style={{height:"200px",backgroundImage: 'url(/images/unsplash-stil-336188.jpg)'}}
                  data-overlay="overlay-theme"
                >
                  <h4 className="mx-auto text-light">.overlay-theme</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2"
                    style={{height:"200px",backgroundImage: 'url(/images/unsplash-stil-336188.jpg)'}}
                  data-overlay="overlay-warning"
                >
                  <h4 className="mx-auto text-light">.overlay-warning</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2"
                    style={{height:"200px",backgroundImage: 'url(/images/unsplash-stil-336188.jpg)'}}
                  data-overlay="overlay-secondary"
                >
                  <h4 className="mx-auto text-light">.overlay-secondary</h4>
                </div>
                <div
                  className="d-flex align-items-center mb-2" style={{height:"200px",backgroundImage: 'url(/images/unsplash-stil-336188.jpg)'}}
                  data-overlay="overlay-dark"
                >
                  <h4 className="mx-auto text-light">.overlay-dark</h4>
                </div>
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default DocumentationPage;
