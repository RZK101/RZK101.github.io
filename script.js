const container = document.getElementById("ascii-container");

// Ukuran "terminal"
const terminalWidth = 109;
const terminalHeight = 45;

// Parameter awal untuk rotasi
let move = 0;

// Data contoh untuk peta ASCII
const worldMap = Array.from({ length: terminalHeight }, () => 
  Array.from({ length: terminalWidth }, () => Math.random() > 0.9 ? "101011" : " ")
);

// Fungsi pembaruan untuk membuat efek scrolling
function updateMap() {
    let asciiFrame = "";

    // Memperbarui "move" untuk mensimulasikan rotasi
    move = (move + 1) % terminalWidth;

    for (let y = 0; y < terminalHeight; y++) {
        for (let x = 0; x < terminalWidth; x++) {
            // Membuat efek scrolling horizontal
            const shiftedX = (x + move) % terminalWidth;
            asciiFrame += worldMap[y][shiftedX];
        }
        asciiFrame += "\n"; // Baris baru di akhir setiap baris
    }

    // Menampilkan frame yang diperbarui dalam elemen HTML
    container.textContent = asciiFrame;
}

// Menjalankan fungsi updateMap setiap 50 ms
setInterval(updateMap, 50);
