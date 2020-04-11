
/* Number of ways to sum 'n' by increments of {3, 5, 10} */
function numberOfWays(n, memo) {
    
    if (memo[n] != null) {
        return memo[n];
    }

    if (n == 0) {
        return 1;
    }

    if (n < 0) {
        return 0;
    }

    const r = numberOfWays(n - 3, memo) + numberOfWays(n - 5, memo) + numberOfWays(n - 10, memo);
    memo[n] = r;
    
    return r;
}

var memo = {};
const result = numberOfWays(20, memo);
console.log(result);

function numberOfWaysTab(n) {
    var T = new Array(n).fill(0);    
    for (let i=3; i<=n; i++) {
        if (i==3 || i==5 || i==10) {
            T[i] = 1;
        } else {
            const r_3 = (i - 3) >= 0 ? T[i - 3] : 0;
            const r_5 = (i - 5) >= 0 ? T[i - 5] : 0;
            const r_10 = (i - 10) >= 0 ? T[i - 10] : 0;
            T[i] = r_3 + r_5 + r_10;
        }
    }
    return T[n];
}

console.log(numberOfWaysTab(13));