/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1; 
  }
  const [first, ...rest] = nums;
  return first * product(rest);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0; 
  }
  const [first, ...rest] = words;
  const lengthOfRest = longest(rest); 
  return Math.max(first.length, lengthOfRest);

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str; 
  }
  const [first, , ...rest] = str;
  return first + everyOther(rest);

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, ''); 
  if (str.length <= 1) {
    return true; 
  }
  const [first, last] = [str.charAt(0), str.charAt(str.length - 1)];
  if (first !== last) {
    return false; 
  }
  const innerStr = str.slice(1, -1); 
  return isPalindrome(innerStr);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (index === arr.length) {
    return -1; 
  }
  if (arr[index] === str) {
    return index; 
  }
  return findIndex(arr, str, index + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return ''; 
  }
  const [last, ...rest] = str;
  return revString(rest) + last;

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]); // If it's a string, add it to the array
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key])); // If it's an object, recursively gather strings from it
    }
  }
  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1; 
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid; 
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right); 
  } else {
    return binarySearch(arr, target, left, mid - 1); 
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
