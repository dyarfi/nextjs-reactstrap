import React from 'react';

import MainLayout from '../../layout/MainLayout';
import DocumentationContainer from '../../components/container/page/DocumentationContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Documentation extends React.Component {
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
          title="Documentation | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout>
          <DocumentationContainer />
        </MainLayout>
      </>
    );
  }
}

export default Documentation;
