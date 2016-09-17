
window.onload = function(){
    process1();

    var bt2 = document.getElementById('bt2');
    bt2.onclick = function(){
        styleTable1();
    }

    var bt1 = document.getElementById('bt1');
    bt1.onclick = function(){
        styleTable2();
    }
    //AJAX
    var b = document.getElementById('bt3');
    b.onclick = function(){
        getData();
    }

};

//Defining function process()
function process1(){
    var p = document.createElement('P');
    var p = p.appendChild(document.createTextNode('Created Text Node For Paragraph'));
    var str;
    str = "<ul>" +
        "<li>Black</li>" +
        "<li>Orange</li>" +
        "</ul>";
    var myDiv = document.getElementById('myDivElement');
    myDiv.innerHTML = str;
    myDiv.appendChild(p);

}

//Defining function styleTable1() for CSS manipulation
function styleTable1(){
    var hrow = document.getElementById('hrow');
    var drow = document.getElementById('drow');
    hrow.setAttribute('style','color:red');
    drow.setAttribute('style','background-color:blue');

}

//Defining functoin styleTable2() for CSS amnipulation
function styleTable2(){
    var hrow = document.getElementById('hrow');
    var drow = document.getElementById('drow');
    hrow.setAttribute('style','color:blue');
    drow.setAttribute('style','background-color:red');

}

//Crrating xmlHttpRequest instance
function createXMLHttpRequest(){
    //Storing the reference of XMLHttpRequest Object in the xmlHttp variable
    var xmlHttp;
    try {
        //IE7 or newer or other Browsers
        xmlHttp = new XMLHttpRequest();
    }
    catch(e) {
        try {
            //IF IE6 or older
            xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
        }
        catch (e) {}
    }
    //Return Object or Error
    if(!xmlHttp){
        alert("Error while Creating XMLHttpRequest Object");
    }else {
        return xmlHttp;
    }
}

function getData(){
    var xmlHttp = createXMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            document.getElementById('main').innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("GET","data.txt",true);
    xmlHttp.send(null);

}


