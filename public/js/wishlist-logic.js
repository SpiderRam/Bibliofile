const handleDeleteClick = function (book) {
    event.preventDefault();
    console.log("Trying to delete " + book.id);

    $.ajax({
        type: "DELETE",
        url: "/wishlist-delete/" + book.id
    }).then(function(response) {
        generateWishlistContent();
        console.log(JSON.stringify(response));
        console.log("Deleted " + book.id + " from Wishlist");
    });
};

// const handleUpdateClick = function(book) {
//     event.preventDefault();
//     console.log("Trying to update price on " + book.id);

//     $.ajax({
//         type: "PUT",
//         url: "/wishlist-update/" + book.id
//     }).then(function(response) {
//         generateWishlistContent();
//         console.log(JSON.stringify(response));
//         console.log("Updated price of  " + book.id + " in Wishlist");
//     });
// };

const generateWishlistContent = function() {
    var userID = sessionStorage.userID;
    $.ajax({
        type: "GET",
        url: "/wishlist/" + userID
    }).then(function(response){
        const wishlistContents = $("#wishlistContents");
        wishlistContents.empty();
    
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
                .text("Max Price: " + book.Max_Price);
    
            const listItem = $("<li>")
                .addClass("wishlistEntry")
                .attr("id", "wishlistId" + book.id)
                .append(authorSpan, symbolSpan, priceSpan);
    
            const deleteIcon = $("<img>")
                .addClass("wishlistDelete")
                .attr("src", "../images/icon-book-delete.png")
                .attr("title", "Delete")
                .attr("id", "deleteWishlistBook" + book.id);

            const editIcon = $("<img>")
                .addClass("wishlistEdit")
                .attr("src", "../images/icon-book-edit.png")
                .attr("title", "Change Price")
                .attr("id", "editWishlistBook" + book.id);
                
            const searchIcon = $("<img>")
                .addClass("maxPriceUpdate")
                .attr("src", "../images/icon-request-info.png")
                .attr("title", "Find Sellers")
                .attr("id", "updatePriceOf" + book.id);  
    
            deleteIcon.on("click", function() {
                handleDeleteClick(book);
            });
    
            const titleSpan = $("<span>")
                .addClass("underline")
                .text(book.Title);
    
            listItem.prepend([deleteIcon, editIcon, searchIcon, titleSpan, symbolSpan2]);
            wishlistContents.append(listItem);
        }
    });
};


$(document).ready(function(){      
    generateWishlistContent();
});


