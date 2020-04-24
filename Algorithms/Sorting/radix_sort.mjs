// Orders the input by incrementally sorting digit by digit from least to most significant.
export function radixSort64(input) {
    let sortedOutput = bitCountingSort(input, 0);
    for (let i=1; i<64; i++) {
        sortedOutput = bitCountingSort(input, i);
    }
    return sortedOutput;
}

// Orders the input according to the index passed in
function bitCountingSort(input, bitIndex) {
    let sortedOutput = new Array();
    let frequencies = [0, 0];
    for (let value of input) {
        let bin = decToBin(value);
        frequencies[bitValueAtIndex(bin, bitIndex)] += 1;
    }
    let nextIndex = [0, frequencies[0]];

    for (let item of input) {
        let bin = decToBin(item);
        let itemBitValue = bitValueAtIndex(bin, bitIndex);
        sortedOutput[nextIndex[itemBitValue]] = item;
        nextIndex[itemBitValue] += 1;
    }

    return sortedOutput;
}

function bitValueAtIndex(binaryNumber, index) {
    let mask = 1 << index;
    return (binaryNumber & mask);
}

function decToBin(dec){
    return (dec >>> 0).toString(2);
}