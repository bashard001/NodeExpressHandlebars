$(function(){
    $(".form").on("submit", function(event){


    event.preventDefault();

    var newBurger = {
        name: $("#message").val().trim()
    }

    $.ajax("/api/burgers",{
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("new burger")
            location.reload();
        }
    )
})
})

