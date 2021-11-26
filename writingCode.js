// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(array) {
    let value = false
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0 ; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === 0) {
                    value = true
                }
            }
        }
    }
    return value     
}

console.log(addToZero([1, 2, 3,]))

// runtime O(n)

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(str) {
    let chars = ''
    for (let i = 0; i < str.length; i++) {
        if (chars.includes(str[i])) {
            return false
        }
        chars += str[i]
    }

    return true
}

console.log(hasUniqueChars("Monday"))

//runtime O(n)

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(sentence) {
    let alphabet ='abcdefghijlkmnopqrstuvwxyz'
    let alphaArr = alphabet.split('')
    
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i]
        const index = alphaArr.indexOf(letter)
        if (index !== -1) {
            alphaArr.splice(index, 1)
        }
        
    }
    return !alphaArr.length
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

//runtime O(n)

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5

function findLongestWord(array) {
   
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > array[i+1].length) {
            return array[i].length
        } else {
            return array[i+1].length
        }
    }
}

console.log(findLongestWord(["hi", "hello"]))

//runtime O(n)