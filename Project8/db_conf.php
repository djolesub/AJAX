<?php
/**
 * Created by PhpStorm.
 * User: Milenica
 * Date: 9/10/2016
 * Time: 11:05 AM
 */
try {
    $conn = new PDO("sqlite:user.sqlite");
    $conn->exec("USE user.sqlite");

}
catch(PDOException $e) {
    echo "Error while establishing connection.<br>";
    echo "{$e->getMessage()}";
}


















