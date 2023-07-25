/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    let multiply = nums.shift();
    nums[0] = nums[0] * multiply;
    return product(nums);
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else {
    let currentLong = words.shift();
    if (currentLong.length > words[0].length) {
      words[0] = currentLong;
      return longest(words);
    } else {
      return longest(words);
    }
  }
}

/** everyOther: return a string with every other letter. */
//had to add variable in function call
function everyOther(str, n = 0, ans = "") {
  if (str.length <= 1) {
    if (n%2===0) {
      ans+= str.substring(0,1)
      return ans
    } else {
      return ans;
    }
  } else {
    if (n%2 === 0) {
      n++;
      ans += str.substring(0,1)
      str = str.slice(1,str.length)
      return everyOther(str,n,ans)
      
    } else {
      n++;
      str = str.slice(1,str.length)
      return everyOther(str,n,ans)
    }
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true
  } else {
    let start = str[0]
    let end = str[(str.length-1)]
    if (start === end) {
      str = str.slice(1,str.length-1)
      return isPalindrome(str)
    } else {
      return false
    }
    
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
//had to add variable in function call
function findIndex(arr, val,index = 0) {
  if (index === arr.length-1) {
    if (arr[index] === val) {
      return index
    }
    else{
      return -1
    }
  } else {
    if (arr[index] === val) {
      return index
    }
    else{
      index = index+1
      return findIndex(arr,val,index)
    }
  }
}

/** revString: return a copy of a string, but in reverse. */
//had to add variable in function call
function revString(str,ans = '') {
  if (str.length === 1) {
    ans += str
    return ans
  }
  else{
    ans += str.substring(str.length-1,str.length)
    str = str.slice(0,str.length-1)
    return revString(str,ans)
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arrString = []
  for(let i in obj){
    if (typeof obj[i] === 'string') {
      arrString.push(obj[i])
    }
    else if(typeof obj[i] === 'object'){
      arrString = arrString.concat(gatherStrings(obj[i]))
    }
  }
  return arrString;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = (arr.length-1)) {
  let midPoint = Math.floor(((end-start)/2) + start)
  if (arr[midPoint] === val) {
    return midPoint
  }
  else if(end - start === 0){
    return -1
  }
  else if(arr[midPoint] < val){
    return binarySearch(arr, val, midPoint+1, end)
  }
  else if(arr[midPoint] > val){
    return binarySearch(arr, val, start, midPoint)
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
  binarySearch,
};
