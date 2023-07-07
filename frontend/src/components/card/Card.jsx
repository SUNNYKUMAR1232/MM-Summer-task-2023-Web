import React from "react";
import "./Card_style.css";
const Card = ({title}) => {
            return (
              <>
                <div className="card_container">
                  <div className="card_img__box">
                    <img src="" alt="" className="card_img" />
                  </div>
                  <div className="card_heading">
                    <span className="card_heading__text">{title}</span>
                  </div>
                  <div className="card_content">
                    <p className="card_content__text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quibusdam. In response to multiple complaints
                      that we received under the US Digital Millennium Copyright
                      Act, we have removed 3 results from this page. If you
                      wish, you may read the DMCA complaints that caused the
                      removals at LumenDatabase.org: Complaint, Complaint,
                      Complaint.You can also “escape into JavaScript” from JSX
                      attributes, but you have to use curly braces instead of
                      quotes. For example, className="avatar" passes the
                      "avatar" string as the CSS class, but src=
                      reads the JavaScript user.imageUrl variable value, and
                      then passes that value as the src attribute:
                    </p>
                  </div>
                  <div className="card_more">
                    <button className="card_more__btn">like</button>
                    <span className="like_count">12</span>
                    <span className="like_count">views 12</span>
                  </div>
                </div>
              </>
            );
            }
export default Card;