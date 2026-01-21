//테이블 태그 내부에 데이터 넣기
function displayVoList(){
    const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    if(!boardVoList){
        return;
    }
    let str = "";
    for(let i = 0 ; i < boardVoList.length ; i++){
        const vo = boardVoList[i];
        str += `
            <tr>
                <th><a href="./board_detail.html" onclick="setBoardNo(${i})"> ${i} </a></th>
                <td> ${vo.title} </td>
                <td> 비고 </td>
            </tr>
        `;
    }

    const tbodyTag = document.querySelector("main table tbody");
    tbodyTag.innerHTML = str;

}

function setBoardNo(no){
    localStorage.setItem("selectedBoardNo", no)
}

window.onload = function(){
    displayVoList();
}