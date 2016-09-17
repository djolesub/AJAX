window.onload = function(){
    var bt1 = document.getElementById('bt1');
    bt1.onclick = function(){
        loadDocJ();
    }



}

// Processing JSON
function loadDocJ(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            getPHP(xhttp);
        }
    }

    xhttp.open("GET","procesXML.php",true);
    xhttp.send(null);

}

function getPHP(xhttp){
    var div = document.getElementById('main');
    /*var doc = xhttp.responseText;
    var json = JSON.parse(doc);

    div.innerHTML = json.ime;*/
    var doc = xhttp.responseXML;
    var book = doc.getElementsByTagName('books');
    var a = book.firstChild.item(0);
    div.innerHTML = a;

}

