function romanToInt(s: string): number {
  // Map of Roman numerals to their integer values
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let total = 0
  let i = 0

  while (i < s.length) {
    // Get the value of the current Roman numeral
    const currentVal = romanMap[s[i]]

    // Get the value of the next Roman numeral if it exists
    const nextVal = i + 1 < s.length ? romanMap[s[i + 1]] : 0

    // If the next numeral is larger, subtract the current value from the total
    if (nextVal > currentVal) {
      total += nextVal - currentVal
      i += 2 // Move to the next pair
    } else {
      total += currentVal
      i += 1 // Move to the next single numeral
    }
  }
  return total
}
