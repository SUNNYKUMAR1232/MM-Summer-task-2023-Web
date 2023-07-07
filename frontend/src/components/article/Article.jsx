import React from "react";
import "./article_style.css";

const Article = () => {
            return (
              <>
                <div className="article_container">
                  <div className="article_img__box">
                    <img className="article_img" src="sw" alt="we" />
                  </div>
                  <div className="aricle_section">
                    <div className="article_title">
                      <span className="article_title__text">egr</span>
                    </div>
                    <div className="article_content">
                      <p className="article_content__text">
                        vega movies is a website that offers a wide range of
                        movies for free download. The website is known for its
                        extensive collection of Bollywood, Hollywood, and
                        regional movies. The movies are available in various
                        formats, including HD, 720p, and 1080p. vega movies also
                        offers movies in different languages, making it
                        accessible to a global audience.
                      </p>
                    </div>
                    <div className="article_more">
                      <button className="article_like__btn">like</button>
                      <span className="like_count">12</span>
                      <span className="like_count">views 12</span>
                    </div>
                  </div>
                </div>
              </>
            );};
export default Article;