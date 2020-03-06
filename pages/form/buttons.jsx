import React from "react";

import MainLayout from "../../layout/MainLayout";
import ButtonsContainer from "../../components/container/form/ButtonsContainer";
import HeadHome from "../../components/head";

class Buttons extends React.Component {
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
        <HeadHome title="Buttons" />
        <MainLayout>
          <ButtonsContainer />
        </MainLayout>
      </>
    );
  }
}

export default Buttons;
