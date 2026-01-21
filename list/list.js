function displayPoList(){
    const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    if(!boardVoList){
        return;
    }
    let str = "";
    for(let i = 0 ; i < boardVoList.length ; i++){
        const vo = boardVoList[i];
        str += `
            <tr>
                <th> ${i} </th>
                <td> ${vo.title} </td>
                <td><button onclick="">수정 밑 상세보기</button></td>
            </tr>
        `;
    }

    const tbodyTag = document.querySelector("main table tbody");
    tbodyTag.innerHTML = str;

}

function setPoNo(no){
    localStorage.setItem("selectedPoNo", no);
    location.href="./edit.html";
}

window.onload = function(){
    displayPoList();
}