// Function to check the answer for Level 2
function checkAnswerLevel2(wordSpan, partOfSpeechDropdown, word, wordIndex) {
    const selectedPartOfSpeech = partOfSpeechDropdown.value;
    const feedbackDiv = document.getElementById('feedback');
  
    if (selectedPartOfSpeech === word.partOfSpeech) {
      if (['noun', 'adjective'].includes(word.partOfSpeech)) {
        // Show the second dropdown for declension and gender
        showDeclensionGenderDropdown(wordSpan, word, wordIndex);
      } else if (word.partOfSpeech === 'article') {
        // Show the second dropdown for gender only
        showGenderDropdown(wordSpan, word, wordIndex);
      } else if (word.partOfSpeech === 'verb') {
        // Show the second dropdown for voice and mood
        showVoiceMoodDropdown(wordSpan, word, wordIndex);
      } else {
        // Mark the word as completed for other parts of speech
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
        wordCompletionStatus[wordIndex] = true;
        checkIfAllWordsCompleted();
      }
    } else {
      wordSpan.classList.add('incorrect');
      feedbackDiv.textContent = `Incorrect. The correct part of speech is ${word.partOfSpeech}.`;
    }
  
    // Mark the word as partially completed (part of speech submitted)
    wordCompletionStatus[wordIndex] = 'partial';
    checkIfAllWordsCompleted();
  }
  
  // Function to show the declension and gender dropdown for nouns and adjectives
  function showDeclensionGenderDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const declensionGenderDropdown = document.createElement('select');
    declensionGenderDropdown.className = 'dropdown';
    const declensionOptions = ['1st', '2nd', '3rd'];
    const genderOptions = ['masculine', 'feminine', 'neuter'];
    declensionOptions.forEach(declension => {
      genderOptions.forEach(gender => {
        // Skip 1st declension neuter (doesn't exist)
        if (!(declension === '1st' && gender === 'neuter')) {
          const optionElement = document.createElement('option');
          optionElement.value = `${declension}-${gender}`;
          optionElement.textContent = `${declension} ${gender}`;
          declensionGenderDropdown.appendChild(optionElement);
        }
      });
    });
  
    // Add a submit button for the declension and gender dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = declensionGenderDropdown.value;
      const correctValue = `${word.declension}-${word.gender}`;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Mark the word as fully completed for Level 2
      wordCompletionStatus[wordIndex] = true;
      checkIfAllWordsCompleted();
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the declension and gender dropdown and button to the container
    dropdownContainer.appendChild(declensionGenderDropdown);
    dropdownContainer.appendChild(submitButton);
  }
  
  // Function to show the gender dropdown for articles
  function showGenderDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const genderDropdown = document.createElement('select');
    genderDropdown.className = 'dropdown';
    const genderOptions = ['masculine', 'feminine', 'neuter'];
    genderOptions.forEach(gender => {
      const optionElement = document.createElement('option');
      optionElement.value = gender;
      optionElement.textContent = gender;
      genderDropdown.appendChild(optionElement);
    });
  
    // Add a submit button for the gender dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = genderDropdown.value;
      const correctValue = word.gender;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Mark the word as fully completed for Level 2
      wordCompletionStatus[wordIndex] = true;
      checkIfAllWordsCompleted();
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the gender dropdown and button to the container
    dropdownContainer.appendChild(genderDropdown);
    dropdownContainer.appendChild(submitButton);
  }
  
  // Function to show the voice and mood dropdown for verbs
  function showVoiceMoodDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const voiceMoodDropdown = document.createElement('select');
    voiceMoodDropdown.className = 'dropdown';
    const voiceOptions = ['active', 'middle', 'passive'];
    const moodOptions = ['indicative', 'subjunctive', 'optative', 'imperative'];
    voiceOptions.forEach(voice => {
      moodOptions.forEach(mood => {
        const optionElement = document.createElement('option');
        optionElement.value = `${voice}-${mood}`;
        optionElement.textContent = `${voice} ${mood}`;
        voiceMoodDropdown.appendChild(optionElement);
      });
    });
  
    // Add a submit button for the voice and mood dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = voiceMoodDropdown.value;
      const correctValue = `${word.voice}-${word.mood}`;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Mark the word as fully completed for Level 2
      wordCompletionStatus[wordIndex] = true;
      checkIfAllWordsCompleted();
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the voice and mood dropdown and button to the container
    dropdownContainer.appendChild(voiceMoodDropdown);
    dropdownContainer.appendChild(submitButton);
  }