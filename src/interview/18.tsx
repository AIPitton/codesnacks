function intToRoman(num: number): string {
  // Map of integer values to Roman numeral symbols
  const valueSymbolMap: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]

  // Resultant Roman numeral
  let result = ''

  // Iterate over the value-symbol map
  for (const [value, symbol] of valueSymbolMap) {
    // Append the symbol while the value can be subtracted from num
    while (num >= value) {
      result += symbol
      num -= value
    }
  }

  return result
}
