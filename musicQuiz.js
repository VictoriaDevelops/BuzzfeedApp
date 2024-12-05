function calculateResult() {
    // Get the form data
    const form = document.getElementById("musicQuiz");

    // Initialize a counter object to tally up each music type
    const results = {
        pop: 0,
<<<<<<< Updated upstream
=======
        rock: 0, // Updated for consistency
>>>>>>> Stashed changes
        classical: 0,
        rap: 0,
        house: 0
    };

<<<<<<< Updated upstream
    // Get the answers for each question
    const q1 = form.elements['q1'].value;
    const q2 = form.elements['q2'].value;
    const q3 = form.elements['q3'].value;
    const q4 = form.elements['q4'].value;
    // Count the selected options
    results[q1]++;
    results[q2]++;
    results[q3]++;
    results[q4]++;
=======
    // Validate that all questions have been answered
    let allAnswered = true;

    // Collect answers
    const questions = ['q1', 'q2', 'q3', 'q4'];
    questions.forEach(question => {
        const answer = form.elements[question]?.value;

        if (!answer) {
            allAnswered = false; // Mark incomplete if any question is unanswered
        } else {
            results[answer]++; // Increment the corresponding genre
        }
    });

    // Check for unanswered questions
    if (!allAnswered) {
        document.getElementById("result").innerText = "Please answer all the questions!";
        return;
    }
>>>>>>> Stashed changes

    // Determine the highest score
    let finalResult = "";
    let maxScore = 0;

    for (const [genre, score] of Object.entries(results)) {
        if (score > maxScore) {
            maxScore = score;
            finalResult = genre;
        }
    }

    // Display the result
    document.getElementById("result").innerText = `You are a ${finalResult} listener!`;
}
