import { Box, Container, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { AllArticles } from '../../App';
 
const Style = {
  input: {
    width: "150%",
    height: "3em",
    boxShadow: "1px 1px 15px #575353",
    paddingLeft: "2em",
    borderRadius: "15px",
    borderBottom: "none",
    fontSize: "1.1em",
  },
  search_item: {
    width: "150%",
    height:"12rem",
    overflow:"none"
    
  },
  search_item__il: {
    width: "100%",
    background: "rgb(167, 228, 226)",
    minHeight: "4rem",
    marginTop: "1em",
    padding: ".5em",
  },
};
 const LinkStyle = styled(Link)(({ theme }) => ({
   fontSize: "1.2em",
   color: "black",
   textDecoration: "none",
   "&:hover,:focus": {
   color:"rebeccapurple",
    width: "100%",
    background: "rgb(21, 208, 202)",
    minHeight: "4rem",
   }
 }));
  
  const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState(null);
     const {articleData,themeColor} = useContext(AllArticles)
    useEffect(() => {
          setData(articleData);
    }, [articleData]);

    return (
      <>
        <Container maxWidth={"xs"} >
          <Input
            style={Style.input}
            sx={{color:themeColor}}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div style={Style.search_item}>
            {search > " "
              ? data
                  .filter((val) => {
                    if (
                      val.heading.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }else
                    if (
                      val.categery.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    let id = val._id;
                    const articleUrl = `http://localhost:3000/article?id=${id}`;
                    return (
                      <li style={Style.search_item__il}>
                        <LinkStyle 
                          key={key}
                          style={Style.search_item__text}
                          to={articleUrl}
                        >
                          {val.heading}
                        </LinkStyle>
                      </li>
                    );
                  })
              : null}
          </div>
        </Container>
      </>
    );
  };
  export default SearchFilter;
 
