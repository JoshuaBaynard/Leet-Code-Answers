/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var numSet = [...new Set(nums)];
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] !== numSet[i]) return true;
    }
    return false;
};
console.log(containsDuplicate([1, 2, 2, 4]))
    