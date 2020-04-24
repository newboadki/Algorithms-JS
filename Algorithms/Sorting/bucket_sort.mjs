export function bucketSort(input, k /* #buckets */, hashFunction /*Returns an index between 0 and k */) {

    let buckets = new Array(k + 1);
    // For each item in input => put in a bucket, if it doesn't exist, then create it.
    for (let item of input) {
        let idx = hashFunction(item, k);         
        if (buckets[idx] == undefined) {
            buckets[idx] = new Array(); // TODO: Use a linked list, so that insertions to an order list are O(n).
        } 
        buckets[idx].push(item);
    }

    // TODO: until linked lisk is implemented
    for (let i=0; i<=k; i++) {
        let bucket = buckets[i];
        if (bucket != undefined) {
            bucket.sort(function (a, b) {
                 return (a - b)
            });            
        }        
    }

    // Merge results, the hash function should guarantee that m > n => h(m) >= h(n)
    let sortedOutput = new Array();
    for (let i=0; i<=k; i++) {
        let bucket = buckets[i];
        if (bucket != undefined) {
            for (let item of bucket) {                
                sortedOutput.push(item);
            }    
        }
    }

    return sortedOutput;
}