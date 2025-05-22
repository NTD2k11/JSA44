let contentElement = document.getElementById('content')
console.log(contentElement);

let firstNameElement = document.getElementById('a')
console.log(firstNameElement);

/**
 * Có 3 cách để thay đổi 1 nội dung của 1 thẻ:
 * innerText
 * innerHtml
 * textcontent
 */

contentElement.style.borderRadius = "50px"
contentElement.style.width = "100px"
contentElement.style.height = "100px"
contentElement.style.backgroundColor = 'pink'
contentElement.style.display = 'flex'
contentElement.style.justifyContent = 'center'
contentElement.style.alignItems = 'center'


firstNameElement.innerText = 'đạt '
firstNameElement.style.backgroundColor = 'gray'

// thêm 1 thẻ bất kì vào trong html
let newdiv = document.createElement("div")
newdiv.innerText = 'this is new div'