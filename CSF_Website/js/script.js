  // Initialize AOS animation
  AOS.init({
    duration: 800,
    once: true
});



// Staggered animation for elements
document.addEventListener('DOMContentLoaded', function() {
    const staggerItems = document.querySelectorAll('.stagger-item');
    setTimeout(() => {
        staggerItems.forEach(item => {
            item.classList.add('active');
        });
    }, 300);
    
    const fadeUpElements = document.querySelectorAll('.fade-up');
    setTimeout(() => {
        fadeUpElements.forEach(element => {
            element.classList.add('active');
        });
    }, 100);
});




document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('header');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            header.classList.toggle('mobile-menu-active');
        });
    }

    // Add Sign In and Login buttons to navbar
    const navbar = document.querySelector('.navbar .nav-links');
    if (navbar) {
        const signInBtn = document.createElement('a');
        signInBtn.href = '#signin';
        signInBtn.textContent = 'Sign In';
        signInBtn.classList.add('btn', 'btn-signin');

        const loginBtn = document.createElement('a');
        loginBtn.href = '#login';
        loginBtn.textContent = 'Login';
        loginBtn.classList.add('btn', 'btn-login');

        navbar.appendChild(signInBtn);
        navbar.appendChild(loginBtn);
    }
    
});