module.exports = function reverse (n) {
    let num = n.toString();
    let result = ''; 
    
    if (n < 0) {
      for (let i = num.length - 1; i > 0; i--) {
        result = result + num[i];
      }
    } else {
      for (let i = num.length - 1; i >= 0; i--) {
        result = result + num[i];
      }
    } 
    return +result;
}
