/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr = []
    let max = candies[0]
    for(j=0;j<candies.length;j++){
        max = candies[j] > max ? candies[j] : max
    }
    console.log('max:',max)
    for(i=0;i<candies.length;i++){
        if((candies[i]+extraCandies) >= max){
            arr[i]=true
        }else{
            arr[i]=false
        }
    }
return arr
};
