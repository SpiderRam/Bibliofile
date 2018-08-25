$(document).ready(function(){      
    var userID = sessionStorage.userID;
    $.ajax({
        type: "GET",
        url: "/for-sale/" + userID
    }).then(function(response){
        
        for (i = 0; i < response.length; i++) {
            var book = response[i];
        
        $("#forSaleContents").append("<li class='forSaleEntry' id='forSaleId" + book.id +  "'><img src='../images/icon-book-delete.png' class='forSaleDelete' title='Delete' id='deleteBook" + book.id + "'><img src='../images/icon-book-edit.png' class='forSaleEdit' title='Change Price' id='editBook" + book.id + "'><img src='../images/icon-request-info.png' class='minPriceUpdate' title='Find Buyers' id='updatePriceOf" + book.Min_Price + "'><span class='underline'>" + book.Title + "</span> <span class='bold'> ✒︎ </span> " + book.Author + "<span class='bold'> ✒︎ </span>Min Price: " + book.Min_Price + "</li>");
        }
    });

});

var Min_Price;
        for (var i = 0; i <  Max_Price; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if bid was high enough
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Bid placed successfully!");
              start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Your bid was too low. Try again...");
          start();
        }
      