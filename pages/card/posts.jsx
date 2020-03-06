import React from "react";

import MainLayout from "../../layout/MainLayout";
import PostsContainer from "../../components/container/card/PostsContainer";
import HeadHome from "../../components/head";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res } = props.ctx;

    // console.log(storeLayout);
    // return { storeLayout };
  }

  render() {
    const { dispatch, storeLayout } = this.props;
    return (
      <>
        <HeadHome title="Posts" />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <PostsContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Posts;
