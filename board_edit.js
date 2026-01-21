const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
const no = localStorage.getItem("selectedBoardNo");

function setInitialData(){
    const title = document.querySelector("input[type=text]");
    const content = document.querySelector("textarea[name=content]");
    
    const vo = boardVoList[no];
    title.value = vo.title;
    content.innerHTML = vo.content;
}
window.onload = function (){
    setInitialData();
}

function editBoard(){
    const vo = boardVoList[no];
    vo.title = document.querySelector("input[type=text]").value;
    vo.content = document.querySelector("textarea[name=content]").value;
    
    localStorage.setItem("boardVoList", JSON.stringify(boardVoList))
    alert("수정 완료");
    location.href = "./board_detail.html";
}