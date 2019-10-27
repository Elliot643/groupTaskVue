link to heroku: https://hinder-app-eg-lmg.herokuapp.com/

Hinder Application

Concept
Users of the Hinder application are allowed to share and comment on published pictures without any ethical limitations.
It is not only possible to like a picture, but also disliking and comment why you dislike that picture.
The purpose is to create an honest application where users are allowed not only to love, but also to hate.

Functionality
Users can:
log in 
register 
publish pictures 
add description to a published picture 
like/dislike pictures 
comment pictures 
check all published pictures 
log out

Architecture
Back end: Mongodb, Mongoose and Node with Express.
Front end: Vue js.


File structure
Hinder /public
 app.js
 routes.js
         /public/assets
             components
             models
             allStyle.css
             index.html
             main.js
                           /components/basepage.js
                        homepage.js
                     loginpage.js
                     pictureUpload.js
signupPage.js
userCard.js
userPage.js
userPagePicture.js
 /models/dbParser.js
   picture.js
   user.js
   verdict.js    

Routes
Posts:
/postPicture
/postVerdict
/postUser
/login
/addProfilePic
/addUserPagePicture
/getUsersPictures
/getUserWithId
/getPicturesWithUserId
/getVerdictWithPictureId
Getters:
/getUsers

 
