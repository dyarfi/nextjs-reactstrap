/** npm packages */
import React from 'react';
// import propTypes from 'prop-types';

/** components */
import PostsPage from './PostsPage';

function PostsContainer({ dispatch, storeLayout }) {
  const props = {
    dispatch,
    storeLayout,
  };

  return <PostsPage {...props} />;
}

// PostsContainer.propTypes = {
//   isMobile: propTypes.bool.isRequired,
// };

export default PostsContainer;
