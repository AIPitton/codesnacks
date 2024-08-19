function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  // Start with the first string as the initial prefix
  let prefix = strs[0]

  for (let i = 1; i < strs.length; i++) {
    // Adjust the prefix length to the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1)
      if (prefix === '') return ''
    }
  }
  return prefix
}
