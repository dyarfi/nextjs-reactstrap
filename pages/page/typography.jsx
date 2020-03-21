import React from 'react';

import MainLayout from '../../layout/MainLayout';
import TypographyContainer from '../../components/container/page/TypographyContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Typography extends React.Component {
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
          title="Typography | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout activeLink="typography">
          <TypographyContainer />
        </MainLayout>
      </>
    );
  }
}

export default Typography;
