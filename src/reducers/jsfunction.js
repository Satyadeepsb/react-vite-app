function getUniqueElement(array) {
  return array.filter((val, i, self) => {
    return i == self.indexOf(val);
  });
}
var array = [5, 5, 2, 3, 3]; // [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3];
var unique = array.filter((v, i) => array.indexOf(v) === array.lastIndexOf(v));

console.log(unique);
// console.log(getUniqueElement([5, 2, 3, 3]));

//

let num = [2, 7, 11, 15];

// {0: 2, 1: 7, 2: 11, 3: 15}
const target = 18;

// [0, 1]

function getArray(input) {
  let sum = 0;
  let result = [];
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
    result.push(i);
    if (sum == target) {
      return result;
      break;
    }
  }
  return -1;
}

function getResult(nums) {
  let map = [];
  let indexnum = [];
  for (var i = 0; i < nums.length; i++) {
    if (map[num[i]]) {
    }
  }
}

// console.log(getArray(num));

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum(num, 18));
