


let a=
[
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9],
]
function copiedarr(a){
    return a.map(rows=>rows.slice());
}
let body=document.querySelector("#sudoko");

let clutter=""

function sudokofill(){
    for(let i=0;i<81;i++){
    
        clutter+=`<div class="box" id="box${i}"></div>`
    
    }
}
sudokofill();
body.innerHTML=clutter

let box=document.querySelectorAll(".box");
box.forEach((item,indx)=>{
const i=Math.floor(indx/9);
const j=indx % 9;
item.textContent=a[i][j]
});
