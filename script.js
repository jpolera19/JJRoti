document.addEventListener('DOMContentLoaded', () => {
    // Navigation + footer logic preserved from existing script.js
    const navbar = document.getElementById('navbar');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbarHeight = navbar.offsetHeight;
    const currentYearSpan = document.getElementById('current-year');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHref = link.getAttribute('href');

            // Only intercept smooth scroll for same-page links (e.g., #about)
            if (targetHref.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetHref);
                if (targetElement) {
                    const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

                    // Close mobile nav if open
                if (navLinksContainer.classList.contains('active')) {
                    navLinksContainer.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    mobileNavToggle.classList.remove('active');
}

                }
            }
        });
    });


    const logoLink = document.querySelector('.logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                mobileNavToggle.classList.remove('active');
            }
        });
    }

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = navLinksContainer.classList.toggle('active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
            mobileNavToggle.classList.toggle('active');
        });
    }

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('catering-form')) {
    form.reset();
  }
}