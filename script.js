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
let key;
let cursorPos;
let ourSpace = document.getElementById("space")

// Code for moving cursor in textarea

// let cursorPos = textArea.selectionStart;
// let cursorPos1 = textArea.selectionEnd;


mainContainer.classList.add("keyboard-container");
textArea.classList.add("textarea");
wrapper.classList.add("wrapper");


document.body.appendChild(wrapper);
wrapper.appendChild(textArea);
wrapper.appendChild(mainContainer);

//iterationg over an array

keys.forEach(singleKey => {
  key = document.createElement("button");
  let keyText = document.createTextNode(singleKey)
  mainContainer.appendChild(key);
  key.appendChild(keyText);
  key.classList.add("key")

  switch (keyText.nodeValue) {
    case "Backspace": key.id = "backspace";
    break;
    case "Tab": key.id = "tab";
    break;
    case "CapsLock": key.id = "caps-lock";
    break;
    case "Shift": key.id = "shift";
    break;
    case "Del": key.id = "del";
    break;
    case "Enter": key.id = "enter";
    break;
    case " ": key.id = "space";
    break;
    case "Ctrl": key.id = "ctrl";
    break;
  }

  if (singleKey === "Backspace" || singleKey === "Tab" || singleKey === "Del" || singleKey === "Enter" || singleKey === "CapsLock" || singleKey === "Enter" || singleKey === "Shift" || singleKey === "Ctrl" || singleKey === "▶" || singleKey === "◀" || singleKey === "▼" || singleKey === "▲" || singleKey === "Win"|| singleKey === "Alt") {
    key.classList.add("key-dark")
  }
})

//pressing buttons on virtual keyboard

let allButtons = document.querySelectorAll('button');

let addSymbolToTextArea = (event) => {
  cursorPos = textArea.selectionStart;
  console.log(cursorPos)
  textArea.focus();

  switch (event.target.innerText) {
    case "Backspace": 
    textArea.value = textArea.value.slice(0, cursorPos-1) + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos - 1;
    textArea.selectionEnd = cursorPos - 1;
    break;  
    case "Tab":
      textArea.value = textArea.value.slice(0, cursorPos) + "    " + textArea.value.slice(cursorPos);
      textArea.selectionStart = cursorPos + 4;
      textArea.selectionEnd = cursorPos + 4;
    break;
    case "CapsLock":
    break;
    case "Shift":
    break;
    case "Del": 
    textArea.value = textArea.value.slice(0, cursorPos) + textArea.value.slice(cursorPos+1);
    textArea.selectionStart = cursorPos ;
    textArea.selectionEnd = cursorPos ;
    break;  
    case "Enter":
    textArea.value = textArea.value.slice(0, cursorPos) + "\n" + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos + 1;
    textArea.selectionEnd = cursorPos + 1;
    break;
    case "Ctrl":
    break;
    case "Win":
    break;
    case "Alt":
    break;
    default:
    textArea.value += event.target.innerText
  }

}

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", addSymbolToTextArea);
}

// listeners for TextArea

textArea.addEventListener("input", ()=> {
  cursorPos = textArea.selectionStart;
});
textArea.addEventListener("click", ()=> {
  cursorPos = textArea.selectionStart;
});
textArea.addEventListener("keydown", (e)=> {
  cursorPos = textArea.selectionStart;
  
  if (e.key === "Tab") {
    e.preventDefault();
    textArea.value = textArea.value.slice(0, cursorPos) + "    " + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos + 4;
    textArea.selectionEnd = cursorPos + 4;
  } if(e.key === " ") {
    
    textArea.value = textArea.value.slice(0, cursorPos) + " " + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos+1;
    textArea.selectionEnd = cursorPos+1;
  }
});
