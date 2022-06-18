Maps and Sets Exercise</br></br>

**Quick Question #1**</br>
What does the following code return?</br>
new Set([1,1,2,2,3,4])</br>
Answer: 1,2,3,4</br></br>

**Quick Question #2**</br>
What does the following code return?</br>
</br>
[...new Set("referee")].join("")</br>
Answer: "ref"</br>
</br>
**Quick Questions #3**</br>
What does the Map m look like after running the following code?</br>
```javascript
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*Answer*/
0- {Array(3) = true}
1- {Array(3) = false}
```
**hasDuplicate**</br>
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate</br>
```javascript
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

/*answer*/

const hasDuplicate = (arr) => arr.length != new Set(arr).size;
```
**vowelCount**</br>
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.</br>
```javascript
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

/*answer*/

const isVowel = (char) =>"aeiou".includes(char);
  
const vowelCount = (str) => {
    let lowercaseStr = str.toLowerCase()
    const vowelCounter = new Map();
    for(let char of lowercaseStr){
      if(isVowel(char)){
        if(vowelCounter.has(char)){
            vowelCounter.set(char, vowelCounter.get(char) + 1);
        } else {
            vowelCounter.set(char, 1);
        }
      }
    }
    return vowelCounter;
  }
```
