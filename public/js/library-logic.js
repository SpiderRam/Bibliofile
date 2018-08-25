const handleDeleteClick = function (book) {
    event.preventDefault();
    console.log("Trying to delete " + book.id);

    $.ajax({
        type: "DELETE",
        url: "/library-delete/" + book.id
    }).then(function(response) {
        generateLibraryList();
        console.log(JSON.stringify(response));
        console.log("Deleted " + book.id + " from Library");
    });
};

const generateLibraryList = function() {
    var userID = sessionStorage.userID;
    $.ajax({
        type: "GET",
        url: "/library/" + userID
    }).then(function(response){
        const libraryContents = $("#libraryContents");
        libraryContents.empty();
    
        for (i = 0; i < response.length; i++) {
            const book = response[i];
    
            const listItem = $("<li>")
                .addClass("libraryEntry")
                .attr("id", "libraryId" + book.id)
                .text(book.Author);//TODO: inner
    
            const image = $("<img>")
                .addClass("libraryDelete")
                .attr("src", "../images/icon-book-delete.png")
                .attr("title", "Delete")
                .attr("id", "deleteBook" + book.id);
    
            image.on("click", function() {
                handleDeleteClick(book);
            });
    
            const titleSpan = $("<span>")
                .addClass("underline")
                .text(book.Title);
    
            const symbolSpan = $("<span>")
                .addClass("bold")
                .text(" ✒︎ ");
    
            listItem.prepend([image, titleSpan, symbolSpan]);
            libraryContents.append(listItem);
        }
    });
};


$(document).ready(function(){      
    generateLibraryList();
});