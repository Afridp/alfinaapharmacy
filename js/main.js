// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const header = document.querySelector('header');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth scroll for anchor links
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

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .about-section, .service-card, .value-card, .info-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initial animation state
document.querySelectorAll('.feature-card, .about-section, .service-card, .value-card, .info-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form validation and animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Simple validation
        let isValid = true;
        const requiredFields = ['name', 'email', 'subject', 'message'];
        
        requiredFields.forEach(field => {
            const input = contactForm.querySelector(`[name="${field}"]`);
            if (!formValues[field]) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-20px)';
            
            contactForm.appendChild(successMessage);
            
            // Animate success message
            setTimeout(() => {
                successMessage.style.opacity = '1';
                successMessage.style.transform = 'translateY(0)';
            }, 100);
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    successMessage.remove();
                }, 300);
            }, 3000);
        }
    });
}

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
}); 