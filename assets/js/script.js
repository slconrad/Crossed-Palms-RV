// 1. Mobile Menu Logic
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-links");
const navLinks = document.querySelectorAll(".nav-link");

// Open/Close toggle
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// IMPORTANT: Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// 2. Google Sheets Fetch Logic (Ready for your link)
async function updateMapFromSheets() {
    const CSV_URL = 'YOUR_GOOGLE_SHEETS_CSV_EXPORT_LINK';
    
    try {
        // We will simulate a fetch here. 
        // In reality, you'd fetch the CSV, parse it, and loop through the lots.
        console.log("Connecting to Crossed Palms Management Sheet...");
        
        /* Example Logic:
        const response = await fetch(CSV_URL);
        const data = await response.text();
        // Parse rows and find Lot ID and Status
        // if(status === 'Occupied') document.getElementById(`lot-${id}`).classList.add('occupied');
        */
        
    } catch (err) {
        console.error("Map update failed. Check Sheet permissions.", err);
    }
}

window.addEventListener('DOMContentLoaded', updateMapFromSheets);
