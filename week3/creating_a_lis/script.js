const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]

//creat random color, found code on stack overflow
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


//creating h1 tag and duplicate 10 times
for(i = 0; i < names.length; i++){
    let newH1 = document.createElement("h1");
    newH1.textContent = names[i];
    document.body.append(newH1);
    newH1.style.color = getRandomColor();
};



