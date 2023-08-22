let Arr=[1,3,5,6,7] , k=4
function insertSearch(Arr,k){
  let l=0;
  let h=Arr.length-1;
while(l<=h){
  let mid=Math.floor(l+(h-l)/2)
  if(Arr[mid]==k){
    return mid
   }else if(Arr[mid]>k){
    h=mid-1
   }else{
    l=mid+1
   }
 }  
  return l
}


function addBinary(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const sum = (i >= 0 ? parseInt(a[i]) : 0) + (j >= 0 ? parseInt(b[j]) : 0) + carry;
        console.log('sum',sum)
        result = (sum % 2) + result; // Add the least significant bit to the result
        carry = Math.floor(sum / 2); // Calculate the carry for the next iteration
        i--;
        j--;
    }
    return result;
}

// Test cases
// console.log(addBinary("11", "1")); // Output: "100"
// console.log(addBinary("1010", "1011")); // Output: "10101"


// let nums = [-1,0,3,5,12], K = 9
let nums =[-1,0,3,5,9,12] , K=2

function binarySearch(nums,K){
  let l=0;
  let h=nums.length-1;

  while(l<=h){
    let mid=Math.floor(l+(h-l)/2);
    if(nums[mid]===K){
      return mid
    }else if(nums[mid]<K){
      l=mid+1
    }else{
      h=mid-1
    }
  }
  return -1
}

// console.log(binarySearch(nums,K))

function binaryGap(n) {
    let binaryStr = n.toString(2); // Convert n to binary string
    let maxDistance = 0;
    let distance = 0;
    let foundOne = false;

    for (let digit of binaryStr) {
        if (digit === "1") {
            if (!foundOne) {
                foundOne = true;
            } else {
                maxDistance = Math.max(maxDistance, distance);
            }
            distance = 1; // Reset distance for the next pair
        } else if (foundOne) {
            distance++;
        }
    }

    return maxDistance;
}

// Test cases
// console.log(binaryGap(22)); // Output: 2
// console.log(binaryGap(8)); // Output: 0
// console.log(binaryGap(5)); // Output: 2


function removeDuplicates(str) {
    
   let stack=[];
    
    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
        while(stack.length!=0 && stack[stack.length-1] == str[i+1]){
            stack.pop();
            i++;
        }
    }
    if(stack.length==0){
        console.log("");
    } else {
        console.log(stack.join(""));
    }
}

// Test cases
// removeDuplicates("abbaca"); // Output: "ca"
// removeDuplicates("abcd"); // Output: "abcd"
// removeDuplicates("aabbccdd"); // Output: ""

// 
function validStackSequence(N,Arr1,Arr2){
    
    let Stack=[];
    let i=0;
    
    for(let j=0; j<N; j++){
        Stack.push(Arr1[j]);
        while(Stack.length!=0 && i<N && Stack[Stack.length-1] == Arr2[i]){
            Stack.pop();
            i++;
        }
        if(Stack.length === 0){
            return "YES";
        }
    }
    
    return "NO";
}

// console.log(validStackSequence(5,[1, 2, 3, 4, 5],[4, 5, 3, 2, 1]))

// Normal function

function add(x, y) {
    return x + y;
}

// Curried version of the add function
function curriedAdd(x) {
    return function(y) {
        return x + y;
    };
}

// Usage of the curried function
// const add5 = curriedAdd(5); // Partially apply 5 to the curriedAdd function
// console.log(curriedAdd(5)(3)); // Output: 8 (5 + 3)
// console.log(curriedAdd(5)(7)); // Output: 12 (5 + 7)

// benifits:
// Partial Application: You can create specialized functions by providing a subset of the required arguments.
// Reusability: Curried functions can be reused with different arguments to create new functions on-the-fly.
// Modularity: Breaking down functions into smaller units makes the code more modular and easier to reason about.
// Composition: Currying makes it easier to compose functions by chaining them together.

function upperBound(N, K, arr){
     let l = 0;
    let h = N - 1;
    let result = -1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (arr[mid] <= K) {
            l = mid + 1;
        } else {
            result = mid;
            h = mid - 1;
        }
    }
    return result;
}

// console.log(upperBound(7,3,[1,2,3,3,3,5,6]))


function LowerBound(Arr,traget){
  let l=0;
  let h=Arr.length-1;
  let res=-1;
  while(l<=h){
    let mid=Math.floor(l+(h-l)/2)
    if(Arr[mid]==traget){
      res=mid;
      h=mid-1;
    }else if(Arr[mid]<traget){
      l=mid+1;
    }else{
      h=mid-1;
    }
  }
  return res;
}
// console.log(LowerBound([1,2,3,3,3,5,5,5,6],5))


function UpperBound(Arr,k){
   let l=0;
   let h=Arr.length-1;
  let res=-1;
  while(l<=h){
    let mid=Math.floor(l+(h-l)/2);
    if(Arr[mid]<=k){
      // res=mid //for getting last value
      l=mid+1
    }else{
      h=mid-1
      res=mid //for getting > vallu than last value 
    }
  }
  return res
}

// console.log(UpperBound([1,2,3,3,3,5,5,5,6],5))

function wordPattern(pattern, str) {
    const words = str.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Array(26).fill('');
    const wordUsed = new Array(26).fill(false);

    for (let i = 0; i < pattern.length; i++) {
        const charIndex = pattern.charCodeAt(i) - 'a'.charCodeAt(0);
        const wordIndex = words[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (patternToWord[charIndex] === '') {
            if (wordUsed[wordIndex]) {
                return false;
            }
            patternToWord[charIndex] = words[i];
            wordUsed[wordIndex] = true;
        } else if (patternToWord[charIndex] !== words[i]) {
            return false;
        }
    }

    return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));  // should return true
console.log(wordPattern("abba", "dog cat cat fish")); // should return false
console.log(wordPattern("aaaa", "dog cat cat dog"));  // should return false
console.log(wordPattern("abba", "dog dog dog dog"));  // should return false
