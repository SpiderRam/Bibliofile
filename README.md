# Bibliofile-- Project 2 for Trilogy-UR bootcamp

* This purpose of this site is to facilitate the buying and selling of books among collectors.  Users may save books they own to their libraries, and also maintain lists of books they wish to sell or buy.  Sellers specify a minimum price and buyers a maximum price; results are returned that fall within the overlap of the two.  

* The objective was to build a full-stack application using the skills we have learned in the last four months.  The languages and libraries used to build Bibliofile include:
- HTML & CSS
- Bootstrap
- JavaScript and jQuery
- MySQL and Sequelize
- Express.js
- bodyparser
- node-isbn

* To test the functionality of the site without creating your own username and password (though you are welcome to do so), we recommend using the email address user@admin.com, and password xx1234xx.

* It is necessary to search by ISBN number; this is the way the node-isbn npm package works.  This has both advantages and drawbacks:  
- Most users would likely prefer to search by title, author, or series.  This is not possible using only this npm package, API access through GoodReads, Google, Amazon, or a similar service would be necessary to allow that.
- The main advantage, however, is that it eliminates confusion about which format or edition the owner/seller/buyer is adding to the database. 
- ISBN numbers for books not in hand are easily located in the Product Details section of any book's Amazon page.
- The site accepts both ISBN-10 and ISBN-13, without dashes or spaces.  
- There are some gaps in the node-isbn package; we observed some books returned without author data, or in very rare cases, the ISBN was not found at all.  This is a good argument for augmenting the npm package with a web based API.
* User validation was achieved by associating the Library, Wishlist, and For-Sale tables with the User table within the MySQL database by means of a foreign key, and making the User ID global with sessionStorage.  It is not secure but it serves the purpose for the scope of this assignment.  Passport could be added to create a more authentic experience. 
* Another way to improve the user experience would be to give them options for displaying their list contents.  Currently results are shown in the order in which they were added to the database.
* The user has the ability to delete books from each list, to modify the max and min price, and to search for buyers and sellers for each title on their For-Sale list or Wishlist.
* The functionality of the site relies heavily on toggling the visibility of various sections of the HTML, so that the UI presents a consistent experience whatever the task or endpoint the user selects.  Bootstrap cards and other components were used to facilitate responsiveness.
* jQuery was used to dynamically populate the results fields based on the active user and the ISBN being searched.
* Use of Sequelize was central to our concept; this was the first time we used it and we learned as we went.  