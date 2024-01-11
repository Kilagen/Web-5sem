(() => {
    const loadTimeSpan = document.querySelector('.load-time');
    window.addEventListener('load', () => {
        const pageEnd = performance.mark('pageEnd');
        const loadTime = pageEnd.startTime;
        loadTimeSpan.innerHTML += `Page loaded in ${Math.floor(100 * loadTime) / 100} ms.`;
    });
})();