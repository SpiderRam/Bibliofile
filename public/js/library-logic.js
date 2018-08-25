$(document).ready(function(){      
    var userID = sessionStorage.userID;
    $.ajax({
        type: "GET",
        url: "/library/" + userID
    }).then(function(response){
        console.log("----------------Get User books here: " + JSON.stringify(response));
        console.log("=====================USER ID LOGGED ON LINE 170: ", userID);

        for (i = 0; i < response.length; i++) {
            var book = response[i];
        
        $("#libraryContents").append("<li class='libraryEntry' id='libraryId" + book.id +  "'><img src='../images/icon-book-delete.png' class='libraryDelete' id='deleteBook" + book.id + "'><span class='underline'>" + book.Title + "</span> <span class='bold'>||</span> " + book.Author + "</li>");
        }
    });

});