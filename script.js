// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// WiFi Status Check
function updateWifiStatus() {
    const status = document.getElementById('status');
    if (navigator.onLine) {
        status.textContent = 'Online';
        status.style.color = 'green';
    } else {
        status.textContent = 'Offline';
        status.style.color = 'red';
    }
}

window.addEventListener('load', updateWifiStatus);
window.addEventListener('online', updateWifiStatus);
window.addEventListener('offline', updateWifiStatus);

// Add a timeout to update the WiFi status every 5 seconds
setInterval(updateWifiStatus, 5000);