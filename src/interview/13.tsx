function productExceptSelf(nums: number[]): number[] {
  const n = nums.length
  const answer = new Array(n).fill(1)

  // Step 1: Calculate left products
  let leftProduct = 1
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct
    leftProduct *= nums[i]
  }

  // Step 2: Calculate right products and combine with left products
  let rightProduct = 1
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return answer
}
