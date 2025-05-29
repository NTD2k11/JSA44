ModleElement.style.display = "flex";
ModleElement.style.justifyContent = "center";
ModleElement.style.alignItems = "center";

let panel = document.createElement("div");
panel.innerHTML = "<b>Nguyễn Tấn Đạt</b>"
panel.style.position = "fixed";
panel.style.top = "0"
panel.style.left = "-250px"
panel.style.width = "200px"
panel.style.height = "100%"
panel.style.transition = "left 0.3s ease";
panel.style.backgroundColor = "gray"
panel.style.boxShadow = " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
document.body.appendChild(panel)

let close = false;

document.querySelector(".modle").onclick = function () {
    if (!close) {
        panel.style.left = "0"
    }else{
        panel.style.left = "-250px"
    }
    close = !close;
};

// document.querySelector(".modle").onclick = function(){
//     if(!close) {
//         ModleElement.style.left = "250px"
//     }else{
//         ModleElement.style.left = "0px"
//     }
//     close = !close;
// }