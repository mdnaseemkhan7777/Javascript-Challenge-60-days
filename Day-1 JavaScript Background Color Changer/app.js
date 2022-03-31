// hr value to get karhe h
let colors = ["green", "orange", "blue", "yellow", "red"]
let btn = document.getElementById('btn');
let color = document.querySelector('.color');
let box = document.querySelector('#box');

btn.addEventListener("click",function(){
   let rndomNumber =getRandomNumber();
//    console.log(rndomNumber);
    box.style.backgroundColor = colors[rndomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}