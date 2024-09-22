let incr=document.getElementById('increase');
let reset=document.getElementById('reset');
let dec=document.getElementById('dec');
let num=document.getElementById('num');
let i=0;
    num.style.color='#b93c3c';
incr.onclick=function(){
    i++;
    num.innerHTML=i;
    if(i>0){
        num.style.color='#497e07';

    }
}
reset.onclick=function(){
    i=0;
    num.innerHTML=i;
    num.style.color='#b93c3c';
}
dec.onclick=function(){
    i--;
    num.innerHTML=i;
    if(i<0){
        num.style.color='#45451F';

    }
}