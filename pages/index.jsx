import React from 'react';
import { connect } from 'react-redux';

import MainLayout from '../layout/MainLayout';
import HomeContainer from '../components/container/HomeContainer';
import HeadDefault from '../layout/head/HeadDefault';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res } = props.ctx;
  }

  render() {
    const { dispatch, storeLayout } = this.props;

    return (
      <>
        <HeadDefault
          title="Home | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
          <HomeContainer dispatch={dispatch} storeLayout={storeLayout} />
        </MainLayout>
      </>
    );
  }
}

export default connect(state => state)(Index);
