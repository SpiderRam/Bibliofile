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
    
            const listItem = $("<li>")
                .addClass("wishlistEntry")
                .attr("id", "wishlistId" + book.id)
                .text(book.Author);
    
            const deleteImage = $("<img>")
                .addClass("wishlistDelete")
                .attr("src", "../images/icon-book-delete.png")
                .attr("title", "Delete")
                .attr("id", "deleteWishlistBook" + book.id);

            const editImage = $("<img>")
                .addClass("wishlistEdit")
                .attr("src", "../images/icon-book-edit.png")
                .attr("title", "Change Price")
                .attr("id", "editWishlistBook" + book.id);
                
            const searchImage = $("<img>")
                .addClass("maxPriceUpdate")
                .attr("src", "../images/icon-request-info.png")
                .attr("title", "Find Sellers")
                .attr("id", "updatePriceOf" + book.id);  
    
            deleteImage.on("click", function() {
                handleDeleteClick(book);
            });
    
            const titleSpan = $("<span>")
                .addClass("underline")
                .text(book.Title);
    
            const symbolSpan = $("<span>")
                .addClass("bold")
                .text(" ✒︎ ");
    
            listItem.prepend([deleteImage, editImage, searchImage, titleSpan, symbolSpan]);
            wishlistContents.append(listItem);
        }
    });
};


$(document).ready(function(){      
    generateWishlistContent();
});


