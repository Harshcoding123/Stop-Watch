let start= document.querySelector("#start");
let stop= document.querySelector("#stop");
let reset= document.querySelector("#reset");
let h1= document.querySelector("h1");
let timer =null;
let time= [0,0,0];
let [sec,min,hr]= [0,0,0];
function stopWatch(){
    sec++;
    if(sec===60){
        sec=0;
        min++;
        if(min===60){
            min=0;
            hr++;
        }
    }
   
    let s= sec;
    let m =min;
    let h =hr;

    if(sec<10){
        s= "0"+sec;
    }
    if(min<10){
        m= "0"+min;
    }
    if(hr<10){
        h= "0"+hr;
    }
    h1.innerHTML =h+":"+m+":"+s;
}


function watchStart(){
    if(timer!==null){
        clearInterval(timer);

    }
   timer = setInterval(stopWatch,1000);  //repeate

}
function watchStop(){
    clearInterval(timer);
    
}
function watchReset(){
    clearInterval(timer);
    [sec,min,hr] =[0,0,0];
    
    h1.innerHTML= "00:00:00";
}


start.addEventListener("click",watchStart);

