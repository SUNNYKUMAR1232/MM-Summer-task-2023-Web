import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./style.css";
import Main from "../../components/main/Main";




const Home = () => {
 
  return (
    <>
      <div className="home_container">
        <Header/>
        <Main />
        <Footer />
      </div>
    </>
  );
};
export default Home;
