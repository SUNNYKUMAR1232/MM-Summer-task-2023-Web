import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AllArticles } from "../../App";
const Trending = () => {
  const {filterdata, setFilterData,articleData} = useContext(AllArticles);
 

  const compare = (a, b) => {
    return b - a;
  };
  const ViewData = [...articleData.map((val) => val.views)];
  const SortView = [...ViewData.sort(compare)];

  useEffect(() => {
    const set = articleData.filter(
      (val, index) => {
        return val.views > SortView[8];
      },
      [articleData]
    );
    setFilterData(set);
  }, [articleData,SortView]);

  
};

export default Trending;
