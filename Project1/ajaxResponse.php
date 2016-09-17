<?php
    /*if($_SERVER['REQUEST_METHOD'] =="POST"){
        if(isset($_POST['name']) && !empty($_POST['name'])){
            $name = validate($_POST['name']);
            echo "Hello $name.Welcome to our site";
        }
    }*/

    $name = $_REQUEST['q'];
    $name = validate($name);
    echo "Hello $name";


    //FUnction for validate input
    function validate($data){
        if (is_string($data)) {
            $data = trim($data);
            $data = htmlentities($data);
        } else{
            echo "You must enter a String";
        }
        return $data;
    }

?>