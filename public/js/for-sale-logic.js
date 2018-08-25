const handleDeleteClick = function (book) {
    event.preventDefault();
    console.log("Trying to delete " + book.id);

    $.ajax({
        type: "DELETE",
        url: "/forSale-delete/" + book.id
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
        url: "/for-sale/" + userID
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

            const listItem = $("<li>")
            .addClass("forSaleEntry")
            .attr("id", "forSaleId" + book.id)
            .append(authorSpan, symbolSpan, priceSpan);
            
            
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

