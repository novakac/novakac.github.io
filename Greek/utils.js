// Function to reset the app
function resetApp() {
    const sentenceDiv = document.getElementById('sentence');
    sentenceDiv.innerHTML = '';
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = '';
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.textContent = '';
    const nextSentenceButton = document.getElementById('next-sentence');
    nextSentenceButton.style.display = 'none';
    wordCompletionStatus = []; // Reset completion status
  }
  
  // Function to check if all words have been fully completed
  function checkIfAllWordsCompleted() {
    const currentSentence = sentences[currentSentenceIndex];
    const allWordsCompleted = wordCompletionStatus.every(status => status === true);
  
    if (allWordsCompleted) {
      // Show the "Next Sentence" button
      const nextSentenceButton = document.getElementById('next-sentence');
      nextSentenceButton.style.display = 'block';
    }
  }