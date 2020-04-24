// Assumes the array is sorted ascendently in two chunks   [m, n, ....z, a, b, c.....]

function findRotationPoint(words) {

    let low = 0;
    let high = (words.length - 1);
    
    while (areInverted(low, high, words)) {
      let mid = low + Math.floor((high - low) / 2);      
      
      if (areInverted(low, mid, words)) {
        high = mid;
        if (areInverted((mid - 1), mid, words)) {
          return mid;
        }
      } else if (areInverted(mid, high, words)) {
        low = mid;
        if (areInverted(mid, (mid + 1), words)) {
          return mid+1;
        }
      }
    }
  }
  
  function areInverted(start, end, a) {
    return a[end] < a[start];
  }
  

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

console.log("====> " + ['cape', 'cake'][0][0]);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}