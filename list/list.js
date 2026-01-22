function displayPoList(){
    const boardVoList = JSON.parse(localStorage.getItem("boardVoList"));
    if(!boardVoList){
        return;
    }
    console.log(boardVoList);
    

    let str = "";
    for(let i = 0 ; i < boardVoList.length ; i++){
        const vo = boardVoList[i];
        str += `
            <tr>
                <th>${i}</th>
                <td>${vo.name}</td>
                <td>${vo.type.join(", ")}</td>
                <td>
                    <button onclick="setPoNo(${i})">수정 및 상세보기</button>
                </td>
            </tr>
        `;
    }

    const tbodyTag = document.querySelector("main table tbody");
    tbodyTag.innerHTML = str;
}


function setPoNo(no){
    localStorage.setItem("selectedPoNo", no);
    location.href="../make/make.html";
}

window.onload = function(){
    displayPoList();
}