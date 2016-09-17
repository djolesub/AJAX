<?php

   if($_GET){
       if(isset($_GET['params']) && !empty($_GET['params'])){
           include_once "db_conf.php";
           $params = $_GET['params'];
           if(str_word_count($params) > 1){

           $p_array = explode("|",$params);

           $name = $p_array[0];
           $lastName = $p_array[1];
           $sql = "SELECT * FROM users WHERE name=:name AND lastName=:lastName";
           $stmt = $conn->prepare($sql);
           $stmt->bindParam(":name",$name);
           $stmt->bindParam(":lastName",$lastName);
           $stmt->execute();
           if($stmt){
               echo "<table class='table'><tr><th>ID</th><th>Name</th><th>Last Name</th><th>Age</th></tr>";
               while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                   echo "<tr><th>{$row['Id']}</th><th>{$row['name']}</th><th>{$row['lastName']}</th><th>{$row['age']}</th></tr>";
               }
               echo "</table>";
           }
           else {
               echo "No such entry";
           }
           }else {
               $sql = "SELECT * FROM users ";
               $stmt = $conn->prepare($sql);

               $stmt->execute();
               if($stmt){
                   echo "<table class='table'><tr><th>ID</th><th>Name</th><th>Last Name</th><th>Age</th></tr>";
                   while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                       echo "<tr><th>{$row['Id']}</th><th>{$row['name']}</th><th>{$row['lastName']}</th><th>{$row['age']}</th></tr>";
                   }
                   echo "</table>";
               }
               else {
                   echo "No such entry";
               }
           }

       }
   }
?>









