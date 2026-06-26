document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Form Submission Handling (Front-end only) ---
    const quoteForm = document.getElementById('quote-form');
    const successMsg = document.getElementById('form-success');
    const submitBtn = quoteForm.querySelector('button[type="submit"]');

    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // UX: Change button state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Simulate network request (fake delay)
        setTimeout(() => {
            // Reset form
            quoteForm.reset();
            
            // Show success message
            successMsg.classList.remove('hidden');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 5000);

        }, 1000);
    });
});
