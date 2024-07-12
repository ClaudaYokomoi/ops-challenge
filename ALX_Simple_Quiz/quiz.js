function checkAnswer() {
    const correctAnswer = "4"; // Define the correct answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Retrieve user's selected answer
    const feedbackElement = document.getElementById("feedback"); // Get the feedback element

    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done."; // Provide feedback for correct answer
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!"; // Provide feedback for incorrect answer
    }
}
