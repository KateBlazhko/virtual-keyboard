import { PageElement } from "./pageElement";
import { Keybord } from "./keyboard";

export class Application extends PageElement{
  constructor(parent) {
    super(parent, 'div', 'app')
    const container = new PageElement(this.node, 'div', 'container');
    const title = new PageElement(container.node, 'h1', 'title', 'RSS Виртуальная клавиатура');
    this.textArea = new PageElement(container.node, 'textarea', 'textarea');
    this.textArea.node.value = '';
    this.lang = 'en';
    this.keyboard = new Keybord(container.node, 'keyboard-wrap', this.lang);
    this.isCaps = false;
    this.isShift = false;
    this.isCtrl = false;
    this.isAlt = false;

    this.node.setAttribute('tabindex', '1');

    this.node.onkeydown = (e) => {
      if (e.code.match(/Caps/)) {
        this.caps()
      }

      if (e.code.match(/Shift/)) {
        this.shift()
      }

      if (e.code.match(/Control/)) {
        this.isCtrl = true

        if (this.isAlt) {
          this.keyboard.switchLang()
        }
      }

      if (e.code.match(/Alt/)) {
        this.isAlt = true

        if (this.isCtrl) {
          this.keyboard.switchLang()
        }

      }

      this.keyboard.onMark(e);
      this.textArea.node.focus();

    }

    this.node.onkeyup = (e) => {
      if (e.code !== 'CapsLock') {

        if (e.code.match(/Shift/)) {
          this.shift()
        }

        if (e.code.match(/Control/)) {
          this.isCtrl = false
        }
  
        if (e.code.match(/Alt/)) {
          this.isAlt = false
        }

        this.keyboard.offMark(e);
      }
    }

    this.node.onmousedown = () => {
      this.textArea.node.focus();
      this.pressKey = this.keyboard.getPressKey();
      this.keyboard.isPress = false

      if (this.pressKey) {

        if (this.pressKey.getSymbol) {
          let symbol = this.pressKey.getSymbol();
          this.printSymbol(symbol);
  
        } else {
          this.defineFunction(this.pressKey);
        }

      } 
    }

    this.node.onmouseup = () => {
      this.textArea.node.focus();

      if (this.pressKey) {
        if (this.pressKey.code.match(/Shift/)) {
          this.shift()
        }
      }
    }
    
  } 

  getCursorPosition() {
    let cursorPosition = this.textArea.node.selectionStart;
    let beforeCursor = this.textArea.node.value.slice(0, cursorPosition);
    let afterCursor = this.textArea.node.value.slice(cursorPosition);
    return {
      cursorPosition,
      beforeCursor,
      afterCursor,
    }
  }

  defineFunction(pressKey) {
    
    let code = pressKey.code

    switch (code) {
      case 'Backspace':
        this.backspace()
        break;

      case 'CapsLock':
        this.caps()
        break;

      case 'Delete':
        this.delete()
        break;

      case 'Tab':
        this.tab()
        break;

      case 'Space':
        this.space()
        break;

      case 'Enter':
        this.enter()
        break;

      case 'ShiftRight':
        this.shift()
        break;

      case 'ShiftLeft':
        this.shift()
        break;
    }

  }

  printSymbol(symbol) {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + symbol + afterCursor;
    cursorPosition += 1
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
  }

  backspace() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();
    
    if (cursorPosition > 0) {
      this.textArea.node.value = beforeCursor.slice(0, beforeCursor.length - 1) + afterCursor;
      cursorPosition -= 1;
      this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
    }

  }

  caps() {
    this.isCaps = !this.isCaps;
    this.keyboard.onCapsLock(this.isCaps);
  }

  delete() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + afterCursor.slice(1);
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition)
  }

  tab() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + '\t' + afterCursor;
    cursorPosition += 1
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  space() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + ' ' + afterCursor;
    cursorPosition += 1
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  enter() {
    let {cursorPosition, beforeCursor, afterCursor} = this.getCursorPosition();

    this.textArea.node.value = beforeCursor + '\n' + afterCursor;
    cursorPosition += 1
    this.textArea.node.setSelectionRange(cursorPosition, cursorPosition);
  }

  shift() {
    this.isShift = !this.isShift;
    this.keyboard.onShift(this.isShift);
  }
}