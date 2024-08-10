function hIndex(citations: number[]): number {
    // Step 1: Sort the citations array in non-decreasing order
    citations.sort((a, b) => a - b);

    const n = citations.length;

    // Step 2: Iterate through the sorted array from the end to the beginning
    for (let i = 0; i < n; i++) {
        const h = n - i; // Number of papers that have at least citations[i] citations
        if (citations[i] >= h) {
            return h;
        }
    }

    return 0;