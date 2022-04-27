// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
      expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   ● codedMessage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//     ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

//Create a function - codedMessage
//Parameter - string 
//Go through string recognizing vowels 
//Use the replace method to replace lowercase and uppercase vowel with given number. Use g to have the replace go through the string. 
//Return coded string 


const codedMessage = (string) => {
    return string.replace(/a|A/g, 4).replace(/e|E/g, 3).replace(/i|I/g, 1).replace(/o|O/g, 0)
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("wordReturn", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
      expect(wordReturn(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(wordReturn(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   ● wordReturn › takes in an array of words and a single letter and returns all the words that contain that particular letter

//     ReferenceError: wordReturn is not defined

// b) Create the function that makes the test pass.

//Create a function - wordReturn 
//Parameter - array, string 
//Filter through array to identify if the letter is there
//Add a logical or operator to include if the letter is uppercase
//Return array containing the letter

const wordReturn = (array, letter) => {
   return array.filter(value => { 
       return value.includes(letter) || value.includes(letter.toUpperCase()) 
   })
}

// PASS  ./code-challenges.test.js
// wordReturn
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
    })
  })

//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind

//     ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

//Create a function - fullHouse
//Parameter - array 
//Create a new variable to hold information
//Filter through the array and identify the duplicates with the value and index.
//Use the sort method to sort any duplicates in the new array 
//Use a conditional statement to identify if there is one pair and three of a value. 
//Throughout the conditional identify the conbinations there could be a full house and ways there couldn't be a full house
//Return a boolean value

const fullHouse = (array) => {
        let dupe = array.filter((value, index) =>
        index !== array.indexOf(value)).sort()
        if (dupe.length < 3){      
                return false
        } else if (dupe[0] === dupe[1] && dupe[1] !== dupe[2]) {
                return true
        } else if  (dupe[0] !== dupe[1] && dupe[1] === dupe[2]) {
               return true
        } else {
                return false
        }
}

// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
