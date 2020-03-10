import React from "react";

import MainLayout from "../../layout/MainLayout";
import FormsContainer from "../../components/container/form/FormsContainer";
import HeadHome from "../../components/HeadDefault";

class Forms extends React.Component {
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
        <HeadHome title="Forms" />
        <MainLayout>
          <FormsContainer />
        </MainLayout>
      </>
    );
  }
}

export default Forms;
