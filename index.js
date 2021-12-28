
let countButton = document.getElementById('my-button');
let clearFieldsButton = document.getElementById('clear-fields');

//Display fields variables
textAreaField = document.getElementById('my-container');
// let inputString = document.getElementById('my-container').value;
let vowelsField = document.getElementById('display-vowels');
let consonantsField = document.getElementById('display-consonants');
let lettersField = document.getElementById('display-letters');
let numbersField = document.getElementById('display-numbers');

//Vowel Counter
countButton.addEventListener('click', () => {
    let inputString = document.getElementById('my-container').value;

    let vowelsLength = inputString.match(/[aieou]/ig).length;
        vowelsField.value = vowelsLength

    return vowelsLength;
})

// Consonants Counter
countButton.addEventListener('click', () => {
    let inputString = document.getElementById('my-container').value;

    let consonantsLength =inputString.match(/[b-df-hj-np-tv-z]/ig).length;
        consonantsField.value = consonantsLength;

    return consonantsLength;
})

//letters Counter
countButton.addEventListener('click', () => {
    let inputString = document.getElementById('my-container').value;

    let lettersLength = inputString.match(/[a-z]/ig).length
        lettersField.value = lettersLength

    return lettersLength;  
})

// numbers Counter
countButton.addEventListener('click', () => {
    let inputString = document.getElementById('my-container').value;

    let numbersLength = inputString.match(/[0-9]/ig).length
        numbersField.value = numbersLength

    numbersLength === 0 ? alert('There are no numbers to show') : numbersLength

    return numbersLength;
})

// Clear fields button
clearFieldsButton.addEventListener('click', () => {
    textAreaField.value = " ";
    vowelsField.value = " ";
    lettersField.value = " ";
    numbersField.value = " ";
    consonantsField.value = " ";
})