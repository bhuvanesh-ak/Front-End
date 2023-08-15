// rotating a array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


let nums=[1,2,3,4,5,6,7,8];
let k=4;

const revNums=(nums,start,end)=>{
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]];
        start++;
        end--;
    }
}
    let rotate = function(nums, k) {
    k=k%nums.length;

    nums.reverse();
    
    revNums(nums,0,k-1);
    revNums(nums,k,nums.length-1);
    return nums
    
};
console.log(rotate(nums,k));

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

 

// Constraints:

//     1 <= nums.length <= 105
//     -231 <= nums[i] <= 231 - 1
//     0 <= k <= 105
