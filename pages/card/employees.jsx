import React from "react";

import MainLayout from "../../layout/MainLayout";
import EmployeeContainer from "../../components/container/card/EmployeeContainer";
import HeadHome from "../../components/head";

class Employees extends React.Component {
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
        <HeadHome title="Employees" />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <EmployeeContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default Employees;
