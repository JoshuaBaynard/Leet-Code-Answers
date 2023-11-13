/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// Beats 5% in speed. Pretty slow
var topKFrequent = function(nums, k) {
    var obj = {
    }
    nums.forEach((n) => {
        if (obj[n]) obj[n]++;
        else obj[n] = 1
    })
    console.log(nums)
    console.log(obj)
    var arr = [...new Set(nums.sort((a, b) => {
        if (obj[a] < obj[b]) {
            console.log("A:" + a)
            return 1
        }
        else return -1
    }))];
    console.log(arr)
    var newArr = [];
    for(var i = 0; i < k; i++) {
        newArr.push(arr[i])
    }
    return newArr
};
console.log(topKFrequent([3,0,1,0], 1))