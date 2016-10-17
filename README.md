# feature-breadth-ecmascript
Improve your knowledge of ECMAScript language feature breadth by release version

Familiarity and mastery of the latest features from a framework or language in an efficient manner is a challenge. I like the idea of having simple exercises organized by release version that incorporate minimal reliance on other language or framework features. This not only keeps the learning process itself streamlined but also allows a newcomer to that language/framework to get up to speed quickly with whatever project they're responsible for, by drilling down to the features they'll need most.

# Example
http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.includes

_ECMAScript 7 - Array.prototype.includes_

If I want to practice and familiarize myself with the new features of ECMAScript 7, I would traverse feature-breadth-ecmascript hierarchy to the 7.0 directory, and then find the feature I wanted from within that folder. In this example it's array-prototype-includes. Then I look at the README for that folder and example problem:

_feature-breadth-ecmascript/7.0/array-prototype-includes/README:_

"Array.prototype.includes compares searchElement to the elements of the array, in ascending order, using the SameValueZero algorithm, and if found at any position, returns true; otherwise, false is returned."

_feature-breadth-ecmascript/7.0/array-prototype-includes/example-nodejs.js:_

```
var myArray = [1, 2, 3, 4, 5];

// Convert the following index check from indexOf style to use Array.prototype.includes:
if (myArray.indexOf(3) !== -1) {
    console.log("myArray contains a 3");
}
```

_feature-breadth-ecmascript/7.0/array-prototype-includes/solution/solution-nodejs.js:_

```
var myArray = [1, 2, 3, 4, 5];

if (myArray.includes(3)) {
    console.log("myArray contains a 3");
}
```
