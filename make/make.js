let checkCnt = 0;

function countCheck(checkTag){
    if(checkTag.checked){
        checkCnt++;
    }else{
        checkCnt--;
    }
    
    console.log(checkCnt);
    
    if (checkCnt > 2) {
        checkTag.checked = false;
        checkCnt--;
        alert("타입은 최대 2개");
    }

}

function insertBoard() {
    const name = document.querySelector("input[name=name]").value.trim();
    const chara = document.querySelector("input[name=chara]").value.trim();

    const checkedTypes = [];
    const checkedboxs = document.querySelectorAll("input[name=check]:checked");
    for(checked of checkedboxs){
        checkedTypes.push(checked.value);
    }

    if (!name || !chara || checkedTypes.length === 0) {
        alert("모든 값을 입력해주세요.");
        return;
    }

    const vo = {
        name: name,
        chara: chara,
        type: checkedTypes
    };

    let boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    if (!boardVoList) {
        boardVoList = [];
    }

    const selectedPoNo = localStorage.getItem("selectedPoNo");

    if (selectedPoNo === null || selectedPoNo < 0) {
        // 새로 만들기
        boardVoList.push(vo);
    } else {
        // 수정
        boardVoList[selectedPoNo] = vo;
    }
    localStorage.setItem("boardVoList", JSON.stringify(boardVoList));
    

    location.href = "../list/list.html";
}

function loadEditData(no) {
    const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    const vo = boardVoList[no];

    document.querySelector("input[name=name]").value = vo.name;
    document.querySelector("input[name=chara]").value = vo.chara;

    const checkboxes = document.querySelectorAll("input[name=check]");
    for(box of checkboxes){
        box.checked = vo.type.includes(box.value);
        if(box.checked) checkCnt++;
    }

}

window.onload = function () {
    const selectedPoNo = localStorage.getItem("selectedPoNo");

    if (selectedPoNo !== null) {
        loadEditData(selectedPoNo);
    }
};