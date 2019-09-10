var pos = 0;
 var speed = 100;
 var str = document.getElementById('element').textContent;

 document.getElementById('element').innerText = '';

function type() {
 if (pos < str.length) {
  document.getElementById('element').textContent += str.charAt(pos);
  pos++;
  setTimeout(type, speed);
 } else {
  setTimeout(erase, speed);
 }
}

setTimeout(type, speed);

function erase() {
  if(pos >= 0) {
    var temp = str.substring(0, pos);
    document.getElementById('element').textContent = temp;
    pos--;
    setTimeout(erase, speed);
  } else {
    setTimeout(type, speed);
  }
}