function checkAnswer() {
  // Function body
}


  function checkAnswer() {
    const correctAnswer = "4"; 
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked').value; 

    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);