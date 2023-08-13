import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./style.css";
import Main from "../../components/main/Main";
import { useContext } from "react";
import { AllArticles } from "../../App";





const Home = () => {
  const {themeMode}=useContext(AllArticles)
  return (
    <>
      <div style={{background:themeMode}} className="home_container">
        <div>

        <Header/>
        </div>
        <div>

        <Main />
        </div>
        <div style={{marginTop:"120em"}} >
        <Footer />

        </div>
      </div>
    </>
  );
};
export default Home;
