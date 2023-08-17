const btn=document.querySelector("#solve");
let search=false;
const reset=document.querySelector("#reset");
let a1=copiedarr(a);
reset.addEventListener("click",()=>{

    sudoko_content_fill();
    a1=copiedarr(a)
    search=false;
});

btn.addEventListener("click",()=>{
console.log("hiot1")
if(search==true)return;

console.log("hiot2")


function sud(a1){
    search=solver(a1);
}

var solver=(board)=>{
for(let i=0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
    if(board[i][j]===0){
        for(let num=1;num<=9;num++){

         if(isSafe(board,i,j,num)){
           
           
            board[i][j]=num;
           

                
         
        
            if(solver(board)){
                return true;
            }else{
                board[i][j]=0
            }
         
        }
        }
        return false;
    }
}
}
return true;
}

function fill_solver_to_html(a1){
    for(let i=0;i<a1.length;i++){
    for(let j=0;j<a1[i].length;j++){
        setTimeout(()=>{

            let temp=i*9+j;
            let currentbox=document.querySelector(`#box${temp}`);
            currentbox.textContent=a1[i][j];
        },1000);

    }   
}
}
fill_solver_to_html(a1);
const isSafe=(board , r,c,num)=>{
// for top to bottom
for(let i=0;i<board.length;i++){
    if(board[i][c]===num)return false;
}
// for left to right
for(let i=0;i<board.length;i++){
    if(board[r][i]===num)return false;
}
// for the 3X3 matrix
let row = r - (r % 3);
let col = c - (c % 3);
for(let i=row;i<=row+2;i++){
    for(let j=col;j<=col+2;j++){
    if(board[i][j]===num)return false;
    }   
}

return true;
}



sud(a1);

})
