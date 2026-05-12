<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    $usersFile = '../data/users.json';
    if (!file_exists($usersFile)) {
        die("System error: users database not found.");
    }

    $users = json_decode(file_get_contents($usersFile), true);

    if (isset($users[$username]) && $users[$username] === $password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("Location: ../dashboard.php");
        exit;
    } else {
        echo "Invalid auth key.";
    }
} else {
    header("Location: ../index.php");
    exit;
}
?>
