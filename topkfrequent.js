/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var arr = [...new Set(nums.sort((a, b) => {
        if (a < b) {
            console.log(a)
            return a
        }
        else return b
    }))];
    var newArr = [];
    for(var i = 0; i < k; i++) {
        newArr.push(arr[i])
    }
    return newArr
};
console.log(topKFrequent([3,0,1,0], 1))