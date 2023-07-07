import React from "react";
import Article from "../article/Article";
import "./main_style.css";
import PaginatedItems from "../../features/Pagination";
 const Main=() =>{
            return (
              <>
                <div className="main_container">
                  <div className="card_wrapper">
                    <PaginatedItems itemsPerPage={3} />
                  </div>
                  <div className="article_wrapper">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                  </div>
                </div>
              </>
            );
            
}

export default Main;

