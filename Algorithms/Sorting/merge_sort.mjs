
export function mergeSort(input) {
    if (input.length <= 1) {
        return input;
    }
    return mergeSortSublist(input, 0, input.length - 1);
}

function mergeSortSublist(input, startIndex, endIndex) {
    
    if ((endIndex - startIndex) == 0) {
        return [input[startIndex]];
    }

    let mid = Math.floor((startIndex + endIndex) / 2);
    let sortedLeft = mergeSortSublist(input, startIndex, mid);
    let sortedRight = mergeSortSublist(input, mid + 1, endIndex);
    return combine(sortedLeft, sortedRight);
}

function combine(leftArray, rightArray) {
    let result = new Array();
    let leftIndex = 0;
    let rightIndex = 0;    

    while ((leftIndex < leftArray.length) && (rightIndex < rightArray.length)) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);            
            leftIndex += 1;
        } else {
            result.push(rightArray[rightIndex]);            
            rightIndex += 1;
        }
    }

    while (leftIndex < leftArray.length) {
        result.push(leftArray[leftIndex]);     
        leftIndex += 1;       
    }

    while (rightIndex < rightArray.length) {
        result.push(rightArray[rightIndex]);            
        rightIndex += 1;
    }

    return result;
}