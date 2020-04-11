// NOTE: run using node --experimental-modules trie_tests.mjs

// Imports
import {Trie} from './trie.mjs';
import {assertEquals} from '../Test Helpers/assertions.mjs';

// Tests
const trie = new Trie();
assertEquals(trie.addWord('catch'), true, "'catch' should be a new word");
assertEquals(trie.addWord('cakes'), true, "'cakes' should be a new word");
assertEquals(trie.addWord('cake'), true, "'cake' should be a new word");
assertEquals(trie.addWord('cake'), false, "'cake' should already be present");
assertEquals(trie.addWord('caked'), true, "'caked' should be a new word");
assertEquals(trie.addWord('catch'), false, "'catch' should already be present");
assertEquals(trie.addWord(''), true, 'empty word is a new word');
assertEquals(trie.addWord(''), false, 'empty word should be present');

assertEquals(trie.contains('cake'), true, "Trie should contain 'cake'");
assertEquals(trie.contains('cakes'), true, "Trie should contain 'cake'");
assertEquals(trie.contains('captain'), false, "Trie should not contain 'captain'");

