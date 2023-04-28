//Fonts connection

let hrefArray = ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"];
let relArray = ["preconnect", "preconnect", "stylesheet"];

for (let i = 0; i < relArray.length && i < hrefArray.length; i++) {
  let linkElement = document.createElement("link")
  linkElement.rel = relArray[i];
  linkElement.href = hrefArray[i];
  document.head.appendChild(linkElement);
}

//Keyboard main

let wrapper = document.createElement("div");
let textArea = document.createElement("textarea");
let mainContainer = document.createElement("div");
let keys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt",  "◀", "▼", "▶", "Ctrl"]

mainContainer.classList.add("keyboard-container");
textArea.classList.add("textarea");
wrapper.classList.add("wrapper");


document.body.appendChild(wrapper);
wrapper.appendChild(textArea);
wrapper.appendChild(mainContainer);

//iterationg over an array

keys.forEach(singleKey => {
  let key = document.createElement("div");
  let keyText = document.createTextNode(singleKey)
  mainContainer.appendChild(key);
  key.appendChild(keyText);
  key.classList.add("key")

  if (key === "Backspace" || key === "Tab" || key === "Del" || key === "Enter" || key === "CapsLock" || key === "Enter" || key === "Shift" || key === "Ctrl" || key === "▶" || key === "◀" || key === "▼" || key === "▲") {
    
  }

  switch (key) {
    case "Backspace": key.id("backspace");
    break;
    case "Tab": key.id("tab");
    break;
    case "CapsLock": key.id("caps-lock");
    break;
    case "Shift": key.id("shift");
    break;
  }
})

//Keys
// let delKeyText = "Del"
// let delKey = document.querySelector(`.key[data-value="Del"]`);
// delKey.id = "delKey"




