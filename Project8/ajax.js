$(document).ready(function(){
    $('#user').change(function(){
        getUserInformation();
    });

});

window.load = function(){
    loadUSer();
}

function getUserInformation(){
    var nameVal = $('#user').val();

    $.get("phpUsername.php",{params:nameVal},function(data){
        $('#data').html(data);
    });
}




/*
function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState < 4)
            document.getElementByID('data').innerHTML = "Loading data ...";
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementByID('data').innerHTML = xhr.responseText;
        }
        var params = document.getElementById('user').value();
        console.log(params);
        xhr.open("GET", "index.php", true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("params="+params);


    }

}*/
