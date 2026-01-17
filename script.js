document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('animated-text');
    const baseText = 'End of page';
    let dotsCount = 0;
    
    function animateDots() {
        dotsCount = (dotsCount + 1) % 4;
        const dots = '.'.repeat(dotsCount);
        textElement.textContent = baseText + dots;
    }
    
    setInterval(animateDots, 500);
});