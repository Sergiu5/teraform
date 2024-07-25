const rainContainer = document.getElementById('rain-container');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    raindrop.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        rainContainer.removeChild(raindrop);
    }, 1000);
}

setInterval(createRaindrop, 50);
