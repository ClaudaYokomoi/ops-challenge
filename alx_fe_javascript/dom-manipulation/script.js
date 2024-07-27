// Array of quote objects
const quotes = [
    { text: "Believe in yourself.", category: "Motivation" },
    { text: "Stay positive, work hard, make it happen.", category: "Inspiration" },
    { text: "Dream big, achieve bigger.", category: "Goals" },
    { text: "Do what you love.", category: "Passion" },
    { text: "Stay focused and never give up.", category: "Persistence" },
    { text: "The best time for new beginnings is now.", category: "Change" },
    { text: "Every day is a fresh start.", category: "New Beginnings" }
];

// Function to display a random quote
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = `${quote.text} - ${quote.category}`;
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText && newQuoteCategory) {
        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
        showRandomQuote();
    } else {
        alert("Please fill in both fields.");
    }
}

// Event listener for showing a new quote
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Show a random quote on page load
showRandomQuote();
