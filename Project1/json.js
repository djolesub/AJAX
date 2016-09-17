window.onload = function(){
    var bt1 = document.getElementById('bt1');
    bt1.onclick = function(){
        loadJSON();
    }






};

function loadJSON(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
           getJSON(xhttp);
        }
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();

}

function getJSON(xhttp){
    var jsonDoc = xhttp.responseText;
    var div = document.getElementById('myDivElement');
    var json = JSON.parse(jsonDoc);
    var html = "";
    for(var i = 0;i<json.books.length;i++){
        html+=json.books[i].title + "\n" + json.books[i].isbn;
    }
    div.innerHTML = html;


    };




