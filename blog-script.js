document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.blog-card');
    let delay = 0;

    cards.forEach(card => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, delay);

        delay += 300; // Adjust timing as needed
    });
});
