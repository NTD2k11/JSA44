let line1Element = document.getElementsByClassName("line1")
console.log(line1Element[1].innerText);
console.log(line1Element[2].innerText);

line1Element[1].style.backgroundColor = 'blue'
line1Element[2].style.backgroundColor = 'red'


// querySelector(value): lấy thẻ giống cách lấy trong css:
// value: tên id, tên class, tên thẻ, ...
 let classElement = document.querySelectorAll(".line1")
console.log(classElement);

let h1 = document.querySelectorAll("h1")
console.log(h1);


h1[0].style.fontStyle = "italic"
h1[0].style.fontStyle = "unset"
h1[1].style.fontStyle = "italic"