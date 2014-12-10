<?php
/*
 * Made By: Siddharth Panchal & Dylan Burnham
 * 
 * File Name: part1Submit.php
 * 
 * Description: Form submission validation and insertion is handeled by this file.  
 */
 
/*define("server","localhost");
define("dbname","exam");
define("dbuser","root");
define("dbpass","dbpass");

$db = new PDO("mysql:host=".server.";dbname=".dbname,dbuser, dbpass);*/

if(!isset($_POST['submit']))
	header("location: part1.php");
	
$error="";
$success="";

$firstname = $_REQUEST['fname'];
$lastname = $_REQUEST['lname'];
$month = $_REQUEST['select-choice-month'];
$day = $_REQUEST['select-choice-day'];
$year = $_REQUEST['select-choice-year'];
$phone = $_REQUEST['phone'];

echo "<h1>Registration: Result</h1>";

if(empty($firstname) || strlen($firstname) < 1 || strlen($firstname) > 25)
{
	$error .= "<li>First Name is Invalid: Must be between 1 to 25 characters in length</li>\n";
}
if(!preg_match("/^[A-Za-z]+$/i",$firstname))
{
	$error .= "<li>First Name is Invalid: Only Alphabets are allowed</li>\n";
}
if(empty($lastname) || strlen($lastname) < 1 || strlen($lastname) > 25)
{
	$error .= "<li>Last Name is Invalid: Must be between 1 to 25 characters in length</li>\n";
}
if(!preg_match("/^[A-Za-z]+$/i",$lastname))
{
	$error .= "<li>Last Name is Invalid: Only Alphabets are allowed</li>\n";
}
if(!preg_match("/^[A-Za-z]+$/i",$lastname))
{
	$error .= "<li>Last Name is Invalid: Only Alphabets are allowed</li>\n";
}
if(empty($phone))
{
	$error .= "<li>Phone Number is Invalid: Can not be empty</li>\n";
}
if(!preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/",$phone))
{
	$error .= "<li>Phone Number is Invalid: Must be in 000-000-0000 format</li>\n";
}

if(!empty($error))
{
	echo "<p>Error Found</p>\n<ul>\n";
	echo $error;
	echo "</ul>\n";
}
else
{
	echo "Success.";
}

?>