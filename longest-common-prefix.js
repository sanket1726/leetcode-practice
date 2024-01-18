/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 // var min = Math.min(...strs.map(o => o.length));
    let res = "";
    // flower
    for(i = 0 ; i < strs[0].length; i++){
        let pointer = strs[0][i] // f  ---> l --->o 
        for(j = 1; j < strs.length; j++){
            // strj --> flow
            if(strs[j].length <= i || strs[j][i] !== pointer ){ // return if element
                return res
            }
        }
        // result = result.concat(pointer); -->
        res+=strs[0][i]
    }
    return res
};
