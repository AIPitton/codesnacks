function rotate(nums: number[], k: number): void {
  const n = nums.length
  k = k % n // In case k is greater than the length of the array

  // Helper function to reverse elements in the array
  const reverse = (start: number, end: number) => {
    while (start < end) {
      ;[nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, n - 1)
  // Step 2: Reverse the first k elements
  reverse(0, k - 1)
  // Step 3: Reverse the remaining elements
  reverse(k, n - 1)
}
