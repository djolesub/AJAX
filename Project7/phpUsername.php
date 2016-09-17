<?php
/**
 * Created by PhpStorm.
 * User: Milenica
 * Date: 9/9/2016
 * Time: 12:13 PM
 */

$names = array("Dusan","Djordje","Dejan","Darko","Danilo","Andrijana","Ana","Andjelka","Anastasija","Pavle","Patrik","Panta");

if($_GET){
    if(isset($_GET['name']) && !empty($_GET['name'])){
        $hint = "";
        $name = htmlentities(trim($_GET['name']));
       foreach($names as $n){
           if(stristr($name,substr($n,0,strlen($name)))){
                if ($hint == ""){
                    $hint = $n;
                }else {
                    $hint.=",".$n;
                }
           }
        }
        echo $hint = ""? "no sugestion":$hint;
    }

}









?>