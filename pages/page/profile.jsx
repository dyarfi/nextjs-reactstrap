import React from 'react';

import MainLayout from '../../layout/MainLayout';
import ProfileContainer from '../../components/container/page/ProfileContainer';
import HeadDefault from '../../layout/head/HeadDefault';

class Profile extends React.Component {
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
          title="Profile | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout activeLink="page.profile">
          <ProfileContainer />
        </MainLayout>
      </>
    );
  }
}

export default Profile;
