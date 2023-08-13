import React from 'react'
import { useContext } from 'react'
import { AllArticles } from '../../App'
import { Container, Input } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'bootstrap';
import { filterItem } from '../../features/filterfunction/filter';


const FilterCategeryWise = () => {
            const { setItem, articleData,themeColor ,themeMode } =
              useContext(AllArticles);
              const [categery, setCategery]=useState()
              const [resultData,setResultData]=useState([])
           const [filterData,setFilterData]=useState([])
           
            useEffect(()=>{
               setFilterData(articleData)
               setItem(resultData)
            },[articleData,resultData])
           const Category=[...new Set(articleData.map((val)=>val.categery))]
          
           
  return (
    <>
      <div
        style={{
          width: "100%",
         display:"flex",
         justifyContent:"center",
         
        }}
      >
        <div
          style={{
            color: themeColor,
            width: "30em",
            height: "4em",
            boxShadow: "1px 2px 40px 2px grey",
            borderRadius: "15px",
          }}
        >
          <Input
            style={{ width: "30em", height: "4em", paddingLeft: "12px" }}
            placeholder="Search Categery ..."
            onClick={(e) => setCategery(e.target.value)}
          />
        </div>
        <div
          style={{
            width: "12em",
            zIndex: "1",
            position: "absolute",
            marginTop:"6em",
            marginRight:"18em",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {categery > " "
            ? Category.filter((data) => {
                if (data.toLowerCase().includes(categery.toLowerCase())) {
                  return data;
                }
              }).map((datas, key) => {
                return (
                  <>
                    <div>
                      <button
                        style={{
                          width: "250%",
                          color: themeColor,
                          background: "#e7c6ff",
                          height: "6em",
                          borderRadius: "25px",
                        }}
                        onClick={() =>
                          filterItem(datas, articleData, setResultData)
                        }
                      >
                        {datas}
                      </button>
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default FilterCategeryWise