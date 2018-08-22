
$(document).ready(function(){
 var bookToSave ={};
 var isbn = {};
    console.log("connected");

    $("#searchSubmit").on("click", function(){
        
        if ($("#titleInput").val().length > 0){
            console.log("search good reads");
            console.log("what you typed", $("#titleInput").val());
            $.ajax({
                type:"GET",
                url:"https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/search.xml?key=npMdKLrrzaYcjRKy80bUA&q="+$("#titleInput").val()
            }).then(function(bookdata){
                console.log("bookdata", bookdata);
                var cleanData = JSON.parse(bookdata);
                console.log("bookData",cleanData);
            });
        } else if($("#isbnInput").val().length > 0){
            isbn = $("#isbnInput").val();
            console.log($("#isbnInput").val());
              console.log("search isbn");
            //   $("#isbn").on("click", function(){
            //     console.log("what you typed", $("#isbnInput").val());
                $.ajax({
                    type:"GET",
                    url:"http://localhost:3000/books/" + isbn
                }).then(function(response){
                    // $.post("/", bookdata, function(book){
                    //     console.log(bookdata);
                    //     var cleanData = JSON.parse(book);
                    //     console.log("book", cleanData);
                    
                    // });
                    $("#book-title").text(response.title);
                    console.log(response);
                    bookToSave = response;
                });
            // });
        };
//     $("#isbnBtn").on("click", function(){
//         console.log("what you typed", $("#isbnInput").val());
//        var userSearch= {value: $('')val().trim()}
//         $.POST
//     });
    
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
        Max_Price: parseFloat($("#wishListPrice").val()),
    
    }
    console.log(cleanBook, "clean book");

    $.ajax({
        type:"POST",
        url:"http://localhost:3000/wishlist",
        data:cleanBook
    }).then(function(response){

    })
})
});
