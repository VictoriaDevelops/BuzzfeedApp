function calculateResult() {
    // Get the form data
    const form = document.getElementById("musicQuiz");

    // Initialize a counter object to tally up each music type
    const results = {
        pop: 0,
        rock: 0,
        classical: 0,
        rap: 0,
        house: 0
    };

    // Validate that all questions have been answered
    let allAnswered = true;

    // Collect answers
    const questions = ['q1', 'q2', 'q3'];
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
