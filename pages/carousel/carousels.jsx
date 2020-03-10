import React from "react";

import MainLayout from "../../layout/MainLayout";
import CarouselsContainer from "../../components/container/carousel/CarouselsContainer";
import HeadDefault from "../../components/HeadDefault";

class Carousels extends React.Component {
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
        <HeadDefault title="Carousels" />
        <MainLayout>
          <CarouselsContainer />
        </MainLayout>
      </>
    );
  }
}

export default Carousels;
