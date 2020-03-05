import React from "react";

import MainLayout from "../../layout/MainLayout";
import TableContainer from "../../components/container/table/TableContainer";
import HeadHome from "../../components/head";
import Footer from "../../components/footer";

function Tables(props) {
  const { dispatch, storeLayout } = props;
  return (
    <>
      <HeadHome title="Tables" />
      <MainLayout dispatch={dispatch} storeLayout={storeLayout}>
        <TableContainer dispatch={dispatch} storeLayout={storeLayout} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default Tables;
