<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true || $_SESSION['username'] !== 'admin') {
    header("Location: ../index.php");
    exit;
}

$usersFile = '../data/users.json';

function getUsers() {
    global $usersFile;
    if (!file_exists($usersFile)) {
        return [];
    }
    return json_decode(file_get_contents($usersFile), true) ?: [];
}

function saveUsers($users) {
    global $usersFile;
    return file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT)) !== false;
}

$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : '';

switch ($action) {
    case 'add':
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $username = trim($_POST['username'] ?? '');
            $password = trim($_POST['password'] ?? '');
            
            if (empty($username) || empty($password)) {
                header('Location: ../adminpanel/index.php?tab=users&error=Username oraz AuthKey nie mogą być puste');
                exit;
            }
            
            if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
                header('Location: ../adminpanel/index.php?tab=users&error=Username posiada niedozwolone znaki.');
                exit;
            }
            
            $users = getUsers();
            if (isset($users[$username])) {
                header('Location: ../adminpanel/index.php?tab=users&error=użytkownik z tym username już istnieje');
                exit;
            }
            
            $users[$username] = $password;
            
            if (saveUsers($users)) {
                header('Location: ../adminpanel/index.php?tab=users&user_added=true');
            } else {
                header('Location: ../adminpanel/index.php?tab=users&error=Nie udało się zapisać użytkownika');
            }
            exit;
        }
        break;
        
    case 'delete':
        $username = trim($_GET['username'] ?? '');
        
        if (empty($username)) {
            header('Location: ../adminpanel/index.php?tab=users&error=Nie podano username');
            exit;
        }
        
        if ($username === 'admin') {
            header('Location: ../adminpanel/index.php?tab=users&error=Nie można usunąć administratora');
            exit;
        }
        
        $users = getUsers();
        if (isset($users[$username])) {
            unset($users[$username]);
            
            if (saveUsers($users)) {
                header('Location: ../adminpanel/index.php?tab=users&user_deleted=true');
            } else {
                header('Location: ../adminpanel/index.php?tab=users&error=Nie udało się usunąć użytkownika');
            }
        } else {
            header('Location: ../adminpanel/index.php?tab=users&error=Nie znaleziono użytkownika');
        }
        exit;
        break;
        
    default:
        header('Location: ../adminpanel/index.php?tab=users');
        exit;
}
?>
