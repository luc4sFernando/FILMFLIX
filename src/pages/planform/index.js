import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import NavBar from "../../components/navbar";
import {
  Body,
  Content,
  InfoWrap,
  TextContent,
  Texts,
  Span,
  Text1,
  SquaresContainer,
  SquaresWrap,
  Square,
  SquareSelectorWrap,
  SquareSelector,
  Selector,
  SquareColum,
  ContainerWrap,
  TableRow,
  TableD,
  Table,
  FeatureCell,
  Input,
  SquareDescWrap,
  InfoTexts,
  SubmitContainer,
  SubmitButton
} from "./style";

import { BsCheck2 } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

// import { newPlan } from "../../features/counter/stockSlice";

import { userSelector, idSelector } from "../../features/selectors";

import "./planform.css";
import { DataBase } from "../../services/firebaseRequests";

function PlanForm() {

  // const user = useSelector(userSelector);

  const id = useSelector(idSelector);

  
  const [select, setSelect] = useState("g");

  const dispatch = useDispatch();

  function handleInput(select) {

    setSelect(select);
  }

  const history = useHistory();
   
 
  return (
    <>
      <NavBar val={true} />
      <Body>
        <Content>
          <InfoWrap>
            <Span>
              STEP <b>2</b> OF <b>3</b>
            </Span>
            <Text1>Escolha o melhor plano para você</Text1>
            <TextContent>
              <BsCheck2 size="25px" color="#DB202C" />
              <Texts>Assista o quanto quiser. Sem anúncios.</Texts>
            </TextContent>
            <TextContent>
              <BsCheck2 size="25px" color="#DB202C" />
              <Texts>Recomendações especiais para você.</Texts>
            </TextContent>
            <TextContent>
              <BsCheck2 size="25px" color="#DB202C" />
              <Texts>Altere ou cancele seu plano quando quiser.</Texts>
            </TextContent>
          </InfoWrap>
          <SquaresContainer>
            <ContainerWrap>
              <SquareColum>
                <SquaresWrap>
                  <Square
                    style={{
                      opacity: select === "p" ? "1" : "0.6",
                      boxShadow:
                        select == "p" ? "02px 02px 20px #e6e6e6" : "none",
                    }}
                  >
                    <Input
                      type="radio"
                      name="planinfo"
                      value="p"
                      onClick={(e) => {
                        handleInput(e.target.value);
                      }}
                    />
                  </Square>
                  <Square style={{ opacity: select === "m" ? "1" : "0.6" }}>
                    <Input
                      type="radio"
                      name="planinfo"
                      value="m"
                      onClick={(e) => {
                        handleInput(e.target.value);
                      }}
                    />
                  </Square>
                  <Square style={{ opacity: select === "g" ? "1" : "0.6" }}>
                    <Input
                      type="radio"
                      name="planinfo"
                      value="g"
                      onClick={(e) => {
                        handleInput(e.target.value);
                      }}
                    />
                  </Square>
                </SquaresWrap>
                <SquareSelectorWrap>
                  <SquareSelector>
                    <Selector
                      style={{
                        visibility: select !== "p" ? "hidden" : "visible",
                      }}
                    />
                  </SquareSelector>
                  <SquareSelector>
                    <Selector
                      style={{
                        visibility: select !== "m" ? "hidden" : "visible",
                      }}
                    />
                  </SquareSelector>
                  <SquareSelector>
                    <Selector
                      style={{
                        visibility: select !== "g" ? "hidden" : "visible",
                      }}
                    />
                  </SquareSelector>
                </SquareSelectorWrap>
                <SquareDescWrap>
                  <SquareSelector>
                    <p>Basic</p>
                  </SquareSelector>
                  <SquareSelector>
                    <p>Pattern</p>
                  </SquareSelector>
                  <SquareSelector>
                    <p>Premium</p>
                  </SquareSelector>
                </SquareDescWrap>
              </SquareColum>
            </ContainerWrap>
          </SquaresContainer>

          <Table>
            <TableRow role="row">
              <FeatureCell>Price per month</FeatureCell>
              <TableD className={select === "p" ? "red" : null}>R$25,90</TableD>
              <TableD className={select === "m" ? "red" : null}>R$39,90</TableD>
              <TableD className={select === "g" ? "red" : null}>R$55,90</TableD>
            </TableRow>
            <TableRow>
              <FeatureCell>Qualidade do vídeo</FeatureCell>
              <TableD className={select === "p" ? "red" : null}>Boa</TableD>
              <TableD className={select === "m" ? "red" : null}>Melhor</TableD>
              <TableD className={select === "g" ? "red" : null}>
                Superior
              </TableD>
            </TableRow>
            <TableRow>
              <FeatureCell>Resolução</FeatureCell>
              <TableD className={select === "p" ? "red" : null}>480p</TableD>
              <TableD className={select === "m" ? "red" : null}>1080p</TableD>
              <TableD className={select === "g" ? "red" : null}>4K+HDR</TableD>
            </TableRow>
            <TableRow>
              <FeatureCell border={true}>
                Assista na TV, computador, celular ou tablet
              </FeatureCell>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "p" ? "#e50914" : "black"}
                />
              </TableD>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "m" ? "#e50914" : "black"}
                />
              </TableD>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "g" ? "#e50914" : "black"}
                />
              </TableD>
            </TableRow>
          </Table>
          <InfoWrap>
              <InfoTexts>
              Availability of HD (720p), Full HD (1080p), Ultra HD (4K) and HDR options is subject to internet service and device functionality. Not all content is available in all resolutions. For more details, see our Terms of Use.
              </InfoTexts>
              <InfoTexts>
              Only people who live with you can use your account. Watch on 4 devices at the same time with the Premium plan, on 2 devices with the Standard plan and on 1 with the Basic plan.
              </InfoTexts>
          </InfoWrap>
          <SubmitContainer>
              <SubmitButton type="submit" onClick={async(e) => {
                e.preventDefault();
             
                const error = await DataBase.setData({plans: select}, id)
                if(!error.length >= 0) {
                  history.push("/sigup/payment")
                }
              }}>Next</SubmitButton>
          </SubmitContainer>
        </Content>
      </Body>
    </>
  );
}

export default PlanForm;
