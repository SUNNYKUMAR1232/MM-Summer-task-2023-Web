
import { Box,  Typography, styled, IconButton, Badge, Button} from '@mui/material'
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { AllArticles } from '../../App';

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ArticleBody = () => {
  const navigate=useNavigate()
  const [searchParams] = useSearchParams();
   let id=searchParams.get('id')
    const { setId, articleId,themeColor ,themeMode} = useContext(AllArticles);
  useEffect(()=>{
      setId(id);
      
  },[id])


  
  return (
    <>
      <ContainerStyle sx={{ background: themeMode }}>
        <Box
          sx={{
            color: themeMode,
            left: "20px",
            position: "absolute",
            top: "90px",
            background: themeColor,
            borderRadius: "12px",
          }}
        >
          <Button onClick={() => navigate("/")}>Back></Button>
        </Box>
        <Box className="imageBox">
          <img className="image" src={articleId.img} alt=""></img>
        </Box>
        <Box className="heading">
          <Typography className="text" sx={{ color: themeColor }}>
            {articleId.heading}
          </Typography>
        </Box>
        <Box className="content">
          <Typography className="text" sx={{ color: themeMode }}>
            {articleId.content}
          </Typography>
          <br />
          <br />
          <Typography className="text" sx={{ color: themeColor }}>
            {articleId.content}
          </Typography>
          <br />
          <br />
          <Typography  className="text">
            {articleId.content}
          </Typography>
          <br />
          <br />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <IconButton>
            <Badge badgeContent={articleId.likes} color="primary">
              <ThumbUpIcon sx={{ color: "ActiveBorder",background:"red" }} />
            </Badge>
          </IconButton>
          <Button sx={{ color: themeColor }}>views</Button>
          <Typography sx={{ color: themeColor }}>{articleId.views}</Typography>
        </Box>
      </ContainerStyle>
    </>
  );
}



const ContainerStyle = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  padding: "8em 2em 2em 2em",
  flexDirection: "column",
  justifyContent: "flex-start",

  ".imageBox": {
    width: "100%",
    minHeight: "30rem",

    ".image": {
      width: "100%",
      height: "95%",
      borderRadius: "12px",
    },
  },
  ".heading": {
    width: "100%",
    minHeight: "4em",

    ".text": {
      fontSize: "2em",
      fontFamily: "Roboto",
    },
  },
  ".content": {
    margin: "0",
    width: "100%",
    minHeight: "80rem",
    padding: "0",

    ".text": {
      fontSize: "1.2em",
    },
  },
}));
export default ArticleBody