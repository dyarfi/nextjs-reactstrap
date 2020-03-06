import React from "react";

import MainLayout from "../../layout/MainLayout";
import ProfileContainer from "../../components/container/page/ProfileContainer";
import HeadHome from "../../components/head";

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
        <HeadHome title="Profile" />
        <MainLayout>
          <ProfileContainer />
        </MainLayout>
      </>
    );
  }
}

export default Profile;
