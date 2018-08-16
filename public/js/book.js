$(document).ready(function(){

    console.log("connected");
    $("#isbn").on("click", function(){
        console.log("what you typed", $("#isbnInput").val());
        $.ajax({
            type:"get",
            url:"/getbooks"
        }).then(function(bookdata){
            console.log("bookdata", bookdata);
        });
    });

});