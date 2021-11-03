function eventmove1(){
    window.location.href = "https://www.hollys.co.kr/news/event/view.do?idx=279&pageNo=1&division=";
}

function eventmove2(){
    window.location.href = "https://www.hollys.co.kr/news/event/view.do?idx=276&pageNo=1&division=";
}

function editmove(){
    window.location.href = "./edit_board.html";
}

function loaded(){
    var req = new XMLHttpRequest();

    req.onreadystatechange = function(){
        if(req.readyState==4 && req.status==200){
            let table =document.getElementById('table')
            // let node = document.createElement('tr');
            let jsonStr = req.responseText
            // node.innerHTML = req.responseText
            let board = JSON.parse(jsonStr)
            for(let i=0; i<board.length; i++){
                let no = board[i].no
                let title = board[i].title
                table.innerHTML += `<tr><td>${no}</td><td>${title}</td></tr>`
                

            }
            // alert(node.innerHTML)
            
            
        }


    }

    req.open('GET', './board.php', true);
    req.send();
}