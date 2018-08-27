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

const handleSearchClick = function() {
    event.preventDefault();
    const searchForBuyers = $("#findBuyersFor" + book.id);

    const bookIsbn = book.ISBN;
    const minPrice = book.Min_Price;

    searchForBuyers.on("click", function() {
        $.ajax({
            type: "GET",
            url: "/for-sale/isbn/" + bookIsbn + "/price/" + minPrice 
        }).then(function(response){

        });
    });

    //.then populate <li></li> elements and append them to #matchResults inside the modal
    //This function is set to be called on click of searchIcon in the generateForSaleContent function

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
                handleSearchClick();
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

