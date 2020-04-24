import {assertEquals, assertArrayEquals} from '../../Test Helpers/assertions.mjs';
import { countingSort } from './counting_sort.mjs';

function test_counting_sort() {

    function test_empty_list() {
        assertArrayEquals([], countingSort([]), "Sorting an empty list should return an empty list.");
    }

    function test_single_element_list() {
        assertArrayEquals([5], countingSort([5]), "A single-element list should be already sorted.");
    }

    function test_sorted_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], countingSort([1, 2, 3, 3, 5, 9, 10]), "A single-element list should be already sorted.");
    }

    function test_reversed_sorted_list() {        
        assertArrayEquals([1, 2, 3, 5], countingSort([5, 3, 2, 1]), "A single-element list should be already sorted.");
    }

    function test_random_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], countingSort([9, 5, 2, 3, 3, 10, 1]), "A single-element list should be already sorted.");
    }

    test_empty_list();
    test_single_element_list();
    test_sorted_list();
    test_reversed_sorted_list();
    test_random_list();
}

test_counting_sort();