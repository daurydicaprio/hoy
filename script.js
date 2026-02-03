document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Header Sticky Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.background = 'rgba(10, 25, 47, 0.95)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.background = 'rgba(10, 25, 47, 0.85)';
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Cerrar menú al hacer click en enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // --- 3. Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 4. Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger una vez al cargar
});
