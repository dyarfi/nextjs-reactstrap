import React from 'react';

import SingleLayout from '../../layout/SingleLayout';
import LoginContainer from '../../components/container/page/LoginContainer';
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
        <HeadDefault title="Profile" />
        <SingleLayout>
          <LoginContainer />
        </SingleLayout>
      </>
    );
  }
}

export default Profile;
