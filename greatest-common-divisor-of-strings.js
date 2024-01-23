/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let l = str1.length < str2.length ? str1 : str2
    let sub = l.length
    let str = ""
    function isDivisor(t) {
        if(str1.includes(t) && str2.includes(t)){
            if((str1.length % t.length === 0) && (str2.length % t.length === 0)){
                let s1c = t.repeat(Math.floor(str1.length / t.length))
                let s2c = t.repeat(Math.floor(str2.length / t.length))
                if((s1c === str1) && (s2c === str2)){
                    str = t
                    return true
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
    
    
    while(sub>=0){
        if(isDivisor(l.substring(0,sub))){
            return str
        }else {
            sub--
        }
    }
    return str
};
