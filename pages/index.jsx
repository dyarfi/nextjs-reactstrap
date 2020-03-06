import React from "react";
import { connect } from "react-redux";

import MainLayout from "../layout/MainLayout";
import HomeContainer from "../components/container/HomeContainer";
import HeadHome from "../components/head";

class Index extends React.Component {
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
        <HeadHome title="Home" />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <HomeContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default connect(state => state)(Index);
