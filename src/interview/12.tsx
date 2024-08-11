class RandomizedSet {
  private map: Map<number, number>
  private list: number[]

  constructor() {
    this.map = new Map<number, number>()
    this.list = []
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false
    }
    this.list.push(val)
    this.map.set(val, this.list.length - 1)
    return true
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false
    }
    const index = this.map.get(val)!
    const lastElement = this.list[this.list.length - 1]

    // Swap the element with the last element
    this.list[index] = lastElement
    this.map.set(lastElement, index)

    // Remove the last element
    this.list.pop()
    this.map.delete(val)
    return true
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length)
    return this.list[randomIndex]
  }
}
