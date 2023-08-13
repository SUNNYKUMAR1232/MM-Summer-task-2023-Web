import { Container } from '@mui/material'
import React, { useContext } from 'react'
import { AllArticles } from '../../App'
import Article from './Article'
import { useEffect } from 'react'
import PaginatedItems from '../../features/Pagination'

const ArticleList = ({item}) => {
  const {
    dataCategery,
    setDataCategery,
    themeColor,
    currentArticleData,
    setCurrentAricleData,
  } = useContext(AllArticles);
useEffect(()=>{
  setDataCategery(currentArticleData)
},[currentArticleData])
  return (
    <>
      <div style={{ width: "100wh" }}>
        {dataCategery.map((data, key) => {
          return (
            <Article
              key={key}
              img={data.img}
              title={data.heading}
              content={data.content}
              likes={data.likes}
              views={data.views}
              color={themeColor}
              id={data._id}
            />
          );
        })}
        <div>
          <PaginatedItems
            data={item}
            itemsPerPage={8}
            setCurrentData={setCurrentAricleData}
          />
        </div>
      </div>
    </>
  );
}

export default ArticleList