// Your Script here.
function rot13(str) {
  let decoded = '';
  
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    
    // Check if the character is uppercase alphabetic
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + 13) % 26) + 65;
    }
    
    decoded += String.fromCharCode(charCode);
  }
  
  return decoded;
}

const inputField = document.getElementById('input');
const outputField = document.getElementById('output');
const encodeButton = document.getElementById('encode-button');
const decodeButton = document.getElementById('decode-button');

encodeButton.addEventListener('click', () => {
  const message = inputField.value;
  const encodedMessage = rot13(message);
  outputField.value = encodedMessage;
});

decodeButton.addEventListener('click', () => {
  const message = inputField.value;
  const decodedMessage = rot13(message);
  outputField.value = decodedMessage;
});


const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

function rot13(encodedStr){
   let decodedArr = []; // Your Result goes here
  // Only change code below this line

  return ;//return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
