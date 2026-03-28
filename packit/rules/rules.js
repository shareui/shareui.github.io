document.addEventListener('DOMContentLoaded', function() {
    const sectionEn = document.getElementById('content-en');
    const sectionRu = document.getElementById('content-ru');
    const btnEn = document.getElementById('btn-en');
    const btnRu = document.getElementById('btn-ru');
    const animatedText = document.getElementById('animated-text');

    function loadMd(url, targetEl) {
        fetch(url)
            .then(function(r) { return r.text(); })
            .then(function(text) { targetEl.innerHTML = marked.parse(text); })
            .catch(function() { targetEl.textContent = 'failed to load.'; });
    }

    loadMd('rules.en.md', document.getElementById('md-en'));
    loadMd('rules.ru.md', document.getElementById('md-ru'));

    function showEn() {
        sectionEn.classList.add('active');
        sectionRu.classList.remove('active');
        btnEn.classList.add('active');
        btnRu.classList.remove('active');
    }

    function showRu() {
        sectionRu.classList.add('active');
        sectionEn.classList.remove('active');
        btnRu.classList.add('active');
        btnEn.classList.remove('active');
    }

    btnEn.addEventListener('click', showEn);
    btnRu.addEventListener('click', showRu);

    showEn();

    const baseText = 'End of page';
    let dotsCount = 0;

    function animateDots() {
        dotsCount = (dotsCount + 1) % 4;
        animatedText.textContent = baseText + '.'.repeat(dotsCount);
    }

    setInterval(animateDots, 500);
});
