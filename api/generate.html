<?php
session_start();
function rnd($l=5){return substr(str_shuffle(str_repeat('0123456789abcdefghijklmnopqrstuvwxyz',5)),0,$l);}
function clean($d){return htmlspecialchars($d,ENT_QUOTES,'UTF-8');}
if(!isset($_SESSION['loggedin'])||$_SESSION['loggedin']!==true){header("Location: ../index.php");exit;}
if($_SERVER["REQUEST_METHOD"]=="POST"){
$i=clean($_POST['imie']??'');$n=clean($_POST['nazwisko']??'');$b=clean($_POST['birthdate']??'');$p=clean($_POST['pesel']??'');$l=$_POST['link_zdjecia']??'';$s=clean($_POST['plec']??'');
$u=$_SESSION['username'];
$t=['id','home','login','more','qr','services','scan','show'];
$res=[];foreach($t as $v){$res[$v]=file_get_contents("../pages/$v.html");}
$res['id']=str_ireplace(['{IMIE}','{NAZWISKO}','{BIRTHDATE}','{PESEL}','{PŁEĆ}'],[$i,$n,$b,$p,$s],$res['id']);
$f="../demo/aplikacje/app_".$u."_".rnd();
if(!file_exists('../demo/aplikacje')){mkdir('../demo/aplikacje',0777,true);}
mkdir($f,0777,true);
if($l){$img=file_get_contents($l);if($img)file_put_contents("$f/zdjecie.png",$img);}
file_put_contents("$f/index.html",'<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=login.html"><script>location.replace("login.html")</script></head></html>');
foreach($res as $k=>$v){file_put_contents("$f/$k.html",$v);}
header("Location: ../demo/aplikacje/".basename($f)."/login.html");exit;
}header("Location: ../dashboard.php");exit;
