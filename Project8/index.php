<?php include_once "db_conf.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bootstrap Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="ajax.js"></script>

</head>
<body id="body">
<div class="container">
    <main id="main">
        <h1 style="text-align:center;">Working With Database,PHP,AJAX and Java Script </h1>
        <div class="row">
            <div class="col-md-6 ">
                <form class="form form-horizontal">
                    <div class="form-group">
                        <label for="user" class="control-label">Choose Name to Display:</label>
                        <select name="user" id="user" class="form-control">
                            <?php
                                $sql = "SELECT name,lastName FROM users";
                                $res = $conn->query($sql);
                                while($row = $res->fetch(PDO::FETCH_ASSOC)){
                                    echo "<option value=".implode('|',$row).">".implode(' ',$row)."</option>";
                                }

                            ?>
                            <option value="all"> All </option>
                        </select>
                    </div>
                </form>
            </div>
            <div id="data" class="col-md-6"> Here will be data </div>
        </div>
    </main>
</div>

</body>
</html>