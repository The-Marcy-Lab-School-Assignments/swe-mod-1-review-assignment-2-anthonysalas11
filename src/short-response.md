# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

**Part A:** `15` will be logged. In JavaScript, objects are stored by reference, so `playlist2 = playlist1` does not create a new object — both variables point to the same object in memory. Mutating `playlist2.songCount` therefore mutates the original.

**Part B:** Use the spread operator (`...`) to create a shallow copy of `playlist1`, so `playlist2` becomes an independent object.

**Corrected Code:**

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount); // 10
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true },
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. `filter` would return a new array with elements that meet a specified condition.

2. `find` would return the first element that matches the condition needed, giving a reference to Destiny's object allowing her grade to be updated directly.

3. `reduce` accumulates all grades into a single sum, which is then divided by `students.length` giving us the average.

4. `map` transforms each element into a new value, producing a new array of formatted strings like `"Maya: 92"`.

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ["a", "b", "c", "d"];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error occurs because `capitalize()` is being invoked with parentheses instead of being passed as a reference. `map` expects a callback function to call on each element, but `capitalize()` executes right away with no argument, leaving `str` as `undefined` — causing `undefined.toUpperCase()` to throw a `TypeError`. To fix it, remove the parentheses: `letters.map(capitalize)`. As a rule of thumb, if you find yourself writing `.map(fn())`, that's a signal you're invoking the function rather than passing it.

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 },
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
  - What is the value of sum?
  - What is the value of order?
  - What gets returned?

### Response 4

**Part A:** `grandTotal` will equal `135` (45 + 23 + 67).

**Part B:** The `0` is the initial value of the accumulator (`sum`). Without it, `reduce` uses the first element of the array as the starting accumulator — which would be the object `{ id: 1, total: 45 }` rather than a number, causing incorrect results. Providing `0` ensures `sum` starts as a number.

**Part C:** In the first iteration, `sum` is `0` (the initial value passed to `reduce`) and `order` is the first object in the array, `{ id: 1, total: 45 }`. The callback returns `45`, which becomes the new value of `sum` in the next iteration.
