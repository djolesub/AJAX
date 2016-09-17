<?php
/**
 * Created by PhpStorm.
 * User: Milenica
 * Date: 9/10/2016
 * Time: 4:14 PM
 */
//header("Content-Type:text/xml");
/*$myXMLData =
    "<?xml version='1.0' encoding='UTF-8'?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>";*/

/*$xml = simplexml_load_string($myXMLData);
var_dump($xml);*/

//Read From File

/*$xmlI = simplexml_load_file('note') or die('No such file');
echo $xmlI->to;
echo $xmlI->from;
echo $xmlI->heading;
echo $xmlI->body;

$new = new SimpleXMLElement();
$users  = $new->addChild("Users");
$user1 = $users->addChild("User");
$user1->addChild("name","Djordje");
$user1->addChild("lastName","Subotic");
$user1->addChild("age",26);

$user2 = $users->addChild("User");
$user2->addChild("name","Kristina");
$user2->addChild("lastName","ovac");
$user2->addChild("age",31);

$a = $new->asXML();
var_dump($a);*/

$books = simplexml_load_file("books");

foreach($books->book as $book){
   echo "$book->title\t$book->author\t$book->year\t$book->price<br>";
}

























