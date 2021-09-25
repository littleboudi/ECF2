$(document).ready(function(){

    $('#slippry-demo').slippry();

    $("button").click (function (e) { 
        e.preventDefault();

        
        if ($("#mail").val()== "") {
            $("#obligatoire").css("display", "block");
            console.log("toto");

        } 
        else {
            $("#obligatoire").css("display", "none");

        }

       
        
        
    });
    
    
});



