function countDown(time){
    const timer = setInterval( function(){
        if(time > 0){
            console.log(time)
            time--;
        } else {
            clearInterval(timer);
            console.log("Done!");
        }
    }
    , 1000)
}



function randomGame(){
let numberOfTries = 0;
const attemptLooper = setInterval( function(){
let randomNumber = Math.random();
    if(randomNumber > 0.75){
        clearInterval(attemptLooper);
        console.log("Random number was above .75 after " + numberOfTries + " attempts.")
    } else {
        numberOfTries ++;
    }
}
, 1000)
}