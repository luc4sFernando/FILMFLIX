import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../components/navbar";
import {loadStripe} from '@stripe/stripe-js';
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
  SubmitButton,
} from "./style";

import { BsCheck2 } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";

// import { newPlan } from "../../features/counter/stockSlice";

import { userSelector, idSelector } from "../../features/selectors";

import "./planform.css";
import { DataBase } from "../../services/firebaseRequests";
import db from "../../services/firebase";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  addDoc,
  updateDoc
} from "@firebase/firestore";
import { deepCopy } from "@firebase/util";

function PlanForm() {
  // const user = useSelector(userSelector);

  const id = useSelector(idSelector);

  const [products, setPrducts] = useState([]);

  const [select, setSelect] = useState("Premium");

  const dispatch = useDispatch();

  function handleInput(select) {
    setSelect(select);
  }

  const history = useHistory();

  useEffect(() => {
    const handlePlansDataBase = async () => {
      const q = query(collection(db, "products"), where("active", "==", true));

      const querySnapshot = await getDocs(q);
      const product = {};
      querySnapshot.forEach(async (doc) => {
        product[doc.id] = doc.data();
        
        const p = collection(db, `products/${doc.id}/prices`);
        const prices = await getDocs(p);
        prices.forEach((price) => {
          product[doc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
        });
        setPrducts(product);
      });
    };
    handlePlansDataBase();
  }, []);


  async function handleCustomersPlans() {
    handleUserPlan();
    Object.entries(products).forEach(async (doc) => {
      if (doc[1].name === select) {
        const customer = await addDoc(
          collection(db, `customers/${id}/checkout_sessions`),
          {
            price: doc[1].prices.priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
          }
        );
       
        const querySnapshot = await getDocs(collection(db, `customers/${id}/checkout_sessions`));
        querySnapshot.forEach(async (snap) => {
          const { error, sessionId, url } = snap.data();
          
          if (error) {
            alert(`An error occurred: ${error.message}`);
          }
          if (sessionId) {
            
            const stripe = await loadStripe(
              "pk_test_51JstdED0ly0PJOCve0BmfMmNwYoWqvu2Qy4lrqriCZQ4E5U8SJ8onPHNcaS6nCbjbFR3MSBLKdc3mq1mlfAN60xl00wqR9Rw9U"
            );
            await stripe.redirectToCheckout({sessionId})
         
          }
        });
      }
    });
  }

  const handleUserPlan = async () => {
   
    const dataRef = await getDocs(collection(db, `/users`));
    dataRef.forEach(async docS => {
     
       const {uid} = docS.data();

      if(uid === id){
        const ref = docS.id;
        
        const docRef = doc(db, "users", ref);
        await updateDoc(docRef, {plans: true})
        
      }
     
    })
   

  }


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
                      opacity: select === "Basic" ? "1" : "0.6",
                      boxShadow:
                        select == "Basic" ? "02px 02px 20px #e6e6e6" : "none",
                    }}
                  >
                    <Input
                      type="radio"
                      name="planinfo"
                      value="Basic"
                      onClick={(e) => {
                        handleInput(e.target.value);
                      }}
                    />
                  </Square>
                  <Square
                    style={{ opacity: select === "Standard" ? "1" : "0.6" }}
                  >
                    <Input
                      type="radio"
                      name="planinfo"
                      value="Standard"
                      onClick={(e) => {
                        handleInput(e.target.value);
                      }}
                    />
                  </Square>
                  <Square
                    style={{ opacity: select === "Premium" ? "1" : "0.6" }}
                  >
                    <Input
                      type="radio"
                      name="planinfo"
                      value="Premium"
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
                        visibility: select !== "Basic" ? "hidden" : "visible",
                      }}
                    />
                  </SquareSelector>
                  <SquareSelector>
                    <Selector
                      style={{
                        visibility:
                          select !== "Standard" ? "hidden" : "visible",
                      }}
                    />
                  </SquareSelector>
                  <SquareSelector>
                    <Selector
                      style={{
                        visibility: select !== "Premium" ? "hidden" : "visible",
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
              <TableD className={select === "Basic" ? "red" : null}>
                R$25,90
              </TableD>
              <TableD className={select === "Standard" ? "red" : null}>
                R$39,90
              </TableD>
              <TableD className={select === "Premium" ? "red" : null}>
                R$55,90
              </TableD>
            </TableRow>
            <TableRow>
              <FeatureCell>Qualidade do vídeo</FeatureCell>
              <TableD className={select === "Basic" ? "red" : null}>Boa</TableD>
              <TableD className={select === "Standard" ? "red" : null}>
                Melhor
              </TableD>
              <TableD className={select === "Premium" ? "red" : null}>
                Superior
              </TableD>
            </TableRow>
            <TableRow>
              <FeatureCell>Resolução</FeatureCell>
              <TableD className={select === "Basic" ? "red" : null}>
                480p
              </TableD>
              <TableD className={select === "Standard" ? "red" : null}>
                1080p
              </TableD>
              <TableD className={select === "Premium" ? "red" : null}>
                4K+HDR
              </TableD>
            </TableRow>
            <TableRow>
              <FeatureCell border={true}>
                Assista na TV, computador, celular ou tablet
              </FeatureCell>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "Basic" ? "#e50914" : "black"}
                />
              </TableD>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "Standard" ? "#e50914" : "black"}
                />
              </TableD>
              <TableD border={true}>
                {" "}
                <BsCheck2
                  size="25px"
                  color={select === "Premium" ? "#e50914" : "black"}
                />
              </TableD>
            </TableRow>
          </Table>
          <InfoWrap>
            <InfoTexts>
              Availability of HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
              options is subject to internet service and device functionality.
              Not all content is available in all resolutions. For more details,
              see our Terms of Use.
            </InfoTexts>
            <InfoTexts>
              Only people who live with you can use your account. Watch on 4
              devices at the same time with the Premium plan, on 2 devices with
              the Standard plan and on 1 with the Basic plan.
            </InfoTexts>
          </InfoWrap>
          <SubmitContainer>
            <SubmitButton
              type="submit"
              onClick={async () => {
                
                await handleCustomersPlans();
          
              }}
            >
              Next
            </SubmitButton>
          </SubmitContainer>
        </Content>
      </Body>
    </>
  );
}

export default PlanForm;
