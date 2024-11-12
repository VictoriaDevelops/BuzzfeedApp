function calculateCafeResult() {
    // Get the form data
    const form = document.getElementById("cafeQuiz");

    // Initialize objects to track results for each cafe
    const cafeResults = {
        betterBuzz: 0,
        keepCoffee: 0,
        meetFresh: 0,
        lovesong: 0
    };

    // Process answers for each question
    const q1 = form.elements['q1'].value;
    const q2 = form.elements['q2'].value;
    const q3 = form.elements['q3'].value;
    const q4 = form.elements['q4'].value;

    // Define a function to update result counts
    function processAnswer(answer, cafeMap) {
        const [cafe1, cafe2] = answer.split('-');
        cafeMap[cafe1]++;
        cafeMap[cafe2]++;
    }

    // Update results based on answers
    processAnswer(q1, cafeResults);
    processAnswer(q2, cafeResults);
    processAnswer(q3, cafeResults);
    processAnswer(q4, cafeResults);

    // Determine the cafe with the highest score
    let selectedCafe = "";
    let maxScore = 0;
    for (const [cafe, score] of Object.entries(cafeResults)) {
        if (score > maxScore) {
            maxScore = score;
            selectedCafe = cafe;
        }
    }

    // Display the result
    document.getElementById("result").innerText = `The cafe for you is: ${formatCafeName(selectedCafe)}`;
}

// Helper function to format cafe names
function formatCafeName(cafe) {
    switch (cafe) {
        case 'betterBuzz': return 'Better Buzz La Jolla';
        case 'keepCoffee': return 'Keep Coffee';
        case 'meetFresh': return 'MeetFresh Mira Mesa';
        case 'lovesong': return 'Lovesong Coffee + Market';
        default: return 'Unknown Cafe';
    }
}
