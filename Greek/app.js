// Global variables
let sentences = [];
let currentSentenceIndex = 0;
let wordCompletionStatus = [];

// Load the external JSON file
fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data loaded:', data); // Debugging: Check if data is loaded
    sentences = data;

    // Display the first sentence
    displaySentence(sentences[currentSentenceIndex]);

    // Level selector event listener
    const levelSelector = document.getElementById('level');
    levelSelector.addEventListener('change', () => {
      // Reset the app when the level changes
      resetApp();
      displaySentence(sentences[currentSentenceIndex]);
    });

    // Next sentence button event listener
    const nextSentenceButton = document.getElementById('next-sentence');
    nextSentenceButton.addEventListener('click', () => {
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length; // Loop back to the first sentence
      resetApp();
      displaySentence(sentences[currentSentenceIndex]);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

// Function to display a sentence
function displaySentence(sentenceData) {
  const sentenceDiv = document.getElementById('sentence');
  sentenceDiv.innerHTML = '';

  // Initialize completion status for each word
  wordCompletionStatus = new Array(sentenceData.words.length).fill(false);

  sentenceData.words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    wordSpan.textContent = word.text + ' ';
    wordSpan.addEventListener('click', () => showDropdown(wordSpan, word, index));
    sentenceDiv.appendChild(wordSpan);
  });
}

// Function to show a dropdown menu
function showDropdown(wordSpan, word, wordIndex) {
  const dropdownContainer = document.getElementById('dropdown-container');
  dropdownContainer.innerHTML = ''; // Clear any existing dropdown

  // Create the part of speech dropdown
  const partOfSpeechDropdown = document.createElement('select');
  partOfSpeechDropdown.className = 'dropdown';
  const partOfSpeechOptions = ['noun', 'verb', 'article', 'pronoun', 'adjective', 'adverb', 'preposition', 'conjunction'];
  partOfSpeechOptions.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    partOfSpeechDropdown.appendChild(optionElement);
  });

  // Add a submit button
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => {
    const level = document.getElementById('level').value;
    if (level === '1') {
      checkAnswer(wordSpan, partOfSpeechDropdown, word.partOfSpeech, wordIndex);
    } else if (level === '2') {
      checkAnswerLevel2(wordSpan, partOfSpeechDropdown, word, wordIndex);
    } else if (level === '3') {
      checkAnswerLevel3(wordSpan, partOfSpeechDropdown, word, wordIndex);
    }
  });

  // Append the dropdown and button to the container
  dropdownContainer.appendChild(partOfSpeechDropdown);
  dropdownContainer.appendChild(submitButton);
}