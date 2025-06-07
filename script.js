document.addEventListener('DOMContentLoaded', () => {
    // Basic Cart Functionality (front-end only)
    const cartCountSpan = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItemCount++;
            cartCountSpan.textContent = cartItemCount;
            const productName = button.dataset.productName;
            const productPrice = button.dataset.price;
            alert(`"${productName}" added to cart! (This is a demo. Actual cart functionality requires a backend.)`);
            // In a real application, you'd add this to a cart array/object
            // and potentially update a mini-cart display.
        });
    });

    // Mobile Navigation Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
