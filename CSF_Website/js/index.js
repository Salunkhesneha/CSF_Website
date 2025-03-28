 // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-out-quart',
        once: true,
        offset: 100
    });

    // Enhanced GSAP Animations
    document.addEventListener('DOMContentLoaded', function() {
        // Hero section animations
        gsap.from('.hero-content h1', {
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-content p', {
            duration: 1,
            x: -50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-stats', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.9,
            ease: 'power3.out'
        });

        // Job cards animation
        gsap.utils.toArray('.job-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "back.out(1)"
            });
        });

        // Testimonial slider
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonialCards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });
            
            testimonialDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % testimonialCards.length;
            showTestimonial(nextIndex);
        }, 5000);
    });
