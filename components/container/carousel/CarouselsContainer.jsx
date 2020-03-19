/** npm packages */
import React, { useState } from 'react';
// import propTypes from 'prop-types';

/** components */
import CarouselsPage from './CarouselsPage';

/* slides */
import { SLIDES } from '../../../constants/slides';

function CarouselsContainer({ dispatch, storeLayout }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === SLIDES.carousels.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? SLIDES.carousels.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const props = {
    dispatch,
    storeLayout,
    /* slides */
    SLIDES,
    activeIndex,
    setAnimating,
    next,
    previous,
    goToIndex,
  };

  return <CarouselsPage {...props} />;
}

// CarouselsContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default CarouselsContainer;
