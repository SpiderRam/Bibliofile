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

const handleUpdateClick = function(book) {
    event.preventDefault();
    const changeMinPriceButton = $("#changeMinPriceButton");

    console.log("Trying to update price on " + book.id);

    $("#changeMinPrice").show();

    changeMinPriceButton.off("click");

    changeMinPriceButton.on("click", function() {
        $.ajax({
            type: "PUT",
            url: "/forSale-update/" + book.id,
            data: {
                price: $("#newMinPrice").val()
            }
        }).then(function(response) {
            generateForSaleContent();
            console.log(JSON.stringify(response));
            console.log("Updated price of  " + book.id + " in forsale");
            $("#changeMinPrice").hide();
        });
    });
};

const handleSearchClick = function(book) {
    event.preventDefault();
    console.log("Line 43: " + book.id);

    const bookIsbn = book.ISBN;
    const minPrice = book.Min_Price;

    $.ajax({
        type: "GET",
        url:`/for-sale/isbn/${bookIsbn}/price/${minPrice}` 
        
    }).then(function(response){
        
        for (i = 0; i < response.length; i++) {
            const buyer = response[i];

            const symbolSpan3 = $("<span>")
            .addClass("bold")
            .text(" ✒︎ ");
            const buyerUsername = buyer.username;
            const buyerEmail = buyer.email;

            const listItem = $("<li>")
            .addClass("potentialBuyer")
            .attr("id", "buyerId" + buyer.id)
            .append(buyerUsername, symbolSpan3, buyerEmail); 

            $("#matchResults").append(listItem);
            $("#results-modal").modal("toggle");
        }
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
            .addClass("searchForContacts")
            .attr("src", "../images/icon-request-info.png")
            .attr("title", "Find Buyers")
            .attr("id", "findBuyersFor" + book.id);  
            
            deleteIcon.on("click", function() {
                handleDeleteClick(book);
            });
            
            editIcon.on("click", function() {
                handleUpdateClick(book);
            });

            searchIcon.on("click", function() {
                handleSearchClick(book);
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
      
