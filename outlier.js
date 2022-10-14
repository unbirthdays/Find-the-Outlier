/* You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a function that takes the array as an argument and returns this “outlier” N.
*/

function outlier(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
                evenCount++;
        } else {
                oddCount++;
        }
    }
    const odds = arr.filter(number => {
        return number % 2 !== 0;
    });
    const evens = arr.filter(number => {
        return number % 2 === 0;
    });
    if (evenCount === 1) {
        return evens;
    } else {
        return odds;
    }
}



console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36])); // Should return: 11 (the only odd number)

console.log(outlier([160, 3, 1719, 19, 11, 13, -21])); // Should return: 160 (the only even number)
