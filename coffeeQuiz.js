document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("cafeQuiz");
    const resultDiv = document.getElementById("result");

    document.querySelector('button').addEventListener('click', () => {
        const cafeResults = {
            betterBuzz: 0,
            keepCoffee: 0,
            meetFresh: 0,
            lovesong: 0
        };

        // Gather and process answers
        const answers = Array.from(form.elements)
            .filter(input => input.checked)
            .map(input => input.value);

        if (answers.length < 4) {
            resultDiv.innerText = "Please answer all questions before submitting.";
            return;
        }

        answers.forEach(answer => {
            const [cafe1, cafe2] = answer.split('-');
            cafeResults[cafe1]++;
            cafeResults[cafe2]++;
        });

        // Find the cafe with the highest score
        const selectedCafe = Object.entries(cafeResults)
            .reduce((highest, entry) => entry[1] > highest[1] ? entry : highest, ["", 0])[0];

        resultDiv.innerText = `The cafe for you is: ${formatCafeName(selectedCafe)}`;
        resultDiv.style.color = "#8B4513"; // Coffee brown for result text
    });

    // Helper function to format cafe names
    function formatCafeName(cafe) {
        const cafeNames = {
            betterBuzz: 'Better Buzz La Jolla',
            keepCoffee: 'Keep Coffee',
            meetFresh: 'MeetFresh Mira Mesa',
            lovesong: 'Lovesong Coffee + Market'
        };
        return cafeNames[cafe] || 'Unknown Cafe';
    }
});
