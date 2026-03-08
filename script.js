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
