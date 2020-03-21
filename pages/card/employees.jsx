import React from 'react';

import MainLayout from '../../layout/MainLayout';
import EmployeeContainer from '../../components/container/card/EmployeeContainer';
import HeadDefault from '../../layout/head/HeadDefault';
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  static async getInitialProps(props) {
    const { store, isServer, req, res, query } = props.ctx;
    const { id } = query;

    return { id };
  }

  render() {
    const { dispatch, storeLayout, id } = this.props;
    return (
      <>
        <HeadDefault
          title="Employees | Next.JS with Reactstrap (React dashboard web application)"
          description="NextJS with Reactstrap components with SCSS library, a NextJS dashboard template."
        />
        <MainLayout
          activeLink="employees"
          dispatch={dispatch}
          storeLayout={storeLayout}
        >
          <EmployeeContainer
            dispatch={dispatch}
            storeLayout={storeLayout}
            id={id}
          />
        </MainLayout>
      </>
    );
  }
}

export default Employees;
