import React from "react";

import NavBar from "../../components/navbar";

import { Body, Content, Text1, TextContent, Texts, Button } from "./style";
import { BsCheck2 } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Span } from "../signup/styled";
import { useHistory } from "react-router";

function Intro() {
  const history = useHistory();


  return (
    <>
      <NavBar val={true} />
      <Body>
        <Content>
          <IoIosCheckmarkCircleOutline
            size="50"
            color="#DB202C"
            style={{
              margin: "0px 0px 28px 0px",
            }}
          />
          <Span>
            STEP <b>2</b> OF <b>3</b>
          </Span>
          <Text1>Choose your plan</Text1>
          <TextContent>
            <BsCheck2 size="30px" color="#DB202C" />
            <Texts>No commitment, cancel whenever you want.</Texts>
          </TextContent>
          <TextContent>
            <BsCheck2 size="30px" color="#DB202C" />
            <Texts>All Netflix content for a single, affordable price.</Texts>
          </TextContent>
          <TextContent>
            <BsCheck2 size="30px" color="#DB202C" />
            <Texts>Watch as much as you like on all your devices.</Texts>
          </TextContent>
          <Button
            onClick={(e) => {
              e.preventDefault();
              history.push("/signup/planform")
            }}
          >
            Next
          </Button>
        </Content>
      </Body>
    </>
  );
}

export default Intro;
