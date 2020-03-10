import React from "react";

import MainLayout from "../../layout/MainLayout";
import TypographyContainer from "../../components/container/page/TypographyContainer";
import HeadHome from "../../components/HeadDefault";

class Typography extends React.Component {
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
        <HeadHome title="Typography" />
        <MainLayout>
          <TypographyContainer />
        </MainLayout>
      </>
    );
  }
}

export default Typography;
