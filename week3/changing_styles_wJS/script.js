let drinks = ["Water", "Juice", "Tea", "Coffee"];

let ulist = document.createElement("ul");
document.body.append(ulist);
for(i = 0; i < drinks.length; i++) {
    let li = document.createElement("li");
    li.textContent = drinks[i];
    li.style.fontSize = "20px";
    li.style.fontWeight = "lighter";
    li.style.fontFamily = "sans-serif";
    li.style.color = "cornflowerblue";
    li.classList = "border";
    ulist.append(li);
};
