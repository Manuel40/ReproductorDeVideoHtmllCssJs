//Grab Dom
const video = document.querySelector(".video")
const playButton= document.querySelector(".play")
const playButtonIcon = playButton.querySelector("i")
const stopButton = document.querySelector(".stop")

//Listen for evets
playButton.addEventListener("click", playPauseVideo)
video.addEventListener("click", playPauseVideo)
stopButton.addEventListener("click",stopVideo)


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
    
}