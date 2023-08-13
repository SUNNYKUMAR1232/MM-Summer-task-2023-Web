import axios from "axios"
import {  redirect } from "react-router-dom";

/* onst URL = "http://localhost:8000/api/article"+`${23}`; */

export const Deletes = async(URL,id)=>{
 
           window.alert("Are you sure you want to delete this article?")
     await axios
       .delete(URL + `/${id}`)
       .then(() => {
      
         alert("Deleted Succesfully");
        
       })
       .catch((err) => {
         console.log(err);
       });
}
export const updates = async(id,URL,{setData})=>{
     await axios.put(URL+`/${id}`)
     .then((data)=>{
            setData(data.data)
     })
     .catch(err=>{
         console.log(err)
     })
}