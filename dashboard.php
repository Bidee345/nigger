<?php
session_start();
if(!isset($_SESSION['loggedin'])||$_SESSION['loggedin']!==true){header("Location: index.php");exit;}
$u=$_SESSION['username'];
$a=($u==='admin');
?>
<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Panel</title>
<link rel="stylesheet" href="panel.css">
</head>
<body>
<div class="wrap">
<div class="top">
<div>
<h1>System</h1>
<span class="badge" style="margin-top:6px;display:inline-block;"><?php echo $u;?></span>
</div>
<div class="top-r">
<?php if($a):?><a href="adminpanel/index.php">Admin</a><?php endif;?>
<a href="info.php">Info</a>
<a href="api/logout.php">Wyloguj</a>
</div>
</div>
<div class="card" style="display:flex;align-items:center;justify-content:space-between">
<div>
<h2 style="margin-bottom:4px">Kreator</h2>
<p style="margin:0">Utwórz nową instancję</p>
</div>
<a href="generator.php" class="btn btn-w">Start</a>
</div>
</div>
</body>
</html>
