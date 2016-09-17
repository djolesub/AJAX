<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="JS.js"></script>
    <link rel="stylesheet" href="CSS.css">
</head>
<body id="body">

<div class="container">
    <div class="row">
        <header class="col-md-12">
            <h1>First Simple AJAX APP</h1>
        </header>
    </div>
    <div class="row">
       <form  class="form-horizontal">
           <div class="form-group">
               <label class="control-label col-md-2" for="name">Enter Name:</label>
               <div class="col-sm-4">
                   <input type="text" class="form-control" id="name"  placeholder="Enter name" onkeyup="getMessage(this.value)">
               </div>
           </div>
           <div class="form-group">
               <div class="col-md-offset-2 col-md-4">
                   <button type="submit" class="btn btn-default" id="getMEssage">Get Message</button>
               </div>
           </div>
       </form>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="col-sm-offset-2" id="response"> Here will be text </div>
        </div>
    </div>
</div>

</body>
</html>