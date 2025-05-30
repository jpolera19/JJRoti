document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbarHeight = navbar.offsetHeight;
    const currentYearSpan = document.getElementById('current-year');

    // --- Smooth Scrolling with Offset ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    mobileNavToggle.classList.remove('active'); // Remove active class to reset icon
                }
            }
        });
    });

     // --- Logo Link Smooth Scroll ---
     const logoLink = document.querySelector('.logo-link');
     if (logoLink) {
         logoLink.addEventListener('click', (e) => {
             e.preventDefault();
             // Scroll to the very top for the home link
             window.scrollTo({
                top: 0,
                behavior: 'smooth'
             });
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.classList.remove('active'); // Remove active class to reset icon
            }
         });
     }

    // --- Mobile Navigation Toggle ---
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = navLinksContainer.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
            mobileNavToggle.classList.toggle('active'); // Toggle active class for icon animation
            // Optional: Prevent body scroll when mobile menu is open
            // document.body.style.overflow = isExpanded ? 'hidden' : '';
        });
    }

    // --- Simple Slideshow for Take-out Section ---
    const slideshowImages = document.querySelectorAll('.slideshow-container .slide');
    let currentSlideIndex = 0;

    function showNextSlide() {
        if (slideshowImages.length > 0) {
            slideshowImages[currentSlideIndex].style.display = 'none';
            currentSlideIndex = (currentSlideIndex + 1) % slideshowImages.length;
            slideshowImages[currentSlideIndex].style.display = 'block';
        }
    }

    if (slideshowImages.length > 1) {
       setInterval(showNextSlide, 4000);
    } else if (slideshowImages.length === 1) {
         slideshowImages[0].style.display = 'block';
    }


    // --- Set Current Year in Footer ---
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

});