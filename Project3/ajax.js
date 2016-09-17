window.onload = function(){
    var bt1 = document.getElementById('getData');
    bt1.onclick = function(){
        loadDoc();
    }

    var bt2 = document.getElementById('resetData');
    bt2.onclick = function(){
        var div = document.getElementById('content');
        div.innerHTML = "";
    }

}

//Creating ajax functions
    function loadDoc(){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState < 4)
                document.getElementById('content').innerHTML = "Loading ....";
            else if(xhr.readyState == 4){
                if(xhr.status == 200 && xhr.status < 300){
                    document.getElementById('content').innerHTML = xhr.responseText;
                }
            }
        }
        xhr.open("GET","data.html",true);
        xhr.send(null);




    }


