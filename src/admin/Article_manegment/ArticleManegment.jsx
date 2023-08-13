import React, { useContext } from "react";
import "../Article_manegment/ArticleManegement.css";
import { AllArticles } from "../../App";
import { Button } from "@mui/material";
import { Deletes } from "../UpdateAndDelete";
const ArticleManegment = () => {
   
  const {articleData}=useContext(AllArticles)
  return (
    <>
      <header class="header">
        <nav>
          <div class="container">
            <div class="text-center">
              <a href="/admin" class="nav-brand text-dark">
                Article Management System
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="site-main">
        <div class="containers">
          <div class="box-nav d-flex justify-between">
            <a href="/add_article" class="border-shadow">
              <span class="text-gradient">
                Add Article <i class="fas fa-user"></i>
              </span>
            </a>
          </div>

          <form >
            <table class="table">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Image</th>
                      <th>Heading Name</th>
                      <th>Category</th>
                      <th>likes</th>
                      <th>viwes</th>
                      <th>date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articleData.map((val, key) => {
                     const URL = `http://localhost:8000/api/article`;
                      return (
                        <>
                          <tr key={key}>
                            <td>{key + 1}</td>
                            <td>
                              <img
                                src={val.img}
                                alt={val.heading}
                                width="100px"
                                height="100px"
                              />
                            </td>
                            <td>{val.heading}</td>
                            <td>{val.categery}</td>
                            <td>{val.likes}</td>
                            <td>{val.views}</td>
                            <td>{val.date}</td>
                            <td>
                              <Button
                                variant="contained"
                                onClick={() => Deletes( URL,val._id)}
                              >Delete</Button>
                              <Button variant="contained" >Update</Button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </table>
          </form>
        </div>
      </main>
    </>
  );
};

export default ArticleManegment;
