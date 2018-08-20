$(document).ready(function(){

    console.log("connected");

    $("#librarySubmit").on("click", function(){
            console.log("what you typed", $("#titleInput").val());
            console.log($("#isbnInput").val());
    
            if ($("#titleInput").val().length > 0){
              console.log("search good reads");
              $.ajax({
                  type:"GET",
                  url:"https://cors-anywhere.herokuapp.com/"+"https://www.goodreads.com/search.xml?key=npMdKLrrzaYcjRKy80bUA&q="+$("#titleInput").val()
              }).then(function(bookdata){
                  console.log("bookdata", bookdata);
                  var cleanData = JSON.parse(bookdata);
                    console.log("bookData",cleanData);
              });
            } else if($("#isbnInput").val().length > 0){
              console.log("search isbn");
              $("#isbn").on("click", function(){
                console.log("what you typed", $("#isbnInput").val());
                $.ajax({
                    type:"get",
                    url:"/library"
                }).then(function(book){
                    console.log("book", book);
                });
            });
        };
//     $("#isbnBtn").on("click", function(){
//         console.log("what you typed", $("#isbnInput").val());
//        var userSearch= {value: $('')val().trim()}
//         $.POST
//     });
    
});
});
