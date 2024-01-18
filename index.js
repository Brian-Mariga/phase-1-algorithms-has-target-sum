function hasTargetSum(array, target) {
  // Write your algorithm here
  const numbers = {};

  for (const num of array) {
    const numbers2 = target - num;
    if (numbers2 in numbers) {
      return true;
    }
    numbers[num] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
1. Initialize an empty object called 'numbers'.
2. Loop through each element 'num' in the input array.
3. Calculate 'numbers2' as the target minus 'num'.
4. If 'numbers2' is in 'numbers', return true (a pair is found).
5. Add 'num' to 'numbers'.
6. If the loop completes without finding a pair, return false.

*/

/*
  Add written explanation of your solution here
  The function uses an object) called numbers to keep track of the numbers encountered during the iteration. For each element num in the array, it calculates numbers2 as the difference between the target and num. If numbers2 is already in numbers, it means a pair is found that adds up to the target, and the function returns true. Otherwise, num is added to numbers.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
