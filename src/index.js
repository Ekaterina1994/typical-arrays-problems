
exports.min = function min (array) {
    if (!array || array.length == 0) return 0;
    let a = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < a) {
            a = array[i];
        }
    }
    return a;
}

exports.max = function max (array) {
    if (!array || array.length == 0) return 0;
    let b = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > b) {
            b = array[i];
        }
    }
    return b;
  }

exports.avg = function avg (array) {
  if (!array || array.length == 0) return 0;
  var sum = array[0];
  for(let i = 1; i < array.length; i++){
      sum += array[i];
      }
      return sum / array.length;

}
