// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

// var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
// var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
// var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
// var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4) {
  const seen = {};
  const common = [];
  arguments.forEach(arr => {
    if (Array.isArray(arr)) {
      for (let item of arr) {
        if (!seen[item]) {
          seen[item] = 1;
        } else {
          seen[item]++;
        }
        if (seen[item] === 4) {
          common.push(item);
        }
      }
    }
  })
  return common;
}

commonElements(...arrs) => {
  arrs.reduce((a,b) => a.concat(b), [])
  .reduce((a,b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    if (a[b] === 4) a[_allFour].push(b);
    return a;
  },{_allFour: []})._allFour;
}

module.exports = commonElements;
