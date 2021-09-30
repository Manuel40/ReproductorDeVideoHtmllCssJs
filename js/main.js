//Grab Dom
const video = document.querySelector(".video")
const playButton= document.querySelector(".play")
const playButtonIcon = playButton.querySelector("i")
const stopButton = document.querySelector(".stop")
const forwardButton= document.querySelector(".forward")
const backwardButton=document.querySelector(".backward")
const progressBar = document.querySelector(".progress")

//Listen for events
playButton.addEventListener("click", playPauseVideo)
video.addEventListener("click", playPauseVideo)
stopButton.addEventListener("click",stopVideo)
forwardButton.addEventListener("click",forwardVideo)
progressBar.addEventListener("change",setVideoProgress)
backwardButton.addEventListener("click",backwardVideo)


//Functions

//pausa y da play al video
function playPauseVideo(){
   /* if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }*/
    
    video[video.paused ? "play" : "pause"]()
    changeButtonToggleIcon();
    
    
}
//cambia el icono del boton de video
function changeButtonToggleIcon(){
    if(video.paused){
        playButtonIcon.classList.remove("fa-pause")
        playButtonIcon.classList.add("fa-play")
    }
    else{
       
        playButtonIcon.classList.remove("fa-play")
        playButtonIcon.classList.add("fa-pause")
    }
}

//STOP video

function stopVideo(){
    video.pause();
    changeButtonToggleIcon();
    video.currentTime = 0;
    progressBar.value=0;
    
}

//mover el current time con la barra progress

function setVideoProgress(){
     video.currentTime= Number((progressBar.value * video.duration)/100)
     console.log(video.currentTime)
}

//Setea el progres bar segun el currentTime del video
function setProgresBar(){
    progressBar.value=Math.floor(Number((video.currentTime / video.duration)*100))
   
}

//click to forward 15 seconds
function forwardVideo(){
    video.currentTime=video.currentTime+15;
    setProgresBar()
    console.log(video.currentTime)
    console.log(progressBar.value)
}

//click to backward 15 seconds

function backwardVideo(){
    if(video.currentTime>15){
        let currentime = video.currentTime
        video.currentTime = currentime -15;
    setProgresBar();
    console.log(video.currentTime)
    console.log(progressBar.value)
}
else{
    console.log("nos es posible regresar 15 seg")
}
    }
    