function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Start from the end of both arrays
  let i = m - 1 // Last element of nums1's actual values
  let j = n - 1 // Last element of nums2
  let k = m + n - 1 // Last position in nums1

  // Iterate backwards through both arrays and place elements in the correct position
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  // If there are remaining elements in nums2, copy them
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
}
