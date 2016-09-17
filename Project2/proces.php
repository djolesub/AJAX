<?php
   header("Content-Type:application/json");
    $a  = array("ime"=>"Djordje","prezime"=>"Subotic","godine"=>27);
    $json = json_encode($a);
    //var_dump($json);

    echo $json;
?>