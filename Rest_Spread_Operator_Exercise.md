Refactor it to use the rest operator & an arrow function:
```javascript
const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)
```
**findMin**</br>
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.
```javascript
const findMin = (...args) => Math.min(...args)
```
**mergeObjects**</br>
Write a function called **mergeObjects** that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
```javascript
const mergeObjects = (object1, object2) => { return {...object1, ...object2} }
```
**doubleAndReturnArgs**</br>
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
```javascript
const doubleAndReturnArgs = (arr,...numsToDbl) => [...arr, ...numsToDbl.map(numToDbl => numToDbl*2)]
```
**Slice and Dice**</br>
```javascript
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let randIndex = Math.floor(Math.random()*items.length);
    return [...items.slice( 0, randIndex ), ...items.slice( randIndex + 1 )];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2)  => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val)  => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key)  => {
    let newObject = { ...obj }
    delete newObject[key]
    return newObject;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2)  =>  { return {...object1, ...object2} }


/** Return a new object with a modified key and value. */

const update = (obj, key, val)  => {
    let newObject = { ...obj }
    newObject[key] = val;
    return newObject;
}
```
