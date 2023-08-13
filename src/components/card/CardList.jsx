import React, { useEffect } from "react";

import Card from "../card/Card";
import { keyframes, styled } from "styled-components";
import { Button } from "@mui/material";
import PaginatedItems from "../../features/Pagination";
import { useContext } from "react";
import { AllArticles } from "../../App";

const ScollRow = keyframes`
  0% {
    margin-left:12%;
    width: 100%;

  }
  45%{
    font-size:"23em";
    display: none;
  }

  to {
    margin-left:3%;
    width: 100%;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1em;
  position: relative;
 
`;
const AnimateBox = styled(Box)`
  animation-name: ${ScollRow};
  animation-duration: 2s;
  animation-delay:0;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;



const CardList = () => {

 const { currentCardData, articleData,setCurrentCardData ,filterdata} = useContext(AllArticles);

            return (
              <>
                <AnimateBox>
                  {currentCardData &&
                    currentCardData.map((item) => {
                      return (
                        <Button>
                          <Card
                            likes={item.likes}
                            views={item.views}
                            img={item.img}
                            heading={item.heading}
                            content={item.content}
                            id={item._id}
                          />
                        </Button>
                      );
                    })}
                </AnimateBox>
                <div className="card_wrapper">
                  <PaginatedItems
                    data={filterdata}
                    itemsPerPage={3}
                    setCurrentData={setCurrentCardData}
                  />
                </div>
              </>
            );
            }
export default CardList;