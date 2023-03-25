// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// https://www.codewars.com/kata/5842df8ccbd22792a4000245
function expandedForm(num) {
    let ls = []
    
     while ((num % 10 ** (num.toString().length - 1)) !== 0){
     ls.push(num - num % 10 ** (num.toString().length - 1))
     num = num % 10 ** (num.toString().length - 1)
    
     }
     if (ls[ls.length - 1] !== 0){
         ls.push(num)
     }
     return ls.join(' + ')
    }
    