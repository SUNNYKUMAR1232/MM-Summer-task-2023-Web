
import { Box } from '@mui/material'
import React from 'react'
import Header from "../../components/header/Header";
import ArticleBody from './ArticleBody';
import Footer from '../../components/footer/Footer';
const Article = () => {
  
  return (
    <>
    <div >
            <Box >
                        <Header/>
            </Box>
            <Box>
              <ArticleBody/>
            </Box>
            <Box>
              <Footer/>
            </Box>

    </div>
    </>
  )
}

export default Article