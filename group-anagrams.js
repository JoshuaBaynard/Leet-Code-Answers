/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var finalArr = [];
    var checkedStrs = [];
    var obj = {}

    for (var j = 0; j < strs.length; j++) {
        var alphabeticalLetters = [...(strs[j])].sort().join("")
        if (obj[alphabeticalLetters] === undefined) obj[alphabeticalLetters] = []
        obj[alphabeticalLetters].push(strs[j])
    }
    console.log(obj)
    for (anagram in obj) {
        finalArr.push(obj[anagram])
    }
    return finalArr
};
strs = ["ddddddddddg","dgggggggggg"]


console.log(groupAnagrams(strs));