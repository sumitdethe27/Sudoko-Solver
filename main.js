const btn=document.querySelector("#solve");
btn.addEventListener("click",()=>{


const a1=copiedarr(a);


function sud(a1){
    if(solver(a1)){
        console.log(true);
    }else{
        console.log(false)
    }
}

var solver=(board)=>{
for(let i=0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
    if(board[i][j]===0){
        for(let num=1;num<=9;num++){

         if(isSafe(board,i,j,num)){
            let temp=i*9+j;
            let currentbox=document.querySelector(`#box${temp}`);
           
            board[i][j]=num;
            setTimeout(()=>{

                currentbox.textContent=num;
            },1000)
        
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

console.log(a1.toString());
})
