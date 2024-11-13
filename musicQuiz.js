function calculateResult() {
    // Get the form data
    const form = document.getElementById("musicQuiz");

    // Initialize a counter object to tally up each music type
    const results = {
        pop: 0,
        classical: 0,
        rap: 0,
        house: 0
    };

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

    // Determine the highest score
    let finalResult = "";
    let maxScore = 0;

    for (const [genre, score] of Object.entries(results)) {
        if (score > maxScore) {
            maxScore = score;
            finalResult = genre;
        }
    }

    // Display the result (the HTML for showing the result will be added later)
    document.getElementById("result").innerText = `You are a ${finalResult} listener!`;
}
