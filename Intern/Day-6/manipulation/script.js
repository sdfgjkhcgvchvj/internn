var childElem = document.getElementById("list");
console.log("First child element -");
console.log(childElem.firstChild);
console.log("Next siblinng -");
console.log(childElem.nextSibling);
var parElem = document.getElementById("app");
var newelem = document.createElement("li");
newelem.textContent = "six";

parElem.append(newelem);
console.log("New child element added -");
console.log(parElem.lastElementChild);

var newelem2 = document.createElement("li");
newelem2.textContent = "five";
parElem.replaceChild(newelem2, parElem.lastElementChild);
console.log("Last child element replaced -");
console.log(parElem.lastElementChild);

parElem.removeChild(parElem.lastElementChild);
console.log("Last child element removed -");
console.log(parElem.lastElementChild);
