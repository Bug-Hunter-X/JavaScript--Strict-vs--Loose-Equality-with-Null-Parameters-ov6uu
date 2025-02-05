# JavaScript: Strict vs. Loose Equality with Null Parameters

This code demonstrates a common subtle error in JavaScript related to how null values are handled with the strict equality operator (===) and the loose equality operator (==).

The `foo` function uses strict equality, correctly identifying null input and returning null.  The `bar` function uses loose equality, resulting in unexpected behavior when one parameter is null; in this case, null is coerced to 0, which leads to the sum being calculated incorrectly.

This example highlights the importance of carefully choosing the correct equality operator depending on the desired behavior when dealing with null or undefined values.