// Function to check the answer for Level 1
function checkAnswer(wordSpan, dropdown, correctPartOfSpeech, wordIndex) {
    const selectedPartOfSpeech = dropdown.value;
    const feedbackDiv = document.getElementById('feedback');
  
    if (selectedPartOfSpeech === correctPartOfSpeech) {
      wordSpan.classList.add('correct');
      feedbackDiv.textContent = 'Correct!';
    } else {
      wordSpan.classList.add('incorrect');
      feedbackDiv.textContent = `Incorrect. The correct answer is ${correctPartOfSpeech}.`;
    }
  
    // Mark the word as completed
    wordCompletionStatus[wordIndex] = true;
    checkIfAllWordsCompleted();
  }