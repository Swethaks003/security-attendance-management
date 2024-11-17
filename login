<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Management System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>

    <div class="upload-container" style="display: none;">
        <h2>Upload Selfie</h2>
        <input type="file" id="selfie" accept="image/*" required>
        <button id="uploadButton">Upload</button>
    </div>

    <div class="location-container" style="display: none;">
        <h2>Track Location</h2>
        <button id="locationButton">Get Location</button>
        <div id="map"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
