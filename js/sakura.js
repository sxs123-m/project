(function () {
    function createSakura() {
        const sakura = document.createElement('span');
        sakura.classList.add('sakura');
        const size = Math.random() * 12 + 8;
        sakura.style.width = size + 'px';
        sakura.style.height = size + 'px';
        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animationDuration = Math.random() * 4 + 4 + 's';
        sakura.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 8000);
    }

    setInterval(createSakura, 300);
})();
