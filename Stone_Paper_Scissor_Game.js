// randomly one picked from below array 
let cpuI = Math.floor(Math.random()*3);

let cpu =['Stone','Paper','Scisssor'][cpuI]
document.getElementById('playagain1').style.visibility = 'hidden';// hide playagain button before checking result

let checkresult =document.getElementById("check");
checkresult.addEventListener("click",()=>{ // check result

document.getElementById('input').style.visibility = 'hidden';// hide input area when result displaying
document.getElementById('check').style.visibility = 'hidden';//hide check button
document.getElementById('playagain1').style.visibility = 'visible';// unhide playagain button


let Gamerrr = document.getElementById("input").value;// receive input data

const match=(cpu,Gamerrr)=>{

if(cpu===Gamerrr){// different cases
    return "Match Tied";
}else if(cpu==='Stone' && (Gamerrr==='Paper' || Gamerrr==='paper')){
    return "Gamerrr";
}else if(cpu==='Stone' && (Gamerrr==='Scisssor'||Gamerrr==='scisssor')){
    return "cpu";
}else if(cpu==='Paper' && (Gamerrr==='Stone'|| Gamerrr==='stone')){
    return "cpu";
}else if(cpu==='Paper' && (Gamerrr==='Scisssor'||Gamerrr==='scisssor')){
    return "Gamerrr";
}else if(cpu==='Scisssor' && (Gamerrr==='Paper' || Gamerrr==='paper')){
    return "cpu";
}else if(cpu==='Scisssor' && (Gamerrr==='Stone'|| Gamerrr==='stone')){
    return "Gamerrr";
}else if(Gamerrr==='S'||Gamerrr==='P'||Gamerrr==='SC'){
    return "Please write full name as mentioned";
}

}
let result = match(cpu,Gamerrr)
let backchange=document.getElementById("resultdisplay1");
backchange.style.backgroundColor="greenyellow";
document.getElementById("resultdisplay1").innerHTML=`Scisssor cuts Paper, Paper damages the stone and stone hammers Scissor so result is : `;
document.getElementById("resultdisplay1").style.marginTop = "0.1vh";
document.getElementById("resultdisplay2").innerHTML=(`# cpu : ${cpu} <br><br> # Gamerrr : ${Gamerrr} <br><br> * Winner Is : ${result}`);

})
// for load game again
let playagain =()=>{
    document.location.reload();
}