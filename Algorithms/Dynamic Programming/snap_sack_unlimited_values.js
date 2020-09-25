var memo = {};
var minWeight = 9999;

// Calculate the maximum value we can carry
function maxDuffelBagValue(types, w) {
  
  if (minWeight == 9999) {
    for (type of types) {
      if (type["weight"] < minWeight) {
        minWeight = type["weight"];
      }
    }
  }

  let r = maxDuffelBagValue_rec(types, w, 0);
  console.log('RESULT!! ' + r);
  
}

function maxDuffelBagValue_rec(types, w, v) {
    if (memo[w] != null) {
        return memo[w];
      }
            
      if (w == 0) { // Found a solution
        memo[w] = v;    
        return v;
      }

      if (w < 0) {
        return null; // No solution
      }

      let subresults = [];
      for (type of types) {
        let subResult = maxDuffelBagValue_rec(types, w - type["weight"], v + type["value"]);
        if (subResult != null) {
            subresults.push(subResult);
        }        
      }
      let maxValue;
      if (subresults.length > 0) {
        maxValue = Math.max(...subresults);
      } else {
        //memo[w] = v;
        return v;
      }
                
      return maxValue;
}

maxDuffelBagValue([{ weight: 2, value: 1 }], 9);
maxDuffelBagValue([
    { weight: 4, value: 4 },
    { weight: 5, value: 5}], 9);