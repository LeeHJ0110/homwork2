const divArr = document.querySelectorAll("main > div");

const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
const no = localStorage.getItem("selectedBoardNo");
const vo = boardVoList[no];

const {title, content, createdAt} = vo;

divArr[0].innerHTML = title;
divArr[1].innerHTML = content;
divArr[2].innerHTML = createdAt;

function deleteBoard(){
    
    if(!confirm("삭제하시겠습니까")){
        return;
    }
    boardVoList.splice(no, 1);
    localStorage.setItem("boardVoList", JSON.stringify(boardVoList));
    alert("삭제 완료");
    location.href="./board_list.html";
}