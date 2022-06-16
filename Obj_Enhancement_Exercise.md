**Same keys and values**
```javascript
function createInstructor(firstName, lastName){
  return {
    firstName,
    lastName
  }
}
```
**Computed Property Names**
```javascript
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}
```
**Object Methods**
```javascript
const instructor = {
  firstName: "Colt",
  sayHi() {return "Hi!"},
  sayBye(){return this.firstName + " says bye!"}
}
```
**createAnimal function**
```javascript
const createAnimal = (species, verb, noise) => {
    return {
        species,
        verb,
        noise,
        [verb]() {console.log(noise)}
    }
  }
```
