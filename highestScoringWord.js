// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
function high(x){
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let ls = [];
for (let word of x.toLowerCase().split(' ')){
   let num = 0;
   for (let letter of word){
       
       num += alpha.indexOf(letter) + 1
       
   }
   ls.push(num)
}
return x.split(' ')[ls.indexOf(Math.max.apply(null, ls))]
}

