// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .stat-card, .testimonial-card, .portfolio-item, .feature-item, .step'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(93, 64, 55, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(93, 64, 55, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '%';
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current) + '%';
        }
    }, 16);
};

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.profile-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mobile menu toggle (if needed)
const createMobileMenu = () => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header .container');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('mobile-menu-toggle');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        menuToggle.style.cssText = `
            background: linear-gradient(135deg, #FFB700 0%, #FF8C00 50%, #FF6B35 100%);
            border: none;
            color: white;
            font-size: 24px;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            display: none;
        `;
        
        header.insertBefore(menuToggle, nav);
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            nav.style.cssText = `
                position: fixed;
                top: 80px;
                right: -100%;
                width: 250px;
                background: white;
                box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                padding: 30px;
                transition: right 0.3s ease;
                flex-direction: column;
                height: calc(100vh - 80px);
                z-index: 999;
            `;
            
            nav.classList.add('mobile-nav');
        }
    }
};

// Add active class to mobile nav when toggled
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const nav = document.querySelector('.nav');
            if (nav) {
                nav.style.cssText = '';
                nav.classList.remove('active', 'mobile-nav');
            }
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.style.display = 'none';
            }
        } else {
            createMobileMenu();
            const toggle = document.querySelector('.mobile-menu-toggle');
            if (toggle) {
                toggle.style.display = 'block';
            }
        }
    });
});

// Add custom style for mobile nav active state
const style = document.createElement('style');
style.textContent = `
    .nav.active {
        right: 0 !important;
    }
    
    @media (max-width: 768px) {
        .nav a {
            display: block;
            padding: 15px 0;
            border-bottom: 1px solid #f0f0f0;
        }
    }
`;
document.head.appendChild(style);

// Add hover effect for CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('شروع ثبت نام! این یک صفحه نمایشی است.');
    });
}

// Add ripple effect to buttons
document.querySelectorAll('.cta-button, .social-link').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

console.log('Portfolio website loaded successfully! 🎨');
