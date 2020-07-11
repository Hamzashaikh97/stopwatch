var hr=0
var min=0
var sec=0
var msec=0
var hrHead=document.getElementById("hr")
var minHead =document.getElementById("min")
var secHead=document.getElementById("sec")
var msecHead=document.getElementById("msec")

var interval;

function timer(){

    msec++
    msecHead.innerHTML=msec;
    if(msec>=100){
        sec++
        secHead.innerHTML=sec
        msec =0
    }
    else if(sec>=60){
        min++
        sec = 0
        minHead.innerHTML=min
    }
    else if (min>=60){
        hr++
        min=0
        hrHead.innerHTML=hr
    }


}
function start(){
  interval=setInterval(timer,10)
  document.getElementById("submitbtn").disabled = true;
}

function pause(){
    clearInterval(interval)


}

function reset(){
    min=0
    sec=0
    msec=0
    minHead.innerHTML=min
    secHead.innerHTML=sec
    msecHead.innerHTML=msec
    pause()
    document.getElementById("submitbtn").disabled = false;
}
