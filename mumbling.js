// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/solutions/javascript
function accum(s) {
    str = `${s[0].toUpperCase()}`;
    
for (let i = 1; i < s.length; i++ ){
    str+= `-${s[i].toUpperCase()}${s[i].toLowerCase().repeat(i)}`
}
return str
}
