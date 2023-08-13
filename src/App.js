import Routers from './router/router';
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import TrendingData from './features/TrendingData/TrendingData';



// create Context API
export const AllArticles = createContext();



function App() {
  // For All Article
   const [articleData, setArticleData] = useState([]);
   // For Whose Article that find by id
   const [articleId, setArticleId] = useState([]);
   // To store Id that search Article
   const [id, setId] = useState(null);
   // To store current data that search By pagination
   const [currentCardData, setCurrentCardData] = useState([]);
   const [currentArticleData, setCurrentAricleData] = useState([]);
   //
   const [dataCategery, setDataCategery] = useState([]);
   //
   const [themeMode,setThemeMode]=useState()

   const [themeColor,setThemeColor]=useState()

    

    const [menuItems,setMenuItems]=useState();
    const [item,setItem]=useState([]);

    const [filterItem,setFilterItem]=useState()

    const [filterdata, setFilterData] = useState([]);
    const [imageUrl, setImageUrl] = useState("");

   const URL = "http://localhost:8000/api/article";


  //! Find all Article 
  useEffect(()=>{
    setItem(articleData)
  },[articleData])

   useEffect(() => {
     const allGet = async () => {
       await axios.get(URL).then((data) => {
         setArticleData(data.data);
       });
     };
     allGet();
   }, []);



   const URLs = `http://localhost:8000/api/articleFindById/${id}`;


  //? Find Article By Id 

   useEffect(() => {
     const dataById = async () => {
       await axios.get(URLs).then((data) => {
         setArticleId(data.data);
       });
     };
     dataById();
   }, [ URLs]);


  return (
    <>
      <AllArticles.Provider
        value={{
          articleData,
          setArticleData,
          articleId,
          setArticleId,
          id,
          setId,
          currentCardData,
          setCurrentCardData,
          dataCategery,
          setDataCategery,

          themeMode,
          setThemeMode,
          themeColor,
          setThemeColor,
          menuItems,
          setMenuItems,
          item,
          setItem,
          filterItem,
          setFilterItem,
          currentArticleData,
          setCurrentAricleData,
          filterdata,
          setFilterData,
          imageUrl,
          setImageUrl,
        }}
      >
        <Routers />
        <TrendingData />
      </AllArticles.Provider>
    </>
  );
}

export default App;
