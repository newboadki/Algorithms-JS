import {assertEquals, assertArrayEquals} from '../../Test Helpers/assertions.mjs';
import { radixSort64 } from './radix_sort.mjs';

function test_radix_sort() {

    function test_empty_list() {
        assertArrayEquals([], radixSort64([]), "Sorting an empty list should return an empty list.");
    }

    function test_single_element_list() {
        assertArrayEquals([5], radixSort64([5]), "A single-element list should be already sorted.");
    }

    function test_sorted_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], radixSort64([1, 2, 3, 3, 5, 9, 10]), "Sorted list failed");
    }

    function test_reversed_sorted_list() {        
        assertArrayEquals([1, 2, 3, 5], radixSort64([5, 3, 2, 1]), "Reversed list failed");
    }

    function test_random_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], radixSort64([9, 5, 2, 3, 3, 10, 1]), "Random list failed.");
    }

    test_empty_list();
    test_single_element_list();
    test_sorted_list();
    test_reversed_sorted_list();
    test_random_list();
}

test_radix_sort();