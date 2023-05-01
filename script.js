// Fonts connection

const hrefArray = ['https://fonts.googleapis.com', 'https://fonts.gstatic.com', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'];
const relArray = ['preconnect', 'preconnect', 'stylesheet'];

for (let i = 0; i < relArray.length && i < hrefArray.length; i=i+1) {
  const linkElement = document.createElement('link');
  linkElement.rel = relArray[i];
  linkElement.href = hrefArray[i];
  document.head.appendChild(linkElement);
}

// Keyboard main

const wrapper = document.createElement('div');
const textArea = document.createElement('textarea');
const mainContainer = document.createElement('div');
let keysEngLower = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const keysEngShifted = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const keysRusLower = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const keysRusShifted = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
let layout = 'en';
let currentLang = 'en';
let keys;

// Implement shift for eng keys

let isShiftPressed = false;
let isRussianLang = false;
let isKeyPressed = false;

mainContainer.classList.add('keyboard-container');
textArea.classList.add('textarea');
textArea.setAttribute('autofocus', 'autofocus');
wrapper.classList.add('wrapper');

document.body.appendChild(wrapper);
wrapper.appendChild(textArea);
wrapper.appendChild(mainContainer);



const updateLayout = () => {

  if (isShiftPressed && isRussianLang) {
    keys = keysRusShifted;
  } else if (!isShiftPressed && isRussianLang) {
    keys = keysRusLower;
  } else if (isShiftPressed && !isRussianLang) {
    keys = keysEngShifted;
  } else {
    keys = keysEngLower
  }

  console.log(isShiftPressed)

  mainContainer.innerHTML = '';

  keys.forEach((singleKey) => {
    // console.log("one more time")
    const key = document.createElement('button');
    const keyText = document.createTextNode(singleKey);
    mainContainer.appendChild(key);
    key.appendChild(keyText);
    key.classList.add('key');
    key.dataset.key = singleKey;

    switch (keyText.nodeValue) {
      case 'Backspace': key.id = 'backspace';
        break;
      case 'Tab': key.id = 'tab';
        break;
      case 'CapsLock': key.id = 'caps-lock';
        break;
      case 'Shift': key.id = 'shift';
        key.addEventListener('click', () => {
          isShiftPressed = !isShiftPressed;
          updateLayout(layout);
        });
        break;
      case 'Del': key.id = 'del';
      key.dataset.key = "Delete";
        break;
      case '\\': key.dataset.key = "\\";
        break;
      case '▲': 
      key.dataset.key = "ArrowUp";
        break;
      case '▼': 
      key.dataset.key = "ArrowDown";
        break;
      case '◀': 
      key.dataset.key = "ArrowLeft";
        break;
      case '▶': 
      key.dataset.key = "ArrowRight";
        break;    
      case 'Enter': key.id = 'enter';
        break;
      case ' ': key.id = 'space';
      key.dataset.key = " "; 
        break; 
      case 'Ctrl': 
      key.dataset.key = "ControlLeft";
        break;
      case 'Win': 
      key.dataset.key = "Meta";
        break;
        default:
          break;
    }

    if (singleKey === 'Backspace' || singleKey === 'Tab' || singleKey === 'Del' || singleKey === 'Enter' || singleKey === 'CapsLock' || singleKey === 'Enter' || singleKey === 'Shift' || singleKey === 'Ctrl' || singleKey === '▶' || singleKey === '◀' || singleKey === '▼' || singleKey === '▲' || singleKey === 'Win' || singleKey === 'Alt') {
      key.classList.add('key-dark');
    }
  });
};

updateLayout();

// pressing buttons on virtual keyboard

const allButtons = document.querySelectorAll('button');
let cursorPos = 0;

const addSymbolToTextArea = (event) => {
  console.log(event)
  cursorPos = textArea.selectionStart;
  textArea.focus();

  switch (event.target.innerHTML) {
    case 'Backspace':
      textArea.value = textArea.value.slice(0, cursorPos - 1) + textArea.value.slice(cursorPos);
      textArea.selectionStart = cursorPos - 1;
      textArea.selectionEnd = cursorPos - 1;
      break;
    case 'Tab':
      event.preventDefault();
      textArea.value = `${textArea.value.slice(0, cursorPos)}\t${textArea.value.slice(cursorPos)}`;
      textArea.selectionStart = cursorPos + 1;
      textArea.selectionEnd = cursorPos + 1;
      break;
    // case 'CapsLock':
    //   event.getModifierState('CapsLock') = true;
    //   break;
    case 'Shift':
      break;
    case 'Del':
      textArea.value = textArea.value.slice(0, cursorPos) + textArea.value.slice(cursorPos + 1);
      textArea.selectionStart = cursorPos;
      textArea.selectionEnd = cursorPos;
      break;
    case 'Enter':
      event.preventDefault();
      textArea.value = `${textArea.value.slice(0, cursorPos)}\n${textArea.value.slice(cursorPos)}`;
      textArea.selectionStart = cursorPos + 1;
      textArea.selectionEnd = cursorPos + 1;
      break;
    case " ":
    event.preventDefault();
    textArea.value = textArea.value.slice(0, cursorPos) + " " + textArea.value.slice(cursorPos);
    textArea.selectionStart = cursorPos+1;
    textArea.selectionEnd = cursorPos+1;
    break;
    // case '▲': 
    // key.dataset.key = "ArrowUp";
    //   break;
    // case '▼': 
    // key.dataset.key = "ArrowDown";
    //   break;
    case '◀': 
    textArea.selectionStart = cursorPos-1;
    textArea.selectionEnd = cursorPos-1;
      break;
    case '▶': 
    textArea.selectionStart = cursorPos+1;
    textArea.selectionEnd = cursorPos+1;
      break;    
    case 'Ctrl':
      break;
    case 'Win':
      break;
    case 'Alt':
      event.preventDefault();
      break;
    default:
      textArea.value += event.target.innerText;
  }
};

//CapsLock

const capsLockButton = document.querySelector('.key[data-key="CapsLock"]');
capsLockButton.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 20}));
capsLockButton.dispatchEvent(new KeyboardEvent('keyup', {keyCode: 20}));

