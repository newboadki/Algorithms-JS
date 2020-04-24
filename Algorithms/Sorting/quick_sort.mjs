export function quickSort(input) {
    quicksortHelper(input, 0, (input.length - 1));
    return input;
}

function quicksortHelper(input, start, end) {
    if (start >= end) {
        return;
    }

    let pivotIndex = partition(input, start, end);
    quicksortHelper(input, start, pivotIndex - 1);
    quicksortHelper(input, pivotIndex + 1, end);
}

function partition(input, start, end) {
    let pivot = input[end];
    let left = start;
    let right = end - 1;

    while (left <= right) {
        while (left <= end && input[left] < pivot) {
            left += 1;
        }

        while (right >= start && input[right] >= pivot) {
            right -= 1;
        }

        if (left < right) {
            swap(input, left, right);
        } else {
            swap(input, left, end);
        }
    }

    return left;
}

function swap(input, i, j) {
    let temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}