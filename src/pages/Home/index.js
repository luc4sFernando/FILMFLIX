import React from "react";

import Banner from "../../components/banner";
import Menu from "../../components/nav/Menu";
// import NavBar from '../../components/navbar'
import Row from "../../components/row";
import "./style.css"
function Home() {
  return (
    <div className="fundo">
      <Menu type="Home" />
      <Banner />
      <Row />
    </div>
  );
}

export default Home;
