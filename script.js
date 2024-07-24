console.log("Welcome to Tic Tac Toe");
let turn1=new Audio("auughhh.mp3");
// let turn2=new Audio("dr-livesey.mp3");
let turn3=new Audio("here-we-go.mp3");
let turn4=new Audio("win.mp3");
let curr="X"
let isgameover=false;
let draww=false;
const changeturn=()=>
{
    return curr==="X"?"0":"X";
}
const checkwin=()=>
{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==''))
        {
           
            isgameover=true;
        //    turn2.pause();
            turn4.play();
            document.querySelector('.imgbox').getElementsByClassName('imgg')[0].style.width="200px";
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + " Won "

        }
        
        
    })
}


document.getElementsByClassName("info")[0].innerText ="Turn for "+ curr;
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext')
   element.addEventListener('click', () => 
    {
        if(!isgameover){
           
            if(boxtext.innerText==='')
            {   
            boxtext.innerText=curr;
            curr=changeturn();
            document.getElementsByClassName("info")[0].innerText ="Turn for "+ curr;
            checkwin();
            draw();
            }
         }
         
    })
})
reset.addEventListener('click',()=>
{
   
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>
        {
            element.innerText="";
        });
        
        turn3.play();

       
        curr="X";
        isgameover=false;
        draww=false;

        document.querySelector('.imgbox').getElementsByClassName('imgg')[0].style.width=0;
})

const draw =()=>
{ let count=0;
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>
        {
            if(element.innerText!=="")
            {
                count++;
            }

            
        });
        if(count==9)
        {
            draww=true;
            isgameover=true;
            if(draww)
            {
                document.getElementsByClassName("info")[0].innerText ="Its a Draw";
                // turn2.pause();
                turn1.play();
            }
        }
        
}

