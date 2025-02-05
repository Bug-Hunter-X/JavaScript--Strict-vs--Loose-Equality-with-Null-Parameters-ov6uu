The preferred solution is to always use strict equality (===) when checking for null values to avoid type coercion and ensure predictable results.  

If you require different handling for null values (such as defaulting to 0), it is better to explicitly check for null using strict equality (===) and handle the cases accordingly:

```javascript
function foo(a, b) {
  let aValue = (a === null) ? 0 : a; //default value is 0 if null
  let bValue = (b === null) ? 0 : b; //default value is 0 if null
  return aValue + bValue;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
```
This way, the code is clear, explicit, and avoids potential unintended consequences of loose equality.