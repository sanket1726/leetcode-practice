/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let l = str1.length > str2.length ? str1 : str2
    console.log('l:', l)
    let sub = 0
    let str = ""
    function isDivisor(t) {
        if(str1.includes(t) && str2.includes(t)){
            if((str1.length % t.length === 0) && (str2.length % t.length === 0)){
                let s1c = t.repeat(Math.floor(str1.length / t.length))
                let s2c = t.repeat(Math.floor(str2.length / t.length))
                if((s1c === str1) && (s2c === str2)){
                    str = t
                }else {
                    return false
                }
            } else {
                return false
            }
        }else{
            return false
        }
    }
    
    if(str1.includes(l) && str2.includes(l)){
        
    }
    while(sub<=l.length){
        if(isDivisor(l.substring(0,sub))){
            return res
        }else {
            sub++
        }
    }
    return str
};
