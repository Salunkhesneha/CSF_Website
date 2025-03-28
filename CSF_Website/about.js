document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkVisibility() {
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.85) {
                // Staggered animation
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 150);
            }
        });
    }
    
    // Initial check
    checkVisibility();
    
    // Throttled scroll event
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkVisibility, 50);
    }, false);

    // Add hover effect for non-touch devices
    if (!('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        const cards = document.querySelectorAll('.timeline-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
            });
        });
    }
});