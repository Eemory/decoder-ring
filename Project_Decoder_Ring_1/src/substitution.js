// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {

    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";       //alphabet string
    const englishAlphabetArr = englishAlphabet.split('');       //array of alphabet string
    const newInput = input.toLowerCase().split('');             //turns input into an array
    
    if(!alphabet || alphabet.length !== 26){        //returns false if alphabet parameter does not meet conditions.
      return false;
    } 
    
    const alphabetArr = alphabet.split('');          //turns alphabet argument into an array

    for(let i = 0; i < alphabet.length; i++){     //return false if any characters match
      const char = alphabet[i];
      const howMany = alphabetArr.filter(item => item === char).length;
      if(howMany > 1){
        return false;
      }//end if
    }//end loop

    if(!encode){                                      //if encode is false, the function will decode the message
      return newInput.map((char) => {                 //a new array will be returned based on conditions
        //let output = [];

          if(!alphabetArr.includes(char)){                //if the alphabet does not include the value (i.e spaces or symbols) it will ignore them.
            return char;                                   // those values will be added to the array at their correct index.
          }//end if
            if(alphabetArr.includes(char)){                       //in the case that the value is found in the alphabet argument
                let index = alphabetArr.indexOf(char);           //finds the index of the value in the alphabet argument
                  return englishAlphabet.charAt(index);   //relates that index number to the same index at the englishAlphabet array and pushes the new value into the index
                  //return output;
            }//end if
      }).join('');                      //returns array as a newly formed string
    }//end if


     return newInput.map((char) => {      //if encode is true, this code will run and encode the message

          if(!englishAlphabetArr.includes(char)){       //if a value is not found within the english alphabet(i.e spaces and symbols) then they will be ignored 
            return char;                                //those values will be pushed into the new array
        }//end if                                               
            if (englishAlphabetArr.includes(char)){               //if the value is found within the english alphabet
              let index = englishAlphabetArr.indexOf(char);       //finds the index of the value
               return alphabet.charAt(index);               //matches the index to the same index in the alphabet array and pushes the new value into the array.    
        }//end if
     }).join('');                                                 //returns the array as a newly formed string

  }//end function

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
