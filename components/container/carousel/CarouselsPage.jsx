import React, { memo } from 'react';
import {
  Row,
  Col,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const CarouselsPage = memo(props => {
  const {
    /* slides */
    SLIDES,
    activeIndex,
    setAnimating,
    next,
    previous,
    goToIndex,
  } = props;

  const slides = SLIDES.carousels.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-fluid" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <h1>Carousel</h1>
      <Col lg="6">
        <Row>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            id="key1"
          >
            <CarouselIndicators
              items={SLIDES.carousels}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Row>
      </Col>
    </>
  );
});

export default CarouselsPage;
