import React from 'react'
import "../assets/css/style.css";
const UpdateArticle = () => {
  return (
    <>
     <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i> All Users</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Update User</h2>
            <span class="text-light">Use the below form to Update an account</span>
        </div>

       
 <form action="/api/users/<%=user._id %>" method="PUT"  id="update_user">
    <div class="new_user">
        <div class="form-group">
            <label for="name" class="text-light">FirstName</label>
            <input type="hidden" name="id" />
            <input type="text" name="firstname"  placeholder="firstname" value=''/>
        </div>
        <div class="form-group">
            <label for="name" class="text-light">LastName</label>
            <input type="hidden" name="id" />
            <input type="text" name="lastname"  placeholder="lastname" value='<'/>
        </div>
        <div class="form-group">
            <label for="Email" class="text-light">Email</label>
            <input type="text" name="email" value="" placeholder="example@gmail.com"/>
        </div>
        <div class="form-group">
            <label for="password" class="text-light">Password</label>
            <input type="text" name="password" value="" placeholder="Password"/>
        </div>
        

        <div class="form-group">
            <button type="submit" class="btn text-dark update">Save</button>
        </div>

    </div>
</form>
       
    </div>
</main>
    </>
  )
}

export default UpdateArticle