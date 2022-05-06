(()=>{"use strict";class e{constructor(e,t="div",s="",i="",r=!0){const o=document.createElement(t);o.className=s,o.innerHTML=i,this.node=o,r?e.append(o):e.prepend(o)}}const t=JSON.parse('[[{"code":"Backquote","type":"Symbol","shift":{"en":"~"},"default":{"en":"`","ru":"ё"}},{"code":"Digit1","type":"Symbol","shift":{"en":"!"},"default":{"en":"1"}},{"code":"Digit2","type":"Symbol","shift":{"en":"@","ru":"\\""},"default":{"en":"2"}},{"code":"Digit3","type":"Symbol","shift":{"en":"#","ru":"№"},"default":{"en":"3"}},{"code":"Digit4","type":"Symbol","shift":{"en":"$","ru":";"},"default":{"en":"4"}},{"code":"Digit5","type":"Symbol","shift":{"en":"%"},"default":{"en":"5"}},{"code":"Digit6","type":"Symbol","shift":{"en":"^","ru":":"},"default":{"en":"6"}},{"code":"Digit7","type":"Symbol","shift":{"en":"&","ru":"?"},"default":{"en":"7"}},{"code":"Digit8","type":"Symbol","shift":{"en":"*"},"default":{"en":"8"}},{"code":"Digit9","type":"Symbol","shift":{"en":"("},"default":{"en":"9"}},{"code":"Digit0","type":"Symbol","shift":{"en":")"},"default":{"en":"0"}},{"code":"Minus","type":"Symbol","shift":{"en":"_"},"default":{"en":"-"}},{"code":"Equal","type":"Symbol","shift":{"en":"+"},"default":{"en":"="}},{"code":"Backspace","type":"Function","default":"Backspace"}],[{"code":"Tab","type":"Function","default":"Tab"},{"code":"KeyQ","type":"Symbol","default":{"en":"q","ru":"й"}},{"code":"KeyW","type":"Symbol","default":{"en":"w","ru":"ц"}},{"code":"KeyE","type":"Symbol","default":{"en":"e","ru":"у"}},{"code":"KeyR","type":"Symbol","default":{"en":"r","ru":"к"}},{"code":"KeyT","type":"Symbol","default":{"en":"t","ru":"е"}},{"code":"KeyY","type":"Symbol","default":{"en":"y","ru":"н"}},{"code":"KeyU","type":"Symbol","default":{"en":"u","ru":"г"}},{"code":"KeyI","type":"Symbol","default":{"en":"i","ru":"ш"}},{"code":"KeyO","type":"Symbol","default":{"en":"o","ru":"щ"}},{"code":"KeyP","type":"Symbol","default":{"en":"p","ru":"з"}},{"code":"BracketLeft","type":"Symbol","shift":{"en":"{"},"default":{"en":"[","ru":"х"}},{"code":"BracketRight","type":"Symbol","shift":{"en":"}"},"default":{"en":"]","ru":"ъ"}},{"code":"Backslash","type":"Symbol","shift":{"en":"|","ru":"/"},"default":{"en":"\\\\","ru":"\\\\"}},{"code":"Delete","type":"Function","default":"Del"}],[{"code":"CapsLock","type":"Function","default":"CapsLock"},{"code":"KeyA","type":"Symbol","default":{"en":"a","ru":"ф"}},{"code":"KeyS","type":"Symbol","default":{"en":"s","ru":"ы"}},{"code":"KeyD","type":"Symbol","default":{"en":"d","ru":"в"}},{"code":"KeyF","type":"Symbol","default":{"en":"f","ru":"а"}},{"code":"KeyG","type":"Symbol","default":{"en":"g","ru":"п"}},{"code":"KeyH","type":"Symbol","default":{"en":"h","ru":"р"}},{"code":"KeyJ","type":"Symbol","default":{"en":"j","ru":"о"}},{"code":"KeyK","type":"Symbol","default":{"en":"k","ru":"л"}},{"code":"KeyL","type":"Symbol","default":{"en":"l","ru":"д"}},{"code":"Semicolon","type":"Symbol","shift":{"en":":"},"default":{"en":";","ru":"ж"}},{"code":"Quote","type":"Symbol","shift":{"en":"\\""},"default":{"en":"\'","ru":"э"}},{"code":"Enter","type":"Function","default":"Enter"}],[{"code":"ShiftLeft","type":"Function","default":"Shift"},{"code":"KeyZ","type":"Symbol","default":{"en":"z","ru":"я"}},{"code":"KeyX","type":"Symbol","default":{"en":"x","ru":"ч"}},{"code":"KeyC","type":"Symbol","default":{"en":"c","ru":"с"}},{"code":"KeyV","type":"Symbol","default":{"en":"v","ru":"м"}},{"code":"KeyB","type":"Symbol","default":{"en":"b","ru":"и"}},{"code":"KeyN","type":"Symbol","default":{"en":"n","ru":"т"}},{"code":"KeyM","type":"Symbol","default":{"en":"m","ru":"ь"}},{"code":"Comma","type":"Symbol","shift":{"en":"<"},"default":{"en":",","ru":"б"}},{"code":"Period","type":"Symbol","shift":{"en":">"},"default":{"en":".","ru":"ю"}},{"code":"Slash","type":"Symbol","shift":{"en":"?","ru":","},"default":{"en":"/","ru":"."}},{"code":"ArrowUp","type":"Function","default":"↑"},{"code":"ShiftRight","type":"Function","default":"Shift"}],[{"code":"ControlLeft","type":"Function","default":"Ctrl"},{"code":"MetaLeft","type":"Function","default":"Win"},{"code":"AltLeft","type":"Function","default":"Alt"},{"code":"Space","type":"Function","default":""},{"code":"AltRight","type":"Function","default":"Alt"},{"code":"ArrowLeft","type":"Function","default":"←"},{"code":"ArrowDown","type":"Function","default":"↓"},{"code":"ArrowRight","type":"Function","default":"→"},{"code":"ControlRight","type":"Function","default":"Ctrl"}]]');class s extends e{constructor(e,t,s){super(e,"div",t),this.code=s,this.onKey=()=>{},this.node.onmousedown=()=>{this.onKey()}}}class i extends s{constructor(e,t,s){super(e,"key",t),this.node.textContent=s,this.node.className=`${this.node.className} key_${s.toLowerCase()}`}}class r extends s{constructor(e,t,s,i,r){super(e,"key",t),this.defaultValue=s,this.shiftValue=i,this.lang=r,this.defaultValue[`${this.lang}`]?this.node.textContent=this.defaultValue[`${this.lang}`]:this.node.textContent=this.defaultValue.en}getSymbol(){return this.node.textContent}caps(e){this.isCaps=e,this.isCaps||this.isShift?this.node.textContent=this.node.textContent.toUpperCase():this.node.textContent=this.node.textContent.toLowerCase()}shift(e){this.isShift=e,this.isShift?this.shiftValue?this.shiftValue[`${this.lang}`]?this.node.textContent=this.shiftValue[`${this.lang}`].toUpperCase():this.defaultValue[`${this.lang}`]?this.node.textContent=this.defaultValue[`${this.lang}`].toUpperCase():this.node.textContent=this.shiftValue.en:this.defaultValue[`${this.lang}`]?this.node.textContent=this.defaultValue[`${this.lang}`].toUpperCase():this.node.textContent=this.defaultValue.en.toUpperCase():this.isCaps?this.defaultValue[`${this.lang}`]?this.node.textContent=this.defaultValue[`${this.lang}`].toUpperCase():this.node.textContent=this.defaultValue.en.toUpperCase():this.defaultValue[`${this.lang}`]?this.node.textContent=this.defaultValue[`${this.lang}`]:this.node.textContent=this.defaultValue.en}switchLang(e){this.lang=e,this.node.textContent=this.defaultValue[`${e}`]||this.defaultValue.en,this.isShift&&this.shift(this.isShift),this.isCaps&&this.caps(this.isCaps)}}class o extends e{constructor(t,s,i){super(t,"div",s);const r=new e(this.node,"div","keyboard");this.rows=[new e(r.node,"div","keyboard__row"),new e(r.node,"div","keyboard__row"),new e(r.node,"div","keyboard__row"),new e(r.node,"div","keyboard__row"),new e(r.node,"div","keyboard__row")],this.lang=i,this.renderKeyboard()}renderKeyboard(){this.keyList=[],t.forEach(((e,t)=>{e.forEach((e=>{"Symbol"===e.type?this.keyList.push(new r(this.rows[t].node,e.code,e.default,e.shift,this.lang)):this.keyList.push(new i(this.rows[t].node,e.code,e.default))}))})),this.onKeys()}onKeys(){this.keyList.forEach((e=>{const t=e;t.onKey=()=>{this.pressKey=t,this.isPress=!0}}))}setPressKey(e){this.pressKey=this.keyList.find((t=>t.code===e.code)),this.isPress=!0}getPressKey(){const e=this.isPress?this.pressKey:null;return this.isPress=!1,e}onCapsLock(e){this.keyList.forEach((t=>{t.caps&&t.caps(e)}))}onShift(e){this.keyList.forEach((t=>{t.shift&&t.shift(e)}))}onMark(e){e&&(this.markKey=this.keyList.find((t=>t.code===e.code))||null,this.markKey&&this.markKey.node.classList.add("mark"))}offMark(e){e&&(this.markKey=this.keyList.find((t=>t.code===e.code))||null,this.markKey&&this.markKey.node.classList.remove("mark"))}switchLang(e){this.keyList.forEach((t=>{t.switchLang&&t.switchLang(e)}))}resetKeyboard(){this.keyList.forEach((e=>{this.offMark(e)}))}}class h extends e{constructor(e,t){super(e,"textarea",t),this.node.value=""}getCursorData(){const e=this.node.selectionStart,t=this.node.selectionEnd;return{cursorStart:e,cursorEnd:t,beforeCursor:this.node.value.slice(0,e),afterCursor:this.node.value.slice(t)}}printSymbol(e){const{beforeCursor:t,afterCursor:s}=this.getCursorData();let{cursorStart:i}=this.getCursorData();this.node.value=t+e+s,i+=1,this.node.setSelectionRange(i,i)}backspace(){const{cursorEnd:e,beforeCursor:t,afterCursor:s}=this.getCursorData();let{cursorStart:i}=this.getCursorData();i===e?i>0&&(this.node.value=t.slice(0,t.length-1)+s,i-=1):this.node.value=t+s,this.node.setSelectionRange(i,i)}delete(){const{cursorStart:e,cursorEnd:t,beforeCursor:s,afterCursor:i}=this.getCursorData();this.node.value=e===t?s+i.slice(1):s+i,this.node.setSelectionRange(e,e)}tab(){const{beforeCursor:e,afterCursor:t}=this.getCursorData();let{cursorStart:s}=this.getCursorData();this.node.value=`${e}\t${t}`,s+=1,this.node.setSelectionRange(s,s)}space(){const{beforeCursor:e,afterCursor:t}=this.getCursorData();let{cursorStart:s}=this.getCursorData();this.node.value=`${e} ${t}`,s+=1,this.node.setSelectionRange(s,s)}enter(){const{beforeCursor:e,afterCursor:t}=this.getCursorData();let{cursorStart:s}=this.getCursorData();this.node.value=`${e}\n${t}`,s+=1,this.node.setSelectionRange(s,s)}arrowRight(){let{cursorStart:e}=this.getCursorData();e+=1,this.node.setSelectionRange(e,e)}arrowLeft(){let{cursorStart:e}=this.getCursorData();e>0&&(e-=1,this.node.setSelectionRange(e,e))}arrowUp(){const{beforeCursor:e,afterCursor:t}=this.getCursorData();let{cursorStart:s}=this.getCursorData();this.node.value=`${e}↑${t}`,s+=1,this.node.setSelectionRange(s,s)}arrowDown(){const{beforeCursor:e,afterCursor:t}=this.getCursorData();let{cursorStart:s}=this.getCursorData();this.node.value=`${e}↓${t}`,s+=1,this.node.setSelectionRange(s,s)}select(e){let{cursorStart:t,cursorEnd:s}=this.getCursorData();s===t&&(this.selectDirection=e),this.selectDirection===e?e?(s+=1,this.node.setSelectionRange(t,s)):t>0&&(t-=1,this.node.setSelectionRange(t,s)):s>t&&(e?(t+=1,this.node.setSelectionRange(t,s)):(s-=1,this.node.setSelectionRange(t,s)))}selectAll(){this.node.select()}copy(){const{cursorStart:e,cursorEnd:t}=this.getCursorData();if(e===t)return null;const{value:s}=this.node;return s.slice(e,t)}cut(){const{cursorStart:e}=this.getCursorData(),{cursorEnd:t,beforeCursor:s,afterCursor:i}=this.getCursorData();if(e===t)return null;const{value:r}=this.node,o=r.slice(e,t);return this.node.value=s+i,this.node.setSelectionRange(e,e),o}paste(e){const{beforeCursor:t,afterCursor:s}=this.getCursorData();let{cursorStart:i}=this.getCursorData();e&&(this.node.value=t+e+s,i+=e.length,this.node.setSelectionRange(i,i))}}new class extends e{constructor(e){super(e,"div","app"),this.node.setAttribute("tabindex","1"),this.isCaps=!1,this.isShift=!1,this.isCtrl=!1,this.isAlt=!1,this.pressedKeys=new Set}getLang(){localStorage.getItem("lang")?this.lang=localStorage.getItem("lang"):this.lang="en",this.renderKeyboard()}renderKeyboard(){const t=new e(this.node,"div","container");this.title=new e(t.node,"h1","title"),"en"===this.lang?this.title.node.textContent="RSS Virtual Keyboard":this.title.node.textContent="RSS Виртуальная клавиатура",this.textArea=new h(t.node,"textarea"),this.keyboard=new o(t.node,"keyboard-wrap",this.lang),new e(t.node,"h4","subtitle").node.textContent="OS Linux, switch lang: ctrl+alt",this.node.focus(),window.onblur=()=>{this.resetKeyboard()},this.node.onkeydown=e=>{this.keyboard.setPressKey(e),this.handlePressEvent(e)},this.node.onkeyup=e=>{let t;if(this.pressedKeys.forEach((s=>{s.code===e.code&&(t=s,this.pressedKeys.delete(s))})),!e.code.match(/Caps/))return e.code.match(/Shift/)?(this.isShift=!1,this.keyboard.offMark(t),this.pressedKeys.forEach((e=>{e.code.match(/Shift/)&&(this.isShift=!0)})),void(this.isShift||this.keyboard.onShift(this.isShift))):e.code.match(/Control/)?(this.isCtrl=!1,this.keyboard.offMark(t),void this.pressedKeys.forEach((e=>{e.code.match(/Control/)&&(this.isCtrl=!0)}))):e.code.match(/Alt/)?(this.isAlt=!1,this.keyboard.offMark(t),void this.pressedKeys.forEach((e=>{e.code.match(/Alt/)&&(this.isAlt=!0)}))):void(t&&this.keyboard.offMark(t))},this.node.onmousedown=e=>{this.handlePressEvent(e)},window.onmouseup=()=>{if(this.pressKey){if(this.pressKey.code.match(/Shift/))return;if(this.pressKey.code.match(/Caps/))return;if(this.pressKey.code.match(/Control/))return;if(this.pressKey.code.match(/Alt/))return;this.pressedKeys.delete(this.pressKey),this.textArea.node.focus(),this.keyboard.offMark(this.pressKey)}}}handlePressEvent(e){if(this.pressKey=this.keyboard.getPressKey(),this.pressKey){if(e.preventDefault(),this.pressKey.code.match(/Shift/))return void this.shift();if(this.pressKey.code.match(/Control/))return void this.ctrl();if(this.pressKey.code.match(/Alt/))return void(this.alt()&&this.checkCombs(e));if(this.pressKey.code.match(/Caps/))return void this.caps();if(this.checkCombs(e))return;this.pressKey.getSymbol&&this.symbol(),this.pressKey.code.match(/Backspace/)&&this.backspace(),this.pressKey.code.match(/Delete/)&&this.delete(),this.pressKey.code.match(/Tab/)&&this.tab(),this.pressKey.code.match(/Enter/)&&this.enter(),this.pressKey.code.match(/Space/)&&this.space(),this.pressKey.code.match(/Arrow/)&&this.arrow(),this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey)}}handleUnpressEvent(e){e.type.match(/mouse/)&&(this.pressedKeys.delete(this.pressKey),setTimeout((()=>{this.keyboard.offMark(this.pressKey)}),100))}checkCombs(e){if(this.isCtrl){if(this.pressKey.code.match(/Alt/))return this.switchLang(),this.rename(),this.handleUnpressEvent(e),!0;if(this.pressKey.code.match(/KeyA/))return this.textArea.node.focus(),this.textArea.selectAll(),this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey),this.handleUnpressEvent(e),!0;if(this.pressKey.code.match(/KeyC/))return this.buffer=this.textArea.copy(),this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey),this.handleUnpressEvent(e),!0;if(this.pressKey.code.match(/KeyX/))return this.textArea.node.focus(),this.buffer=this.textArea.cut(),this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey),this.handleUnpressEvent(e),!0;if(this.pressKey.code.match(/KeyV/))return this.textArea.paste(this.buffer),this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey),this.handleUnpressEvent(e),!0}return!1}shift(){this.isShift?this.pressedKeys.has(this.pressKey)?(this.pressedKeys.delete(this.pressKey),this.keyboard.offMark(this.pressKey),this.isShift=!1,this.pressedKeys.forEach((e=>{e.code.match(/Shift/)&&(this.isShift=!0)})),this.isShift||this.keyboard.onShift(this.isShift)):(this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey)):(this.isShift=!this.isShift,this.pressedKeys.add(this.pressKey),this.keyboard.onShift(this.isShift),this.keyboard.onMark(this.pressKey))}ctrl(){this.isCtrl?this.pressedKeys.has(this.pressKey)?(this.pressedKeys.delete(this.pressKey),this.keyboard.offMark(this.pressKey),this.isCtrl=!1,this.pressedKeys.forEach((e=>{e.code.match(/Control/)&&(this.isCtrl=!0)}))):(this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey)):(this.isCtrl=!this.isCtrl,this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey))}alt(){if(this.isAlt){if(this.pressedKeys.has(this.pressKey))return this.pressedKeys.delete(this.pressKey),this.keyboard.offMark(this.pressKey),this.isAlt=!1,this.pressedKeys.forEach((e=>{e.code.match(/Alt/)&&(this.isAlt=!0)})),!1;this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey)}else this.isAlt=!this.isAlt,this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey);return!0}caps(){this.isCaps?(this.pressedKeys.delete(this.pressKey),this.keyboard.offMark(this.pressKey)):(this.pressedKeys.add(this.pressKey),this.keyboard.onMark(this.pressKey)),this.isCaps=!this.isCaps,this.keyboard.onCapsLock(this.isCaps)}symbol(){const e=this.pressKey.getSymbol();this.textArea.printSymbol(e)}backspace(){this.textArea.backspace()}delete(){this.textArea.delete()}tab(){this.textArea.tab()}space(){this.textArea.space()}enter(){this.textArea.enter()}arrow(){this.pressKey.code.match(/Right/)?this.isShift?(this.isRightDirection=!0,this.textArea.select(this.isRightDirection)):this.textArea.arrowRight():this.pressKey.code.match(/Left/)?this.isShift?(this.isRightDirection=!1,this.textArea.select(this.isRightDirection)):this.textArea.arrowLeft():this.pressKey.code.match(/Up/)?this.textArea.arrowUp():this.pressKey.code.match(/Down/)&&this.textArea.arrowDown()}switchLang(){"en"===this.lang?this.lang="ru":this.lang="en",localStorage.setItem("lang",this.lang),this.keyboard.switchLang(this.lang)}rename(){"en"===this.lang?this.title.node.textContent="RSS Virtual Keyboard":this.title.node.textContent="RSS Виртуальная клавиатура"}resetKeyboard(){this.resetKeys({isAlt:this.isAlt,isShift:this.isShift,isCtrl:this.isCtrl}),this.keyboard.resetKeyboard()}resetKeys(){this.pressedKeys.forEach((e=>{this.pressedKeys.delete(e)})),this.isAlt&&(this.isAlt=!1),this.isShift&&(this.isShift=!1,this.keyboard.onShift(this.isShift)),this.isCaps&&(this.isCaps=!1,this.keyboard.onCapsLock(this.isShift)),this.isCtrl&&(this.isCtrl=!1)}}(document.body).getLang()})();
//# sourceMappingURL=main.js.map