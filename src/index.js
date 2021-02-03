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
