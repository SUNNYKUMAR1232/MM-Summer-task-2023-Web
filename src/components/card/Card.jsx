import React, { useEffect, useState } from "react";
import "./Card_style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AllArticles } from "../../App";





const Card = ({heading,content,img,likes,coments,views,id}) => {
    const {themeMode,themeColor}=useContext(AllArticles)
    const [view,setView]=useState(0)
    const [likesa,setLikesa]=useState(0)
    const navigate = useNavigate();

  useEffect(()=>{
           axios
                .patch(`http://localhost:8000/api/articles/${id}`, {
                  likes:likes>likesa?likes:likesa, 
                  views:views>view?views:view,
                })
                .then(() => {
                 })
                .catch((err) => console.log(err));
         
            },[view,likesa])
              // In patch method you can updatate each data
     const viewss = () => {
       setView(view < views ? views + 1 : view + 1) 
        
     };
            return (
              <>
                <div className="card_container" style={{ background:themeMode }}>
                  <Button
                    className="card_button"
                    onClick={() =>
                     viewss()     
                    }>

                  <Button onClick={()=>navigate(`/article?id=${id}`)}>
                    <div className="card_img__box">
                      <img src={img} alt="" className="card_img" />
                    </div>
                    </Button>
                    <div className="card_heading">
                      <span
                        className="card_heading__text"
                        style={{ color: themeColor }}
                      >
                        {heading}
                      </span>

                    </div>
                    <div className="card_content">
                      <p
                        className="card_content__text"
                        style={{ color: themeColor }}
                      >
                        {content}
                      </p>
                    </div>
                  </Button>
                  
                  <div className="card_more">
                    <Button
                      variant="outlined"
                      sx={{ background: themeColor }}
                      className="card_more__btn"
                      onClick={() =>  likes === 0? setLikesa(likes + 1)   : likes === 1? setLikesa(likes)
                          : null
                        }
                    >
                     
                        likes
                      </Button>
                   
                    <span style={{ color: themeColor }} className="like_count">
                      {likes>+likesa?likes:likesa}
                    </span>
                    <span style={{ color: themeColor }} className="like_count">
                      views {views>view?views:view}
                    </span>
                  </div>
                </div>
              </>
            );
            }
export default Card;