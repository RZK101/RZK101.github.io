// Birthday Website JavaScript

// Floating Hearts Animation
function createHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['💕', '💖', '💗', '💘', '💝', '❤️', '🧡', '💛'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }, 500);
}

// Stars Background
function createStars() {
    const container = document.getElementById('stars-container');
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// Countdown Timer
function updateCountdown() {
    // Set birthday date (you can change this to the actual birthday)
    const birthday = new Date();
    birthday.setDate(birthday.getDate() + 30); // 30 days from now
    
    const now = new Date();
    const diff = birthday - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Typing Effect for Letter
const letterContent = document.getElementById('letter-content');
const letterText = `My Dearest Love,

Hari ini adalah hari yang sangat istimewa karena dunia merayakan kelahiran seseorang yang luar biasa... YOU!

Terima kasih sudah menjadi bagian dari hidupku. Setiap momen bersamamu adalah hadiah yang tak ternilai. Senyumanmu menerangi hari-hariku, dan cintamu membuat hidupku lebih berarti.

Di usia yang baru ini, aku berdoa agar semua impianmu tercapai, semua harapanmu terkabul, dan kebahagiaan selalu menyertaimu. Kamu deserve all the happiness in the world and more.

Aku bersyukur setiap hari karena memilikimu. Semoga kita bisa terus menciptakan kenangan indah bersama, melewati suka dan duka, dan tumbuh bersama dalam cinta.

Selamat ulang tahun, sayang! I love you more than words can express.

Forever yours.`;

let charIndex = 0;

function typeLetter() {
    if (charIndex < letterText.length) {
        letterContent.innerHTML += letterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeLetter, 30);
    }
}

// Surprise Box Interaction
const surpriseBox = document.getElementById('surprise-box');
const surpriseContent = document.getElementById('surprise-content');
const confettiCanvas = document.getElementById('confetti-canvas');

surpriseBox.addEventListener('click', () => {
    surpriseBox.style.display = 'none';
    surpriseContent.classList.add('show');
    startConfetti();
});

// Confetti Effect
function startConfetti() {
    const colors = ['#ff6b9d', '#c44569', '#ffa502', '#ff7675', '#fab1a0', '#ffeaa7'];
    
    for (let i = 0; i < 200; i++) {
        createConfettiPiece(colors);
    }
}

function createConfettiPiece(colors) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        pointer-events: none;
        z-index: 1001;
    `;
    
    document.body.appendChild(confetti);
    
    const animationDuration = Math.random() * 3 + 2;
    const rotation = Math.random() * 720;
    
    confetti.animate([
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(${window.innerHeight}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: animationDuration * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards'
    });
    
    setTimeout(() => {
        confetti.remove();
    }, animationDuration * 1000);
}

// Days Together Counter
function updateDaysTogether() {
    // Set your relationship start date here
    const startDate = new Date('2023-01-01'); // Change this to your actual start date
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('days-together').textContent = days;
}

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

// Intersection Observer for fade-in animations
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

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    createStars();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    updateDaysTogether();
    
    // Start typing letter when it comes into view
    const letterSection = document.querySelector('.letter-section');
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && charIndex === 0) {
                setTimeout(typeLetter, 500);
            }
        });
    }, { threshold: 0.5 });
    
    letterObserver.observe(letterSection);
});

// Add hover effect to wish cards
document.querySelectorAll('.wish-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Candle flame interaction
const candle = document.querySelector('.candle');
if (candle) {
    candle.addEventListener('click', () => {
        const flame = document.querySelector('.flame');
        if (flame) {
            flame.style.animation = 'flicker 0.2s ease-in-out infinite alternate';
            // Create a wish message
            const wishMsg = document.createElement('div');
            wishMsg.textContent = '✨ Wish made! ✨';
            wishMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3rem;
                font-family: var(--font-script);
                color: var(--primary-color);
                z-index: 2000;
                animation: fadeInUp 0.5s ease-out;
                text-shadow: 0 0 20px rgba(255, 107, 157, 0.5);
            `;
            document.body.appendChild(wishMsg);
            
            setTimeout(() => {
                wishMsg.remove();
            }, 2000);
        }
    });
}
