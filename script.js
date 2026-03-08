// Matrix Rain Effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const chars = matrixChars.split('');
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Typing Effect
const typingContainer = document.getElementById('typing-effect');
const typingText = `Welcome to MyWeb - Your gateway to the digital underground.
Here you will master:
> Ethical Hacking & Penetration Testing
> Advanced Programming Techniques
> Cybersecurity Operations
> Real-world Project Deployment

Initializing secure connection...
Access granted.
Let's begin your journey.`;

let charIndex = 0;
let lineIndex = 0;
const lines = typingText.split('\n');

function typeWriter() {
    if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        let lineContent = '';
        
        function typeLine() {
            if (charIndex < currentLine.length) {
                lineContent += currentLine.charAt(charIndex);
                typingContainer.innerHTML = lines.slice(0, lineIndex).map(line => `<div>${line}</div>`).join('') + 
                                           `<div>${lineContent}<span class="cursor-blink">█</span></div>`;
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 300);
            }
        }
        typeLine();
    }
}

setTimeout(typeWriter, 1000);

// Node Counter Animation
const nodeCount = document.getElementById('node-count');
let currentNodeCount = 1337;

function updateNodeCount() {
    const change = Math.floor(Math.random() * 10) - 5;
    currentNodeCount += change;
    nodeCount.textContent = currentNodeCount;
}

setInterval(updateNodeCount, 2000);

// Binary Stream Effect
const binaryStream = document.getElementById('binary-stream');

function createBinaryColumn() {
    const column = document.createElement('div');
    column.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: -100px;
        font-size: 10px;
        color: #00ff41;
        opacity: 0.3;
        animation: fall ${2 + Math.random() * 3}s linear;
    `;
    
    let binary = '';
    for (let i = 0; i < 20; i++) {
        binary += Math.random() > 0.5 ? '1' : '0';
        binary += '<br>';
    }
    column.innerHTML = binary;
    
    binaryStream.appendChild(column);
    
    setTimeout(() => {
        column.remove();
    }, 5000);
}

setInterval(createBinaryColumn, 500);

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

// Add glitch effect on hover for feature cards
document.querySelectorAll('.hack-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'glitch-1 0.3s cubic-bezier(.25, .46, .45, .94) both';
        setTimeout(() => {
            card.style.animation = '';
        }, 300);
    });
});

// Terminal controls interaction
document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('close')) {
            document.querySelector('.terminal-window').style.opacity = '0';
            document.querySelector('.terminal-window').style.transform = 'scale(0.9)';
            setTimeout(() => {
                document.querySelector('.terminal-window').style.display = 'none';
            }, 300);
        }
    });
});
