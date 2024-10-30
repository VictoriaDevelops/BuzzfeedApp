function calculateDnDClass() {
    // Get the form data
    const form = document.getElementById("dndClassQuiz");

    // Initialize a counter object to tally up each class type
    const results = {
        fighter: 0,
        wizard: 0,
        rogue: 0,
        cleric: 0
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

    for (const [dndClass, score] of Object.entries(results)) {
        if (score > maxScore) {
            maxScore = score;
            finalResult = dndClass;
        }
    }

    // Display the result (class) based on the answers
    document.getElementById("result").innerText = `You are a ${finalResult.charAt(0).toUpperCase() + finalResult.slice(1)}!`;
}
