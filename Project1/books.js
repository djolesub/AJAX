window.onload = function(){

    var bt1 = document.getElementById('bt1');
    bt1.onclick = function(){
        loadDoc();
    };





};

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "book.xml", true);
    xhttp.send();
}

function myFunction(xml){
    var xmlDoc = xml.responseXML;

    xmlRoot = xmlDoc.documentElement;
    var titleArray = xmlRoot.getElementsByTagName('title');
    var isbnArray = xmlRoot.getElementsByTagName('isbn');
    var html = "";
    for (var i = 0;i<titleArray.length;i++){
        html += titleArray.item(i).firstChild.data +
            ", " + isbnArray.item(i).firstChild.data + "<br/>";
    }
    myDiv = document.getElementById("main");

    myDiv.innerHTML = "<p>Server says: </p>" + html;



}