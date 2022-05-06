let randomNumber = Math.floor(Math.random() * 3);

let container= document.querySelector('.container');
let img = document.querySelectorAll('img');
let scoreMenu = document.querySelector('.score');
let start = document.getElementById('start');
let score = 0;
let numberAttempt = 1;
let x = 0;

scoreMenu.innerHTML = `Попытка: ${numberAttempt} Побед: ${score}`
container.addEventListener('click', e =>{
    if(x == 0){
        if(e.target.dataset.box == randomNumber){
            e.target.src = 'img/2.jpg';
            score++;
            scoreMenu.innerHTML = `Попытка: ${numberAttempt} Побед: ${score}`
        } else {
            e.target.src = 'img/3.jpg'
        }
        x++;
    }
    else{return false;}
})

start.onclick = () =>{
    for(let i = 0; i < img.length; i++){
        console.log(img[i].src='img/1.jpg');
    }
    randomNumber = Math.floor(Math.random() * 3);
    numberAttempt++;
    scoreMenu.innerHTML = `Попытка: ${numberAttempt} Побед: ${score}`
    return x = 0;
}