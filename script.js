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
let keys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt",  "◀", "▼", "▶", "Ctrl"]
let keysEngShifted = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◀", "▼", "▶", "Ctrl"];
let keysRusLower = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◀", "▼", "▶", "Ctrl"];
let keysRusShifted = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "◀", "▼", "▶", "Ctrl"];
let layout = "en"
let currentLang = "en"

//Implement shift for eng keys

let isShiftPressed = false;
let isRussianLang = false;


mainContainer.classList.add("keyboard-container");
textArea.classList.add("textarea");
wrapper.classList.add("wrapper");


document.body.appendChild(wrapper);
wrapper.appendChild(textArea);
wrapper.appendChild(mainContainer);





  if (isShiftPressed && isRussianLang) {
    layout = "ru-shift";
  } else if (!isShiftPressed && isRussianLang) {
    layout = "ru";
  } else if (isShiftPressed && !isRussianLang) {
    layout = "eng-shift";
  } else {
    layout = "en";
  }
  
const updateLayout = (layout) => {
  console.log(layout)
  switch(layout) {
    case "eng-shift": keys = keysEngShifted;
    break;
    case "ru": keys = keysRusLower;
    break;
    case "ru-shift": keys = keysRusShifted;
    break;
  }
    
  mainContainer.innerHTML = "";

  keys.forEach(singleKey => {
    //console.log("one more time")
    let key = document.createElement("button");
    let keyText = document.createTextNode(singleKey)
    mainContainer.appendChild(key);
    key.appendChild(keyText);
    key.classList.add("key");
    key.dataset.key = singleKey;
  
    switch (keyText.nodeValue) {
      case "Backspace": key.id = "backspace";
      break;
      case "Tab": key.id = "tab";
      break;
      case "CapsLock": key.id = "caps-lock";
      break;
      case "Shift": key.id = "shift";
      key.addEventListener("click", () => {
        isShiftPressed = !isShiftPressed;
        updateLayout(layout);
      });
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
}

updateLayout();

// let want = document.querySelector('.key[data-key="Shift"]')
// want.addEventListener("click",updateLayout)



//pressing buttons on virtual keyboard

let allButtons = document.querySelectorAll('button');

let addSymbolToTextArea = (event) => {
  let cursorPos = textArea.selectionStart;
  textArea.focus();

  switch (event.target.innerText) {
    case "Backspace": 
    textArea.value = textArea.value.slice(0, cursorPos-1) + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos - 1;
    textArea.selectionEnd = cursorPos - 1;
    break;  
    case "Tab":
      event.preventDefault();
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
    event.preventDefault();
    textArea.value = textArea.value.slice(0, cursorPos) + "\n" + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos + 1;
    textArea.selectionEnd = cursorPos + 1;
    break;
    // case " ":
    // event.preventDefault();
    // textArea.value = textArea.value.slice(0, cursorPos) + " " + textArea.value.slice(cursorPos);
    // textArea.selectionStart = cursorPos+1;
    // textArea.selectionEnd = cursorPos+1;
    // break;
    case "Ctrl":
    break;
    case "Win":
    break;
    case "Alt":
    event.preventDefault();
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

//virtual keyboard button highlight when pressing on keyboard
document.addEventListener("keydown", (event) => {
  
  const keyCode = event.key;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  console.log(event.key, key.dataset.key, key)
  if (event.key === key.dataset.key) {
    key.classList.toggle("active")
    key.classList.remove("key-dark")
  }
});
document.addEventListener("keyup", (event) => {
  const keyCode = event.key;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (event.key === key.dataset.key) {
    key.classList.toggle("active")
  }
});


document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey) {
    currentLang = currentLang === "en" ? "ru" : "en";
    isRussianLang = currentLang === "ru";
  }
})  


document.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    isShiftPressed = true;
    for(let i = 0; i < keys.length; i++) {
      allButtons[i].innerText = isRussianLang ? keysRusShifted[i] : keysEngShifted[i];
    }
  } else if (isRussianLang) {
    event.preventDefault();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Shift") {
    isShiftPressed = false;
    for(let i = 0; i < keys.length; i++) {
      allButtons[i].innerText = isRussianLang ? keysRusLower[i] : keys[i];
    }
  }
});

