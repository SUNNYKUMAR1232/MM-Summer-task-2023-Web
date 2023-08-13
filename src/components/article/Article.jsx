import React, { useContext, useEffect, useState } from "react";
import "./article_style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const Article = ({img,content,title,likes,views,color,id}) => {
               
               const [viewe, setViewe] = useState(0);
               const [likesae, setLikesae] = useState(0);
               const navigate = useNavigate();

               useEffect(() => {
                 axios
                   .patch(`http://localhost:8000/api/articles/${id}`, {
                     likes: likes > likesae ? likes : likesae,
                     views: views > viewe ? views : viewe,
                   })
                   .then(() => {})
                   .catch((err) => console.log(err));
               }, [id, viewe, likesae]);
               // In patch method you can updatate each data
               const viewss = () => {
                 setViewe(viewe < views ? views + 1 : viewe + 1);
               };
            return (
              <>
                <div className="article_container">
                  <Button
                    className="article_img__box"
                    onClick={() => navigate(`/article?id=${id}`)}
                  >
                    <img className="article_img" src={img} alt="we" />
                  </Button>
                  <div className="aricle_section">
                    <Button
                      className="article_containers"
                      onClick={() => viewss()}
                    >
                      <div className="article_title">
                        <span
                          className="article_title__text"
                          style={{ color: color }}
                        >
                          {title}
                        </span>
                      </div>
                      <div className="article_content">
                        <p
                          className="article_content__text"
                          style={{ color: color }}
                        >
                          {content}
                        </p>
                      </div>
                    </Button>
                    <div className="article_more">
                      <Button
                      variant="outlined"
                        className="article_like__btn"
                        style={{ color: color }}
                        onClick={() =>
                          likes === 0
                            ? setLikesae(likes + 1)
                            : likes === 1
                            ? setLikesae(likes)
                            : null
                        }
                      >
                        like
                      </Button>
                      <span className="like_count" style={{ color: color }}>
                        {likes >= likesae ? likes : likesae}
                      </span>
                      <span className="like_count" style={{ color: color }}>
                        views {views > viewe ? views : viewe}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            );};
export default Article;