var count=-1;
var x;
const arro=[];
const arrx=[];
function play(x)
{
    count++;
    if(count%2!=0)
    {
        document.getElementById(x).style.backgroundImage ="url(https://www.transparentpng.com/thumb/red-cross/dU1a5L-flag-x-mark-clip-art-computer-icons.png)";
        document.getElementById("score").innerHTML="PLAYER  1  TURN";
        arrx[x]=2;
        arro[x]=null;
        console.log(arrx[x]+" "+x);
        
    }
    else
    {
        document.getElementById(x).style.backgroundImage="url(https://www.transparentpng.com/thumb/red-circle/empty-middle-thick-red-circle-transparent-background-64GGHf.png)"
        document.getElementById("score").innerHTML="PLAYER  2  TURN";
        arro[x]=1;
        arrx[x]=null;
       console.log(arro[x]+" "+x);
    }
   win(); 

    
}

function reset()
{   var y="0";
    count=-1;
        
       for(y=1;y<10;y++)
       {
        document.getElementById(y).style.backgroundImage="none";
       
       }
       document.getElementById("score").innerHTML="PLAYER  1  TURN";
       document.getElementById("show").style.display="none";
       
       
}
function reset_b()
{
    var z="0";
    count=-1;
        
       for(z=1;z<10;z++)
       {
        document.getElementById(z).style.backgroundImage="none";
       
       }   
}
function Var_reset()
{
    for(var i=1;i<=9;i++)
    {
        arro[i]=null;
        arrx[i]=null;
        count=-1;
    }
}

function win()
{
    if(arro[1]==arro[2]&&arro[2]==arro[3]&&arro[3]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }
    
    if(arrx[1]==arrx[2]&&arrx[2]==arrx[3]&&arrx[3]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[4]==arro[5]&&arro[5]==arro[6]&&arro[6]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[4]==arrx[5]&&arrx[5]==arrx[6]&&arrx[6]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[7]==arro[8]&&arro[8]==arro[9]&&arro[9]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[7]==arrx[8]&&arrx[8]==arrx[9]&&arrx[9]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[1]==arro[4]&&arro[4]==arro[7]&&arro[7]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[1]==arrx[4]&&arrx[4]==arrx[7]&&arrx[7]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[2]==arro[5]&&arro[5]==arro[8]&&arro[8]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[2]==arrx[5]&&arrx[5]==arrx[8]&&arrx[8]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[3]==arro[6]&&arro[6]==arro[9]&&arro[9]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[3]==arrx[6]&&arrx[6]==arrx[9]&&arrx[9]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[1]==arro[5]&&arro[5]==arro[9]&&arro[9]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[1]==arrx[5]&&arrx[5]==arrx[9]&&arrx[9]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(arro[3]==arro[5]&&arro[5]==arro[7]&&arro[7]==1)
    {
        document.getElementById("score").innerHTML="PLAYER  1  WIN O";
        win_showo();
        Var_reset();
    }

    
    if(arrx[3]==arrx[5]&&arrx[5]==arrx[7]&&arrx[7]==2)
    {
        document.getElementById("score").innerHTML="PLAYER  2  WIN X";
        win_showx();
        Var_reset();
    }

    if(count==8)
    {
        document.getElementById("score").innerHTML="MATCH TIE (PRESS RESET)";
        document.getElementById("show").innerHTML="MATCH  TIE  (PRESS RESET)";
        document.getElementById("show").style.display="block";
        reset_b();
    }
  
}
function win_showx()
{
    document.getElementById("show").innerHTML="PLAYER  WIN   X  (PRESS RESET)";
    document.getElementById("show").style.display="block";
    
    
}

function win_showo()
{
    document.getElementById("show").innerHTML="PLAYER  WIN   O  (PRESS RESET)";
    document.getElementById("show").style.display="block";
    
    
}
