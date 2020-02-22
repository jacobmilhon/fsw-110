let newHeader = document.createElement("h2");
newHeader.textContent = "Welcome to my JS site";
document.body.append(newHeader);

let newParagraph = document.createElement("p");
newParagraph.textContent = "All of this was created with Javascript";
document.body.append(newParagraph);

let newOl = document.createElement("ol");
let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
liOne.textContent = "One";
liTwo.textContent = "Two";
liThree.textContent = "Three";
newOl.append(liOne);
newOl.append(liTwo);
newOl.append(liThree);
document.body.append(newOl);