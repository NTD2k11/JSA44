// Bước gọi tên Function: tên()
function printMyName(){
    console.log('my name í d');

}
// Gọi tên:
// printMyName();


let changeNameElement = document.querySelector("#text_color")
function changeName(){
    if (changeNameElement.style.color === "red"){
        changeNameElement.style.color = 'black'
    }else{
        changeNameElement.style.color = "red"
    }
} 
