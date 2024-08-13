function canCompleteCircuit(gas: number[], cost: number[]): number {
  const n = gas.length
  let totalGas = 0,
    totalCost = 0
  let currentGas = 0
  let startIndex = 0

  for (let i = 0; i < n; i++) {
    totalGas += gas[i]
    totalCost += cost[i]
    currentGas += gas[i] - cost[i]

    // If currentGas is negative, start from the next station
    if (currentGas < 0) {
      startIndex = i + 1
      currentGas = 0
    }
  }

  // If total gas is less than total cost, return -1
  if (totalGas < totalCost) {
    return -1
  }

  return startIndex
}
