import React from "react";

import Banner from "../../components/banner";
import Menu from "../../components/nav/Menu";
// import NavBar from '../../components/navbar'
import Row from "../../components/row";

function Home() {
  return (
    <>
      <Menu type="Home" />
      <Banner />
      <Row />
    </>
  );
}

export default Home;
