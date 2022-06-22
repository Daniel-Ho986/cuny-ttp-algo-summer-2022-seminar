// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

function fruits_into_baskets(fruits) {
  // TODO: Write code here
    let startPoint = 0;
    let endPoint = 0;
    let fruitBucket = new Map();
    let currentCount = 0;
    let maxCount = 0;

    while (startPoint < fruits.length && endPoint < fruits.length) {
        const fruit = fruits[endPoint];
        // Increment the value of the fruit if it is in the basket
        if (fruitBucket.has(fruit)) {
            fruitBucket.set(fruit, fruitBucket.get(fruit) + 1);
            endPoint++;
            currentCount++;
        // Add the new distinct fruit to the new basket
        } else if (fruitBucket.size < 2) {
            fruitBucket.set(fruit, 1);
            endPoint++;
            currentCount++;
        // Move the sliding window 
        } else {
            const fruitToBeRemoved = fruits[startPoint];
            const count = fruitBucket.get(fruitToBeRemoved);

            // remove the fruit
            if (count === 1) {
                fruitBucket.delete(fruitToBeRemoved);

            // decrement the value of the fruit
            } else {
                fruitBucket.set(fruitToBeRemoved, count - 1);
            }
            currentCount--;
            startPoint++;
        }

        maxCount = Math.max(currentCount, maxCount);
    }

    return maxCount;
}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    'A',
    'B',
    'C',
    'B',
    'B',
    'C',
  ])}`
);

