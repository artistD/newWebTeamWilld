function eventmove(){
    window.location.href = "https://www.starbucks.co.kr/whats_new/store_event_list.do";
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