function insertBoard(){
    
    //입력받은 데이터 vo
    const title = document.querySelector("input[name=title]").value;
    const content = document.querySelector("textarea[name=content]").value;
    const boardVo = {
        "title" : title,
        "content" : content,
        "createdAt" : new Date()
    };
    //배열 준비
    let arr = JSON.parse(localStorage.getItem("boardVoList"));
    if(!arr){arr = [];}
    //배열에 vo추가
    arr.push(boardVo);
    
    localStorage.setItem("boardVoList",JSON.stringify(arr));
    alert("게시글 등록 성공")
}

