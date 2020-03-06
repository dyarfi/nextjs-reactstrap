import React from "react";

import MainLayout from "../../layout/MainLayout";
import SettingContainer from "../../components/container/page/SettingContainer";
import HeadHome from "../../components/head";

class Setting extends React.Component {
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
        <HeadHome title="Setting" />
        <MainLayout>
          <SettingContainer />
        </MainLayout>
      </>
    );
  }
}

export default Setting;
