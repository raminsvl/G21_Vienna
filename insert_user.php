<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve the username from the request
  $username = $_POST['username'];

  // Validate the username (optional)
  if (trim($username) !== '') {
    // Database connection parameters
    $host = '127.0.0.1';     // Replace with your MySQL host
    $db   = 'Munch';         // Replace with your database name (Munch in this case)
    $user = 'root'; // Replace with your MySQL username
    $pass = 'adminroot'; // Replace with your MySQL password

    try {
      // Create a new PDO instance for the database connection
      $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass);

      // Prepare the SQL statement for inserting the username
      $stmt = $pdo->prepare('INSERT INTO users (username) VALUES (?)');
      $stmt->execute([$username]);

      // Return a JSON response indicating success
      $response = ['success' => true];
      echo json_encode($response);
    } catch (PDOException $e) {
      // Return a JSON response indicating failure
      $response = ['success' => false];
      echo json_encode($response);
    }
  } else {
    // Return a JSON response indicating failure (username is empty)
    $response = ['success' => false];
    echo json_encode($response);
  }
} else {
  // Return a JSON response indicating failure (invalid request method)
  $response = ['success' => false];
  echo json_encode($response);
}
