export function countingSort(input) {

    if (input.length == 0) {
        return [];
    }

    let maxValue = Math.max(...input);
    let frequencies = new Array(maxValue + 1).fill(0);    

    // Fill in frequencies
    for (let item of input) {
        frequencies[item] += 1;
    }

    // Calculate indexes of elements in the output
    let previousIndex = 0;
    let nextIndex = new Array(maxValue + 1); 
    for (let i=0; i<nextIndex.length; i++) {
        nextIndex[i] = previousIndex;
        previousIndex += frequencies[i];
    }

    // Calculate sorted output
    let sortedOutput = new Array(input.length);
    input.forEach(item => {
        sortedOutput[nextIndex[item]] = item;
        nextIndex[item] += 1;
    });

    return sortedOutput;
}