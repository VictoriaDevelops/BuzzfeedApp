function calculateHorrorResult() {
    // Get the form data
    const form = document.getElementById("horrorMovieQuiz");

    const booksResults = {
        // Fantasy
        poppyWar: 0, 
        achilles: 0, 
        martian: 0,    
        crows: 0,       
    
        // Non fic 
        anthropocene: 0,    
        momDied: 0,         
        bornCrime: 0,      
        maus: 0,      

        // Lit 
        blueSis: 0,  
        ttt: 0,         
        secretHis: 0,   
        myRage: 0, 

        // Short Stories  
        TIHYLTTW: 0,        
        royalGame: 0,       
        knownMen: 0,      
        galatea: 0,       
    };

    // Process answers for each question
    const q1 = form.elements['q1'].value;
    const q2 = form.elements['q2'].value;
    const q3 = form.elements['q3'].value;

    function processAnswer(answer, bookMap) {
        const [book1, book2, book3, book4] = answer.split('-');
        bookMap[book1]++;
        bookMap[book2]++;
        bookMap[book3]++;
        bookMap[book4]++;
    }

    function processAnswer1(answer, bookMap) {
        const [book1, book2, book3, book4] = answer.split('-');
        bookMap[book1]++;
        bookMap[book1]++;
        bookMap[book2]++;
        bookMap[book2]++;
        bookMap[book3]++;
        bookMap[book3]++;
        bookMap[book4]++;
        bookMap[book4]++;
    }

    // Update the survival and death results
    processAnswer1(q1, booksResults);
    processAnswer(q2, booksResults);
    processAnswer(q3, booksResults);

    // Determine the movie with the highest survival score
    let selectedBook = "";
    let maxScore = 0;
    for (const [book, score] of Object.entries(booksResults)) {
        if (score > maxScore) {
            maxScore = score;
            selectedBook = book;
        }
    }

    // Display the result
    document.getElementById("result").innerText = `You should read: ${formatBook(selectedBook)}`;
}

// Helper function to format book names
function formatBook(book) {
    switch (book) {
        case 'poppyWar': return 'The Poppy War';
        case 'achilles': return 'The Song of Achilles';
        case 'martian': return 'The Martian';
        case 'crows': return 'Six of Crows';

        case 'anthropocene': return 'The Anthropocene Reviewed';
        case 'momDied': return 'I\'m Glad My Mom Died';
        case 'bornCrime': return 'Born A Crime';
        case 'maus': return 'Maus';

        case 'blueSis': return 'Blue Sisters';
        case 'ttt': return 'Tommorrow and Tomorrow and Tomorrow';
        case 'secretHis': return 'The Secret History';
        case 'myRage': return 'My Rage';

        case 'TIHYLTTW': return 'This is How You Lose the Time War';
        case 'royalGame': return 'The Royal Game';
        case 'knownMen': return 'I Who Have Never Known Men';
        case 'galatea': return 'Galatea';

        default: return 'Unknown';
    }
}
