import React from "react";

import MainLayout from "../../layout/MainLayout";
import EmployeeContainer from "../../components/container/card/EmployeeContainer";
import HeadHome from "../../components/head";
import Footer from "../../components/footer";

function Employees(props) {
  const { dispatch, storeLayout } = props;
  return (
    <>
      <HeadHome title="Employees" />
      <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
        <EmployeeContainer dispatch={dispatch} storeLayout={storeLayout} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default Employees;
