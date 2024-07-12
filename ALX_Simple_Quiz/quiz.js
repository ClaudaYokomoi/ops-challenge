// quiz.js

// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";
    
    // Retrieve the user's selected answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // If user has selected an answer
    if (userAnswer) {
        // Compare user's answer with correct answer
        if (userAnswer.value === correctAnswer) {
            // Provide feedback for correct answer
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // Provide feedback for incorrect answer
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If user hasn't selected any answer
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
