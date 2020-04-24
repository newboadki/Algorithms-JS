import {assertEquals, assertArrayEquals} from '../../Test Helpers/assertions.mjs';
import { bucketSort } from './bucket_sort.mjs';

function test_bucket_sort() {

    var hash = function(item, k) {
        return Math.floor(item / k);
    }
    var k = 10; // This needs to be selected in real-case scenarios.

    function test_empty_list() {
        assertArrayEquals([], bucketSort([], k, hash), "Sorting an empty list should return an empty list.");
    }

    function test_single_element_list() {
        assertArrayEquals([5], bucketSort([5], k, hash), "A single-element list should be already sorted.");
    }

    function test_sorted_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10], bucketSort([1, 2, 3, 3, 5, 9, 10], k, hash), "A sorted list should be already sorted.");
    }

    function test_reversed_sorted_list() {        
        assertArrayEquals([1, 2, 3, 5], bucketSort([5, 3, 2, 1], k, hash), "A reverse ordered list should be sorted");
    }

    function test_random_list() {        
        assertArrayEquals([1, 2, 3, 3, 5, 9, 10, 15, 18, 20, 24, 25, 26, 30, 31, 39], bucketSort([31, 25, 9, 24, 15, 18, 20, 5, 39, 30, 2, 3, 3, 26, 10, 1], k, hash), "A random list should be sorted.");
    }

    test_empty_list();
    test_single_element_list();
    test_sorted_list();
    test_reversed_sorted_list();
    test_random_list();
}

test_bucket_sort();