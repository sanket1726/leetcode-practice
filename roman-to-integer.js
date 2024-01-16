// This is first solution

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanToInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
        let sum = 0
        let rArr = s.split('')
        for(i=0; i<rArr.length; i++){
            if (rArr[i] === 'I') {
                switch(rArr[i+1]){
                    case 'V':
                        sum+=4
                        i+=1
                        break
                    case 'X':
                        sum+=9
                        i+=1
                        break
                    default:
                        sum+=romanToInt[rArr[i]]
                        break
                }
            } else if(rArr[i] === 'X') {
                switch(rArr[i+1]){
                    case 'L':
                        sum+=40
                        i+=1
                        break
                    case 'C':
                        sum+=90
                        i+=1
                        break
                    default:
                        sum+=romanToInt[rArr[i]]
                        break
                }
            } else if(rArr[i] === 'C') {
                switch(rArr[i+1]){
                    case 'D':
                        sum+=400
                        i+=1
                        break
                    case 'M':
                        sum+=900
                        i+=1
                        break
                    default:
                        sum+=romanToInt[rArr[i]]
                        break
                }
            } else {
                sum+=romanToInt[rArr[i]]
            }
        }
        return sum
};


// leet code solution with better space & time complexity
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var map = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    var len = s.length;
    var i = 0;
    var res = 0;
    while (i < len) {
        if (map[s.substr(i, 2)]) {
            res += map[s.substr(i, 2)];
            i += 2;
        } else {
            res += map[s[i]];
            i += 1;
        }
    }
    return res;
};