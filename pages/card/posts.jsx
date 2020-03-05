import React from "react";

import MainLayout from "../../layout/MainLayout";
import PostsContainer from "../../components/container/card/PostsContainer";
import HeadHome from "../../components/head";
import Footer from "../../components/footer";

function Posts(props) {
  const { dispatch, storeLayout } = props;
  return (
    <>
      <HeadHome title="Posts" />
      <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
        <PostsContainer dispatch={dispatch} storeLayout={storeLayout} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default Posts;
