import React from "react";
import "./main_style.css";
import CardList from "../card/CardList";
import FilterCategeryWise from "../article/FilterCategeryWise";
import Filter from "../article/filter";
 const Main=() =>{
            return (
              <>
                <div className="main_container">
                 <CardList/>
                 <div>
                  <FilterCategeryWise/>
                 </div>
                  <div className="article_wrapper">
                  <Filter/>
                  </div>
                </div>
              </>
            );
            
}

export default Main;

