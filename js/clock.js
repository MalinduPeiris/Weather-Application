const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = now.toLocaleDateString('en-US', options);
}

updateClock();
updateDate();
setInterval(updateClock, 1000);

document.querySelector('.search-btn').addEventListener('click', function () {
    const searchValue = document.querySelector('.search-input').value;
    if (searchValue.trim() !== '') {
        document.getElementById('city').textContent = searchValue;
        // In a real app, you would fetch weather data for the searched location
        alert(`Searching for weather in: ${searchValue}`);
    }
});

document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});