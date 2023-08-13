import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllArticles } from "../../App";

export const RedirectFunction=({id,views,likes,likesa,view,setView})=>{
            useEffect(() => {
              axios
                .patch(`http://localhost:8000/api/articles/${id}`, {
                  likes: likes > likesa ? likes : likesa,
                  views: views > view ? views : view,
                })
                .then(() => {})
                .catch((err) => console.log(err));
            }, [id, view, likesa]);
            // In patch method you can updatate each data
           
}