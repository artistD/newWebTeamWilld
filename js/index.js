function loaded(){
    let btns = document.getElementsByClassName('btn')

    // bean이벤트
    let bean1 = document.getElementById('bean_1')
    let bean2 = document.getElementById('bean_2')
    let bean3 = document.getElementById('bean_3')
    btns[0].addEventListener('click', function(){
        bean1.style.display = 'flex'
        bean2.style.display = 'none'
        bean3.style.display = 'none'
        bean1.style.backgroundColor
        btns[0].style.backgroundColor = '#BDECB6'
        btns[1].style.backgroundColor = 'white'
        btns[2].style.backgroundColor = 'white'
    })

    btns[1].addEventListener('click', function(){
        bean1.style.display = 'none'
        bean2.style.display = 'flex'
        bean3.style.display = 'none'
        btns[0].style.backgroundColor = 'white'
        btns[1].style.backgroundColor = '#BDECB6'
        btns[2].style.backgroundColor = 'white'
    })

    btns[2].addEventListener('click', function(){
        bean1.style.display = 'none'
        bean2.style.display = 'none'
        bean3.style.display = 'flex'
        btns[0].style.backgroundColor = 'white'
        btns[1].style.backgroundColor = 'white'
        btns[2].style.backgroundColor = '#BDECB6'
    })

    //ismake 이벤트
    let make1 = document.getElementById('make_1')
    let make2 = document.getElementById('make_2')
    let make3 = document.getElementById('make_3')

    btns[3].addEventListener('click', function(){
        make1.style.display = 'flex'
        make2.style.display = 'none'
        make3.style.display = 'none'
        btns[3].style.backgroundColor = '#BDECB6'
        btns[4].style.backgroundColor = 'white'
        btns[5].style.backgroundColor = 'white'
    })

    btns[4].addEventListener('click', function(){
        make1.style.display = 'none'
        make2.style.display = 'flex'
        make3.style.display = 'none'
        btns[3].style.backgroundColor = 'white'
        btns[4].style.backgroundColor = '#BDECB6'
        btns[5].style.backgroundColor = 'white'
    })

    btns[5].addEventListener('click', function(){
        make1.style.display = 'none'
        make2.style.display = 'none'
        make3.style.display = 'flex'
        btns[3].style.backgroundColor = 'white'
        btns[4].style.backgroundColor = 'white'
        btns[5].style.backgroundColor = '#BDECB6'
        
    })
}