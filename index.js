
const score = document.getElementById("score-num");
const img = document.getElementById("mychoice");
const img2 = document.getElementById("compchoice"); 
const scoreHead=document.getElementById("scoreHead");
const scoreBox=document.getElementById("score");
const target=document.getElementById("targ");
const targetBox=document.getElementById("target");
const con=document.getElementsByClassName("container");
const playZone=document.getElementById("playzone");
const menuZone=document.getElementById("menuzone");
const backbtn=document.getElementById("backbtn");
const resultZone=document.getElementById("resultzone");
const resultBox=document.getElementById("resultbox");
const myScore=document.getElementById("myscore");
const compScore=document.getElementById("compscore");


var imgR=["1-R.jpeg","2-R.jpeg","3-R.jpeg","4-R.jpg","5-R.jpeg"];
var imgL=["1-L.jpeg","2-L.jpg","3-L.jpeg","4-L.jpeg","5-L.jpeg"];
var choice1,choice2,x,y=0,sc2=0,run2=0;
var sc = 0;
var one=true;
var a,b;
y = Math.ceil((Math.random() * 10) % 6);


// backbtn.addEventListener(click,goBack);
// console.log(score);

// First batting
function choice(x) {
    if(one){
    img.src=imgL[x-1];
    img2.src=imgR[y-1];
    var run = x;
    if (x == y) {
        // con.style.backgroundColor="red";
        score.innerHTML = 0;
        scoreHead.innerText="Comp Score :";
        // scoreBox.style.width+=10px;
        one=false;
        target.innerHTML=sc+1;
        targetBox.style.visibility="visible";
        setTimeout(alert("you are out"),1000)
        y = Math.ceil((Math.random() * 10) % 6);
        return;
    } 
    else {
        sc += run;
        score.innerHTML = sc;
    }
    y = Math.ceil((Math.random() * 10) % 6);

    

    }

    // Second batting

    else{
        img.src=imgL[x-1];
        run2 = y;
        if (x == y) {
            alert("computer is out");
            findwinner();
            one=true;
            score.innerHTML = sc2;
            scoreHead.innerText="Your Score :";
            return;
        } 
        else {
            
            sc2 += run2;
            score.innerHTML = sc2;
            if(sc2>sc){
                findwinner();
                one=true;
                score.innerHTML = sc2;
                scoreHead.innerText="Your Score :";
                return;
            }
        }
        y = Math.ceil((Math.random() * 10) % 6);

        img2.src=imgR[y-1];
    }}

function findwinner(){
    if(sc>sc2){
        alert("Congratulation! You won");
    }
    else{
        alert("You lost");
    }

    createResult(sc,sc2);
    sc=0;
    sc2=0;

}

function play(){
    menuZone.style.display='none';
    playZone.style.display="block";
    // playZone.style.visibility="visible";
}

// setTimeout(
// function aler(){
//     alert("you are out");
// },1000)

function exit(){
    alert("Thanks for visiting");
    window.history.back();
}

function goBack(){
    menuZone.style.display='flex';
    playZone.style.display="none";
}

function goToPlay(){
    resultZone.style.display="none";
    playZone.style.display="block"
}

function goToHome(){
    resultZone.style.display="none";
    menuZone.style.display="flex";
}

function createResult(a,b){
    menuZone.style.display='none';
    targetBox.style.visibility="hidden";
    playZone.style.display="none";
    resultZone.style.display="flex";
    myScore.innerHTML=a;
    compScore.innerHTML=b;
}