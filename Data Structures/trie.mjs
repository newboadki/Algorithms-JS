export class Trie {
  
    constructor() {
      this.root = {};
      this.eow = '*'
    }
    
    addWord(word) {
      let currentNode = this.root;
      let isNewNode = false;
      
      for (let i=0; i<word.length; i++) {
        const c = word[i];
        if (!currentNode.hasOwnProperty(c)) {
          isNewNode = true;
          currentNode[c] = {};
        }
        currentNode = currentNode[c];
      }
      
      if (!currentNode.hasOwnProperty(this.eow)) {
        isNewNode = true;
        currentNode[this.eow] = {};
      }
      
      return isNewNode;
    }

    contains(word) {
      let currentNode = this.root;
      for (let i=0; i<word.length; i++) {
        const c = word[i]
        if (!currentNode.hasOwnProperty(c)) {
          return false;
        }
        currentNode = currentNode[c];
      }
      
      return currentNode.hasOwnProperty(this.eow);
    }
  }