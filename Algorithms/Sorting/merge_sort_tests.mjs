import {assertEquals, assertArrayEquals} from '../../Test Helpers/assertions.mjs';
import { mergeSort } from './merge_sort.mjs';

function test_merge_sort() {

    function test_empty_list() {
        assertArrayEquals([], mergeSort([]), "Sorting an empty list should return an empty list.");
    }

    function test_single_element_list() {
        assertArrayEquals([5], mergeSort([5]), "A single-element list should be already sorted.");
    }

    function test_sorted_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], mergeSort([1, 2, 3, 3, 5, 9, 10]), "Already sorted list can be ordered");
    }

    function test_reversed_sorted_list() {        
        assertArrayEquals([1, 2, 3, 5], mergeSort([5, 3, 2, 1]), "Reversed list can be sorted");
    }

    function test_random_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], mergeSort([9, 5, 2, 3, 3, 10, 1]), "Random list can be sorted.");
    }

    test_empty_list();
    test_single_element_list();
    test_sorted_list();
    test_reversed_sorted_list();
    test_random_list();
}

test_merge_sort();