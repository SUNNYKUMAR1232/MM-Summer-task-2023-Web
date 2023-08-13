import React from 'react'
import "../Add_article/addArticle.css";
const AddArticle = () => {
  return (
    <>
      <header class="container">
        <div class="text-center">
          <h1>Article Management</h1>
        </div>
      </header>

      <form
        action="http://localhost:8000/api/article"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="article_add__box">
          <div class="image_box">
            <label for="img">Image Url</label>
            <input type="hidden" name="id" />
            <input
              type="file"
              name="img"
              class="image_url"
              placeholder="image-url"
            />
          </div>
          <div class="title_box">
            <label for="heading">Title</label>
            <input
              type="text"
              name="heading"
              class="title"
              placeholder="Title"
            />
          </div>
          <div class="title_box">
            <label for="categery">Categery</label>
            <input
              type="text"
              name="categery"
              class="title"
              placeholder="categery namer"
            />
          </div>
          <div class="paragraph_box">
            <h3>Paragraph</h3>
            <textarea
              type="text"
              class="paragraph_text"
              cols="30"
              rows="10"
              name="content"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            POST
          </button>
        </div>
      </form>
    </>
  );
}

export default AddArticle