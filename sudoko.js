


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
let bool=false
function sudokofill(){
    for(let i=0;i<81;i++){
        if((((i+1)%3)===0)&& i%3!==0){
            clutter+=`<div class="box ver" id="box${i}"></div>`

        }
        else{
            clutter+=`<div class="box" id="box${i}"></div>`

        }    
    }
}
sudokofill();
body.innerHTML=clutter
function sudoko_content_fill(){
let box=document.querySelectorAll(".box");
box.forEach((item,indx)=>{
const i=Math.floor(indx/9);
const j=indx % 9;
item.textContent=a[i][j]
});
}
sudoko_content_fill();