for (let i = 0; i < allButtons.length; i=i+1) {
  allButtons[i].addEventListener('click', addSymbolToTextArea);
}

// listeners for TextArea
textArea.addEventListener('input', () => {
  cursorPos = textArea.selectionStart;
});
textArea.addEventListener('click', () => {
  cursorPos = textArea.selectionStart;
});
textArea.addEventListener('keydown', (e) => {
  cursorPos = textArea.selectionStart;

  if (e.key === 'Tab') {
    e.preventDefault();
    textArea.value = `${textArea.value.slice(0, cursorPos)}\t${textArea.value.slice(cursorPos)}`;
    textArea.selectionStart = cursorPos + 1;
    textArea.selectionEnd = cursorPos + 1;
  } if (e.code === 'Space') {
    e.preventDefault();
    textArea.value = `${textArea.value.slice(0, cursorPos)} ${textArea.value.slice(cursorPos)}`;
    textArea.selectionStart = cursorPos + 1;
    textArea.selectionEnd = cursorPos + 1;
  }
});

// virtual keyboard button highlight when pressing on keyboard
document.addEventListener('keydown', (event) => {
  console.log(event)
  const keyCode = event.key;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  console.log(event.key, key.dataset.key, key);
  if (event.key === key.dataset.key || event.code === key.dataset.key) {
    key.classList.toggle('active');
  }
});
document.addEventListener('keyup', (event) => {
  const keyCode = event.key;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (event.key === key.dataset.key && event.key !== "CapsLock") {
    key.classList.toggle('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    isRussianLang = currentLang === 'ru';
    updateLayout(isRussianLang);
  } else if (event.key === 'Shift') {
    isShiftPressed = true;
    for (let i = 0; i < keys.length; i = i + 1) {
      allButtons[i].innerText = isRussianLang ? keysRusShifted[i] : keysEngShifted[i];
    }
    updateLayout(isShiftPressed);
  } else if (event.getModifierState('CapsLock')) {
    for (let i = 0; i < keys.length; i = i + 1) {
      allButtons[i].innerText = isRussianLang ? keysRusShifted[i] : keysEngShifted[i];
    }
    updateLayout();
  } else if (isRussianLang) {
    event.preventDefault();
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    isShiftPressed = false;
    for (let i = 0; i < keys.length; i = i + 1) {
      allButtons[i].innerText = isRussianLang ? keysRusLower[i] : keysEngLower[i];
    }
    updateLayout(isShiftPressed);
  } else if (event.key === 'CapsLock') {
    isShiftPressed = false;
    for (let i = 0; i < keys.length; i = i + 1) {
      allButtons[i].innerText = isRussianLang ? keysRusLower[i] : keysEngLower[i];
    }
  }
});

// TODO
/*
Virtual keyboard:
// - fix TAB button (1 tab except 4 spaces)
- fix CapsLock button
  // 1.fix highlighting physical button
  1.fix highlighting virtual button
  2.fix functional for VB
- fix left/right Shift
- functional of left/right Ctrl???
- functional of Win???
- functional of left/right Alt???
- fix Space button

Physical keyboard:
- fix \ button (Uncaught TypeError)
- fix functional CapsLock button
- fix Right Shift
- fix arrows(function and highlights)
- fix left/right Ctrl
- fix of Win
- fix highlights for right Alt

// Additional:
// -fix remove darkstyle from buttons (css property?)
*/
