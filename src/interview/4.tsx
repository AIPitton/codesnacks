function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) return nums.length

  let j = 1 // Pointer for the position to place the next allowed element
  for (let i = 2; i < nums.length; i++) {
    // Check if the current element can be placed in the new array
    if (nums[i] !== nums[j - 1]) {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1 // The number of elements allowed
}
