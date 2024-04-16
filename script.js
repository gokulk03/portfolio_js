document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('check');
    const ul = document.querySelector('nav ul');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            ul.style.left = '0';
        } else {
            ul.style.left = '-100%';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("nav ul li a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = -80; // Adjust this value as needed

            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });
});