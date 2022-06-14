1. Select the section with an id of container without using querySelector.
```javascript
document.getElementById('container');
```
2. Select the section with an id of container using querySelector.
```javascript
document.querySelector("#container")
```
3. Select all of the list items with a class of “second”.
```javascript
document.getElementsByClassName('second');
```
4. Select a list item with a class of third, but only the list item inside of the ol tag.
```javascript
document.querySelector('ol.third');
```
5. Give the section with an id of container the text “Hello!”.
```javascript
let queriedContainer = document.querySelector("#container")
queriedContainer.innertext = "Hello";
```
6. Add the class main to the div with a class of footer.
```javascript
let queriedFooter = document.querySelector('.footer');
queriedFooter.className += "main";
```
7. Remove the class main on the div with a class of footer.
```javascript
let queriedFooter = document.querySelector(".footer");
footer.classList.remove("main");
```
8. Create a new li element.
```javascript
let newLi = document.createElement("li");
```
9. Give the li the text “four”.
```javascript
let newLi = document.createElement("li");
newLi.innerText = "four";
```
10. Append the li to the ul element.
```javascript
let quriedUl = document.getElementsByTagName('ul');
let newLi = document.createElement("li");
newLi.innerText = "four";
quriedUl.appendChild(newLi);
```
11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
```javascript
let allOlLi = document.querySelectorAll("ol li");

for(let i = 0; i < allOlLi.length; i++){
  allOlLi[i].style.backgroundColor = "green";
}
```
12. Remove the div with a class of footer
```javascript
let queriedFooter = document.querySelector(".footer");
queriedFooter.remove();
```
