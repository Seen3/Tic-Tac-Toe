let player='X';

let b={};

let board=document.getElementById('board');
for(let i=0;i<9;i++)
{
    let cell=document.createElement('div');
    cell.style.border="1px solid black";
    cell.id=`box${i}`;
    cell.innerText=":)";
    b[`box${i}`]=cell.innerText;
    cell.style.color="white";
    cell.addEventListener('click',()=>{
        if (cell.innerText==":)"){
        cell.innerText=player;
        cell.style.color="black";
        b[`box${i}`]=cell.innerText;
        if (checkBoard())
        {
            alert(`${player} won`);

        } 
        player=player=='X'?'O':'X';

        }
    });
    board.appendChild(cell);
    
}
function checkBoard()
{
    if(b['box0']==b['box1']&&b['box1']==b['box2']&&b['box1']!=':)')
        return true;
    else if (b['box3']==b['box4']&&b['box4']==b['box5']&&b['box4']!=':)')
        return true;
    else if (b['box6']==b['box7']&&b['box7']==b['box8']&&b['box8']!=':)')
        return true;
    else if (b['box0']==b['box3']&&b['box3']==b['box6']&&b['box0']!=':)')
        return true;
    else if (b['box1']==b['box4']&&b['box4']==b['box7']&&b['box7']!=':)')
        return true;
    else if (b['box2']==b['box5']&&b['box5']==b['box8']&&b['box5']!=':)')
        return true;
    else if (b['box0']==b['box4']&&b['box4']==b['box8']&&b['box4']!=':)')
        return true;
    else if (b['box2']==b['box4']&&b['box4']==b['box6']&&b['box4']!=':)')
        return true;
    return false;






        
}
