const handleDeleteClick = function (book) {
    event.preventDefault();
    console.log("Trying to delete " + book.id);

    $.ajax({
        type: "DELETE",
        url: "/forsale-delete/" + book.id
    }).then(function(response) {
        generateForSaleContent();
        console.log(JSON.stringify(response));
        console.log("Deleted " + book.id + " from forsale");
    });
};

const generateForSaleContent = function() {
    var userID = sessionStorage.userID;
    $.ajax({
        type: "GET",
        url: "/forsale/" + userID
    }).then(function(response){
        const forSaleContents = $("#forSaleContents");
        forSaleContents.empty();
        
        for (i = 0; i < response.length; i++) {
            const book = response[i];
            
            
            const symbolSpan = $("<span>")
                .addClass("bold")
                .text(" ✒︎ ");

            const symbolSpan2 = $("<span>")
                .addClass("bold")
                .text(" ✒︎ ");

            const authorSpan = $("<span>")
                .text(book.Author);

            const priceSpan = $("<span>")
                .text("Min Price: " + book.Min_Price);

            const matchesButton = $("<button>")
                .addClass("matches-button")
                .attr("data-isbn", book.ISBN)
                .attr("data-price", book.Min_Price)
                .text("Matches");

            const listItem = $("<li>")
            .addClass("forSaleEntry")
            .attr("id", "forSaleId" + book.id)
            .append(authorSpan, symbolSpan, priceSpan, matchesButton);
            
            
            const deleteIcon = $("<img>")
            .addClass("forSaleDelete")
            .attr("src", "../images/icon-book-delete.png")
            .attr("title", "Delete")
            .attr("id", "deleteForSaleBook" + book.id);
            
            const editIcon = $("<img>")
            .addClass("forSaleEdit")
            .attr("src", "../images/icon-book-edit.png")
            .attr("title", "Change Price")
            .attr("id", "editForSaleBook" + book.id);
            
            const searchIcon = $("<img>")
            .addClass("minPriceUpdate")
            .attr("src", "../images/icon-request-info.png")
            .attr("title", "Find Buyers")
            .attr("id", "updatePriceOf" + book.id);  
            
            deleteIcon.on("click", function() {
                handleDeleteClick(book);
            });
            
            
            const titleSpan = $("<span>")
            .addClass("underline")
            .text(book.Title);
            
    
            listItem.prepend([deleteIcon, editIcon, searchIcon, titleSpan, symbolSpan2]);
            forSaleContents.append(listItem);
            
        }
    });
};


$(document).ready(function(){      
    generateForSaleContent();
});



// var Min_Price;
//         for (var i = 0; i <  Max_Price; i++) {
//           if (results[i].item_name === answer.choice) {
//             chosenItem = results[i];
//           }
//         }

//         // determine if bid was high enough
//         if (chosenItem.highest_bid < parseInt(answer.bid)) {
//           // bid was high enough, so update db, let the user know, and start over
//           connection.query(
//             "UPDATE auctions SET ? WHERE ?",
//             [
//               {
//                 highest_bid: answer.bid
//               },
//               {
//                 id: chosenItem.id
//               }
//             ],
//             function(error) {
//               if (error) throw err;
//               console.log("Bid placed successfully!");
//               start();
//             }
//           );
//         }
//         else {
//           // bid wasn't high enough, so apologize and start over
//           console.log("Your bid was too low. Try again...");
//           start();
//         }
      
