<?php
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "security_management";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the username and password from the POST request
$user = $_POST['username'];
$pass = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $user, $pass);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // User found
    echo "Login successful";
} else {
    // User not found
    echo "Invalid credentials";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
