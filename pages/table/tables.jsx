import React from "react";

import MainLayout from "../../layout/MainLayout";
import TableContainer from "../../components/container/table/TableContainer";
import HeadHome from "../../components/HeadDefault";

class Tables extends React.Component {
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
        <HeadHome title="Tables" />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <TableContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Tables;
