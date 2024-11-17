document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.upload-container').style.display = 'block';
});

document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('selfie');
    if (fileInput.files.length > 0) {
        document.querySelector('.upload-container').style.display = 'none';
        document.querySelector('.location-container').style.display = 'block';
    } else {
        alert('Please upload a selfie.');
    }
});

document.getElementById('locationButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const map = document.getElementById('map');
    map.innerHTML = `<iframe width="100%" height="100%" src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed"></iframe>`;
    alert('Attendance marked!');
}
