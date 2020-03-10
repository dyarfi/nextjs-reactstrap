import React from "react";

import MainLayout from "../../layout/MainLayout";
import DocumentationContainer from "../../components/container/page/DocumentationContainer";
import HeadHome from "../../components/HeadDefault";

class Documentation extends React.Component {
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
        <HeadHome title="Documentation" />
        <MainLayout>
          <DocumentationContainer />
        </MainLayout>
      </>
    );
  }
}

export default Documentation;
