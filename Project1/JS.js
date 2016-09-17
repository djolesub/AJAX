
    function getMessage(data) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(xhttp.readyState = 4 && xhttp.status == 200){
                document.getElementById('response').innerHTML = xhttp.responseText;
            }
        }
        xhttp.open("GET","ajaxResponse.php?q="+data,true);
        xhttp.send();

    }

//Exwrcise JS
    window.onload = function() {
        var a = prompt("Enter Number");
        a = Number(a);
        var body = document.getElementById('body');
        if (typeof(a) == "number") {
            for (var i = 0; i < a; i++) {
                var p = document.createElement('H');
                var p1 = p.appendChild(document.createTextNode('Ovo je paragraf broj ' + i));

                body.appendChild(p1);

            }


        } else {
            alert("Its not");
        }
    }


