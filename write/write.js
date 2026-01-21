function saveBoard(){

    const title = document.querySelector("input[name=title]").value;
    const content = document.querySelector("textarea[name=content]").value;
    const boardVo = {
        "title" : title,
        "content" : content,
        "visited" : 0
    };
    let arr = JSON.parse(localStorage.getItem("boardVoList"));
    if(!arr){arr = [];}
    arr.push(boardVo);
    
    localStorage.setItem("boardVoList",JSON.stringify(arr));
    alert("게시글 등록")
}