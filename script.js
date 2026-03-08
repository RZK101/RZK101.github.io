const container = document.getElementById("ascii-container");

// Ukuran "terminal"
const terminalWidth = 109;
const terminalHeight = 45;

// Parameter awal untuk rotasi
let move = 0;

// Pre-compute total characters for array sizing
const totalChars = terminalWidth * terminalHeight;

// Data contoh untuk peta ASCII - pre-generated once
const worldMap = new Array(totalChars);
for (let i = 0; i < totalChars; i++) {
    worldMap[i] = Math.random() > 0.9 ? "101011" : " ";
}

// Pre-build newline positions
const newlines = new Array(terminalHeight).fill('\n').join('');

// Fungsi pembaruan untuk membuat efek scrolling
function updateMap() {
    // Memperbarui "move" untuk mensimulasikan rotasi
    move = (move + 1) % terminalWidth;

    // Use array join for better performance than string concatenation
    const asciiFrame = new Array(terminalHeight);
    
    for (let y = 0; y < terminalHeight; y++) {
        let row = '';
        for (let x = 0; x < terminalWidth; x++) {
            // Membuat efek scrolling horizontal
            const shiftedX = (x + move) % terminalWidth;
            row += worldMap[y * terminalWidth + shiftedX];
        }
        asciiFrame[y] = row;
    }

    // Menampilkan frame yang diperbarui dalam elemen HTML
    container.textContent = asciiFrame.join('\n');
}

// Menjalankan fungsi updateMap setiap 50 ms
setInterval(updateMap, 50);

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        menu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add fade-in animation on scroll
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

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});
