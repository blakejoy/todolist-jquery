
//second argument says when li clicked in ul run code
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


$("ul").on("click", ".delete", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    e.stopPropagation(); //Stop event from hitting parent elements
});

$("input[type='text']").keypress(function(e){
    if (e.which == 13){
    var todoText = $(this).val();

    $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
    $(this).val(""); 
    }
});


$('.fa-plus').click(function(){
    $("input[type=text]").fadeToggle();
});