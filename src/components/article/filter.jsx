import { Container } from '@mui/material'
import React from 'react'
import ArticleList from './ArticleList'
import { useState } from 'react'
import { useContext } from 'react'
import { AllArticles } from '../../App'
import { useEffect } from 'react'
 
const Filter = () => {
            const {articleData,item,setMenuItems}=useContext(AllArticles)
            
            const menuItems=[...new Set(articleData.map((val)=>{return val.categery}))];
           
          
             useEffect(() => {
            
               setMenuItems(menuItems)
             },[menuItems]);
  return (
    <>
      <div style={{ width: "100wh",height:"100%" }}>
        <ArticleList item={item} />
      </div>
    </>
  );
}

export default Filter