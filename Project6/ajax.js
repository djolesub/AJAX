$(document).ready(function(){
  $('#tarantino').on('mouseover',function(){
      $.get("tarantino",function(data){
        $('#data').html('');

          var table = $.makeTable(data);
          $(table).appendTo("#data");

          $("#tarantino").removeClass("btn-primary").addClass("btn-success");


      });

      });


    //Woody Allen
    $("#woody").mouseover(
        function()
        {
            $.get("woodyallen",function(data)
            {
                $("#data").html("");
                $("#tarantino").removeClass("alert");

                var table = $.makeTable(data);
                $(table).appendTo("#data");

                $("#woody").addClass("btn-success");

                $("#woody").removeClass("btn-success").addClass("btn-primary");


            });
        });

        $('input[type="button"]').mouseout(function(){
            $('#data').html("");
        });



  });


$.makeTable = function (mydata) {
    var table = $('<table class="table">');
    var tblHeader = "<tr>";
    data = JSON.parse(mydata);
    for (var i in data[0]) tblHeader += "<th>" + i + "</th>";
    tblHeader += "</tr>";
    $(tblHeader).appendTo(table);
    $.each(data, function (index, value) {
        var TableRow = "<tr>";
        $.each(value, function (key, val) {
            TableRow += "<td>" + val + "</td>";
        });
        TableRow += "</tr>";
        $(table).append(TableRow);
    });
    return ($(table));
};



