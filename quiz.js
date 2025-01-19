function checkAnswer() {
  // Function body
}

function checkAnswer() {
  const correctAnswer = "4"; // Define the correct answer
  // ... rest of the function
}

function checkAnswer() {
  const correctAnswer = "4"; 
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value; 
  // ... rest of the function
}

function checkAnswer() {
  const correctAnswer = "4"; 
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value; 

  if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct! Well done.";
  } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
  }
}



const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);