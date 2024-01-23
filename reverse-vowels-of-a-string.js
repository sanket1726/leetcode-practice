/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s.length === 1) {
        return s
    }
    const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    let str  = []
    let l = s.length-1 
    let i = 0
    while(i<=l){
        if(!vowels.includes(s[i])){
            str[i] = s[i]
            i++
        }
        if(!vowels.includes(s[l])){
            str[l] = s[l]
            l--
        }
        if(vowels.includes(s[i]) && vowels.includes(s[l])){
            str[i] = s[l]
            str[l] = s[i]
            i++
            l--
        }
    }
    return str.join("")
};
