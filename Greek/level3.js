// Function to check the answer for Level 3
function checkAnswerLevel3(wordSpan, partOfSpeechDropdown, word, wordIndex) {
    const selectedPartOfSpeech = partOfSpeechDropdown.value;
    const feedbackDiv = document.getElementById('feedback');
  
    if (selectedPartOfSpeech === word.partOfSpeech) {
      if (['noun', 'adjective', 'article'].includes(word.partOfSpeech)) {
        // Show the declension and gender dropdown for nouns and adjectives
        showDeclensionGenderDropdown(wordSpan, word, wordIndex);
        // Show the case and number dropdown for nouns, adjectives, and articles
        showCaseNumberDropdown(wordSpan, word, wordIndex);
      } else if (word.partOfSpeech === 'verb') {
        // Show the voice and mood dropdown for verbs
        showVoiceMoodDropdown(wordSpan, word, wordIndex);
        // Show the tense dropdown for verbs
        showTenseDropdown(wordSpan, word, wordIndex);
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
  
  // Function to show the case and number dropdown for nouns, adjectives, and articles
  function showCaseNumberDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const caseNumberDropdown = document.createElement('select');
    caseNumberDropdown.className = 'dropdown';
    const caseOptions = ['nominative', 'genitive', 'dative', 'accusative', 'vocative'];
    const numberOptions = ['singular', 'plural'];
    caseOptions.forEach(caseValue => {
      numberOptions.forEach(number => {
        const optionElement = document.createElement('option');
        optionElement.value = `${caseValue}-${number}`;
        optionElement.textContent = `${caseValue} ${number}`;
        caseNumberDropdown.appendChild(optionElement);
      });
    });
  
    // Add a submit button for the case and number dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = caseNumberDropdown.value;
      const correctValue = `${word.case}-${word.number}`;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Mark the word as fully completed
      wordCompletionStatus[wordIndex] = true;
      checkIfAllWordsCompleted();
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the case and number dropdown and button to the container
    dropdownContainer.appendChild(caseNumberDropdown);
    dropdownContainer.appendChild(submitButton);
  }
  
  // Function to show the tense dropdown for verbs
  function showTenseDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const tenseDropdown = document.createElement('select');
    tenseDropdown.className = 'dropdown';
    const tenseOptions = ['present', 'imperfect', 'future', 'aorist', 'perfect', 'pluperfect'];
    tenseOptions.forEach(tense => {
      const optionElement = document.createElement('option');
      optionElement.value = tense;
      optionElement.textContent = tense;
      tenseDropdown.appendChild(optionElement);
    });
  
    // Add a submit button for the tense dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = tenseDropdown.value;
      const correctValue = word.tense;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Show the fourth dropdown for person and number
      showPersonNumberDropdown(wordSpan, word, wordIndex);
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the tense dropdown and button to the container
    dropdownContainer.appendChild(tenseDropdown);
    dropdownContainer.appendChild(submitButton);
  }
  
  // Function to show the person and number dropdown for verbs
  function showPersonNumberDropdown(wordSpan, word, wordIndex) {
    const dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.innerHTML = ''; // Clear any existing dropdown
  
    const personNumberDropdown = document.createElement('select');
    personNumberDropdown.className = 'dropdown';
    const personOptions = ['1st', '2nd', '3rd'];
    const numberOptions = ['singular', 'plural'];
    personOptions.forEach(person => {
      numberOptions.forEach(number => {
        const optionElement = document.createElement('option');
        optionElement.value = `${person}-${number}`;
        optionElement.textContent = `${person} ${number}`;
        personNumberDropdown.appendChild(optionElement);
      });
    });
  
    // Add a submit button for the person and number dropdown
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
      const selectedValue = personNumberDropdown.value;
      const correctValue = `${word.person}-${word.number}`;
      const feedbackDiv = document.getElementById('feedback');
  
      if (selectedValue === correctValue) {
        wordSpan.classList.add('correct');
        feedbackDiv.textContent = 'Correct!';
      } else {
        wordSpan.classList.add('incorrect');
        feedbackDiv.textContent = `Incorrect. The correct answer is ${correctValue}.`;
      }
  
      // Mark the word as fully completed
      wordCompletionStatus[wordIndex] = true;
      checkIfAllWordsCompleted();
  
      // Clear the dropdown and button
      dropdownContainer.innerHTML = '';
    });
  
    // Append the person and number dropdown and button to the container
    dropdownContainer.appendChild(personNumberDropdown);
    dropdownContainer.appendChild(submitButton);
  }