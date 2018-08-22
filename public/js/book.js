
$(document).ready(function(){
    var bookToSave ={};
    var isbn = {};

    console.log("connected");

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
        }
    });


    $(document).on("click", "#addToWishlistButton",function(){
        console.log("wish list button clicked", bookToSave);
        var cleanBook = {
            ISBN_10:parseInt(isbn),
            ISBN_13:parseInt(isbn),     
            Title: bookToSave.title,
            Author:bookToSave.authors[0],
            Series: "",
            Format: bookToSave.printType,
            Max_Price: parseFloat($("#wishListPrice").val())
        };
        console.log(cleanBook, "clean book");

        $.ajax({
            type:"POST",
            url:"http://localhost:3000/wishlist",
            data:cleanBook
        }).then(function(response){
        });
    });

});
