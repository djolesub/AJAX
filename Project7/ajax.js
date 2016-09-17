$(document).ready(function(){
    $("#sName").on("keyup",function(){
        var enteredName = $(this).val();

        $('#data').toggleClass('bg-success');
        $.get("phpUsername.php",{name:enteredName},function(data,suc,xhr){
          if( suc == "success") {
              console.log(data);
              $('#data').text(data);
          }
          else {
              alert("There was problem while reciving data");
          }


        });


    });




});





