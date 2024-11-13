function calculateHorrorResult() {
    // Get the form data
    const form = document.getElementById("horrorMovieQuiz");

    // Initialize objects to track survival and death results
    const survivalResults = {
        scream: 0,
        alien: 0,
        cabininthewoods: 0,
        quietPlace: 0
    };

    const deathResults = {
        getout: 0,
        theRing: 0,
        paranormalActivity: 0,
        saw: 0,
        nightmareElm: 0,
        halloween: 0,
        itFollows: 0,
        blairWitch: 0
    };

    // Process answers for each question
    const q1 = form.elements['q1'].value;
    const q2 = form.elements['q2'].value;
    const q3 = form.elements['q3'].value;

    // Define a function to update the result counts
    function processAnswer(answer, survivalMap, deathMap) {
        const [survive, die] = answer.split('-');
        survivalMap[survive]++;
        deathMap[die]++;
    }

    // Update the survival and death results
    processAnswer(q1, survivalResults, deathResults);
    processAnswer(q2, survivalResults, deathResults);
    processAnswer(q3, survivalResults, deathResults);

    // Determine the movie with the highest survival score
    let survivalMovie = "";
    let maxSurvivalScore = 0;
    for (const [movie, score] of Object.entries(survivalResults)) {
        if (score > maxSurvivalScore) {
            maxSurvivalScore = score;
            survivalMovie = movie;
        }
    }

    // Determine the movie with the highest death score
    let deathMovie = "";
    let maxDeathScore = 0;
    for (const [movie, score] of Object.entries(deathResults)) {
        if (score > maxDeathScore) {
            maxDeathScore = score;
            deathMovie = movie;
        }
    }

    // Display the result (survival and death movies)
    document.getElementById("result").innerText = `You would survive in: ${formatMovie(survivalMovie)}\nYou would die in: ${formatMovie(deathMovie)}`;
}

// Helper function to format movie names
function formatMovie(movie) {
    switch (movie) {
        case 'scream': return 'Scream';
        case 'alien': return 'Alien';
        case 'cabininthewoods': return 'Cabin in the Woods';
        case 'quietPlace': return 'A Quiet Place';
        case 'getout': return 'Get Out';
        case 'theRing': return 'The Ring';
        case 'paranormalActivity': return 'Paranormal Activity';
        case 'saw': return 'Saw';
        case 'nightmareElm': return 'A Nightmare on Elm Street';
        case 'halloween': return 'Halloween';
        case 'itFollows': return 'It Follows';
        case 'blairWitch': return 'The Blair Witch Project';
        default: return 'Unknown';
    }
}