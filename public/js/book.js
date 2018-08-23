
$(document).ready(function(){
    var bookToSave ={};
    var isbn = {};

    console.log("connected");

    $("#signUp").on("click", function() {
        event.preventDefault();

        var username = $("#createUsername").val().trim();
        var password = $("#createPassword").val().trim();
        var email = $("#createEmail").val().trim();

        var newUser = {
            username,
            password,
            email
        };

        if (email.length > 0 && username.length > 0 && password.length > 0) {
            $.ajax({
                type:"POST",
                url:"http://localhost:3000/new-user",
                data: newUser
            }).then(function(response){
                console.log(response);
            }); 
        } else {
            alert("Please fill in all fields.");
        }
    });

    $("#signIn").on("click", function() {
        event.preventDefault();

        var password = $("#enterPassword").val().trim();
        var email = $("#enterEmail").val().trim();

        var returningUser = {
            password,
            email
        };

        if (email.length > 0 && password.length > 0) {
            $.ajax({
                type:"POST",
                url:"http://localhost:3000/returning-user",
                data: returningUser
            }).then(function(response){
                console.log(response);
            }); 
        } else {
            alert("Please fill in all fields");
        }
    });

    $("#searchSubmit").on("click", function(){
        
        if($("#isbnInput").val().length == 10 || $("#isbnInput").val().length == 13){
            isbn = $("#isbnInput").val();
            console.log("search isbn: " + isbn);
                $.ajax({
                    type:"GET",
                    url:"http://localhost:3000/books/" + isbn
                }).then(function(response){
                    $("#book-title").text("✒︎ Title: " + response.title);
                    $("#book-author").text("✒︎ Author: " + response.authors[0]);
                    console.log(response);
                    bookToSave = response;
                });
        } else {
            alert("Please put in only a 10 or 13 digit ISBN");
        }
    });
   
    $("#addToLibraryButton").on("click", function() {
        event.preventDefault();
        console.log("addToLibraryButton clicked");
        var cleanBook = {            
            ISBN:parseInt(isbn),     
            Title: bookToSave.title,
            Author:bookToSave.authors[0],
            UserId: "1"
        };
        
        $.ajax({
            type:"POST",
            url:"http://localhost:3000/add-to-library",
            data: cleanBook
        }).then(function(response){
            console.log(response);
        }); 
    });

    $("#addToWishlistButton").on("click", function() {
        event.preventDefault();
        console.log("addToWishlistButton clicked");
        var wishlistBook = {            
            ISBN: parseInt(isbn),     
            Title: bookToSave.title,
            Author:bookToSave.authors[0],
            Max_Price: parseFloat($("#wishListPrice").val()),
            UserId: "1"
        };
        
        $.ajax({
            type:"POST",
            url:"http://localhost:3000/wishlist",
            data: wishlistBook
        }).then(function(response){
            console.log(response);
        }); 
    });

    $("#addToForSaleButton").on("click", function() {
        event.preventDefault();
        console.log("addToForSaleButton clicked");
        var forSaleBook = {            
            ISBN: parseInt(isbn),     
            Title: bookToSave.title,
            Author: bookToSave.authors[0],
            Min_Price: parseFloat($("#forSalePrice").val()),
            UserId: "1"
        };
        
        $.ajax({
            type:"POST",
            url:"http://localhost:3000/for-sale",
            data: forSaleBook
        }).then(function(response){
            console.log(response);
        }); 
    });
    
    
});
