window.onload = function(){
    DisplayGreeting(GetCurrentHour);


    //Classes
    var p1 = new Person("Milena","Kovacevic");
    alert(p1.getName());
    //Creating table object
    var t1 = new Table(6,2);
    alert(t1.getCellCount());
    console.log(t1.row);

};

function GetCurrentHour()
{
// obtain the current hour
    var date = new Date();
    var hour = date.getHours();
// return the hour
    return hour;
}

function DisplayGreeting(hourFunc)
{
// retrieve the hour using the function received as parameter
    hour = hourFunc();
// display greeting
    if (hour >= 22 || hour <= 5)
        document.write("Goodnight, world!");
    else
        document.write("Hello, world!");
}



//Closures
function Person(name,lastname){
    this.name = name;
    this.lastname = lastname;

    this.getName = function(){
        return this.name;
    }
}


//Class Table

function Table(nrow,ncol){
    this.row = nrow;
    this.col = ncol;

    this.getRows = function() {
        return this.row;
    }
    this.getCols = function() {
        return this.col;
    }


}
Table.prototype.getCellCount = function(){
    return(this.getCols() * this.getRows());
}

















