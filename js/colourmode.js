const lightModeBtn = document.getElementById('lightModeBtn');
const highContrastModeBtn = document.getElementById('highContrastModeBtn');
const sepiaModeBtn = document.getElementById('sepiaModeBtn');
const nightModeBtn = document.getElementById('nightModeBtn');

lightModeBtn.addEventListener('click', function() {
    setLightMode();
});

highContrastModeBtn.addEventListener('click', function() {
    setHighContrastMode();
});

sepiaModeBtn.addEventListener('click', function() {
    setSepiaMode();
});

nightModeBtn.addEventListener('click', function() {
    setNightMode();
});

function setLightMode() {
    document.body.style.filter = 'brightness(100%)';
}

function setHighContrastMode() {
    document.body.style.filter = 'invert(100%)';
}

function setSepiaMode() {
    document.body.style.filter = 'sepia(100%)';
}

function setNightMode() {
    document.body.style.filter = 'grayscale(50%)';
    document.body.style.filter = 'contrast(50%)';
}