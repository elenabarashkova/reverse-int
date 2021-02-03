module.exports = function reverse (n) {
    let reverseN = 0;
    n = Math.abs(n);
      while(n !== 0) {
        let ost = n % 10;
        reverseN = reverseN * 10 + ost;
      n = (n - ost)/10;
    }
    return reverseN;
}

// second solution (longer 16ms vs 10ms)
// module.exports = function reverse (n) {
//     n = Math.abs(n);
//     nInStr = n + '';
//     nInStr = nInStr.split("").reverse().join("");
//     reverseN = parseInt(nInStr, 10);
//     return reverseN; 
// }
