const title = document.getElementById('title');
const artist = document.getElementById('artist');
const previous = document.getElementById('previous');
const playing = document.getElementById('play');
const playingMobile = document.querySelector("#playMobile")
const next = document.getElementById('next');
const leftside = document.querySelector(".left");
const rightSide = document.querySelector(".right");

const splitLeft = document.querySelector(".split1");
const currentSong = document.getElementById("currentSong")
const totalAmount = document.getElementById("total")
const section1 = document.querySelector(".info")
const imagePlace = document.getElementById("imagePlacement")
const rotation = document.getElementById("toggleRotation")

let tracksongnumber = 0;
let isPlaying = false;

let audioFile = document.createElement("audio");

// let rightBackground = document.createElement("img");
// rightBackground.classList.add("rightBg");
// rightSide.appendChild(rightBackground);

let songPicture = document.createElement('img');
songPicture.classList.add('albumImg');
imagePlace.appendChild(songPicture);

let durationOfTime = document.createElement("input");
durationOfTime.type = "range";
durationOfTime.min = '0';
durationOfTime.max = '100';
durationOfTime.value = "0";
durationOfTime.className = "duration";
// splitLeft.appendChild(durationOfTime);

let durationTime = document.createElement("span")
durationTime.classList.add("current-time") 
durationTime.innerHTML = "0:00"
// splitLeft.appendChild(durationTime)

let durationTime2 = document.createElement("span")
durationTime2.classList.add("total-time") 
durationTime2.innerHTML = "0:00"
// splitLeft.appendChild(durationTime2)

let volumeNumber = document.createElement("p")
volumeNumber.classList.add("volumeDisplay1")
volumeNumber.innerHTML = "50"

let containerForSpan = document.createElement("div")
     containerForSpan.classList.add("durationBlock")
       splitLeft.appendChild(containerForSpan)  
       containerForSpan.appendChild(durationTime) 
       containerForSpan.appendChild(durationOfTime)
       containerForSpan.appendChild(durationTime2) 
        

function musicDuration() {
    let position = 0;
    if (!isNaN(audioFile.duration)) {
        position = audioFile.currentTime * (100 / audioFile.duration);
        durationOfTime.value = position;
    }
    if (audioFile.ended) {
        playing.innerHTML = '<i class="fa fa-stop"></i>';
        playingMobile.innerHTML = '<i class="fa fa-stop"></i>';
        audioFile.pause();
        songPicture.classList.remove("play")
    }
}
musicDuration()

function actualTime(){
    let mins = Math.floor(audioFile.currentTime / 60)
    let secs = Math.floor(audioFile.currentTime % 60)
    if(secs < 10){
        secs = "0" + String(secs)
    }
    durationTime.innerHTML = mins + ":" + secs
}

setInterval(actualTime, 1000);
actualTime();

audioFile.addEventListener("loadedmetadata", totalTime);
function totalTime(){
    
    let mins = Math.floor(audioFile.duration / 60)
    let secs = Math.floor(audioFile.duration % 60)
    if(secs < 10){
        secs = "0" + String(secs)
    }
    
    durationTime2.innerHTML = `${mins}:${secs}`
}
totalTime()

audioFile.addEventListener('timeupdate', musicDuration);
// audioFile.addEventListener("loadedmetadata", totalTime);

durationOfTime.addEventListener('input', () => {
    let seekTo = audioFile.duration * (durationOfTime.value / 100);
    audioFile.currentTime = seekTo;
    
});

let volumeAlter = document.createElement("input")
volumeAlter.type = "range";
volumeAlter.min = "0";
volumeAlter.max = "100"
volumeAlter.value = "50"
volumeAlter.className = "volumeChange"
splitLeft.appendChild(volumeAlter)
splitLeft.appendChild(volumeNumber)

volumeAlter.addEventListener("input", function(e) {
let volumeValue = Number(e.currentTarget.value)
audioFile.volume = volumeValue / 100;
volumeNumber.innerHTML = `${volumeValue}`


let trackColor;
if(volumeValue < 50){
// alert("Be careful of high volume.")
// volumeNumber.style.color = "orange"
// volumeAlter.style.backgroundColor = "orange"
trackColor = "blue"
durationOfTime = "blue"
volumeNumber.style.color = "blue"
}else if (volumeValue >= 50 && volumeValue < 65){
// alert("Way too high please turn it down!!!")
// volumeNumber.style.color = "red"
trackColor = "green"
durationOfTime = "green"
volumeNumber.style.color = "green"
}else if(volumeValue >= 65 && volumeValue < 80){
    trackColor = "orange"
    durationOfTime = "orange"
    volumeNumber.style.color = "orange"
    volumeWarning("Careful with the volume")
    
}else{
    trackColor = "red"
    durationOfTime = "red"
    volumeNumber.style.color = "red"
    volumeWarning("High volume warning please turn it down....")
}
volumeAlter.style.background = `linear-gradient(to right, ${trackColor} ${volumeValue}%, #ddd ${volumeValue}%)`;
})

let initialVolumeValue = Number(volumeAlter.value);
let initialTrackColor = initialVolumeValue < 50 ? "blue" :
initialVolumeValue < 65 ? "green" :
initialVolumeValue < 80 ? 'orange' : 'red';
volumeAlter.style.background = `linear-gradient(to right, ${initialTrackColor} ${initialVolumeValue}%, #ddd ${initialVolumeValue}%)`;

function setVolumeNumber(){

}

let messageToListener = ["You Matter", "I Love You", "Thank you for existing", "You should love yourself", "You deserve the world"];

let musicThatPlays = [
    {
        name: "Curators",
        path: "music/Division.mp3",
        img: "album/D2.webp",
        singer: "Ubisoft Music",
    },

    {
        name: "Theater District",
        path: "music/Rooftops(Theater Settlement) - Tom Clancy's The Division 2.mp3",
        img: "album/D2.webp",
        singer: "Ubisoft Music"
    },
    {
        name: "Go To Bed",
        path: "music/Adult-Swim.mp3",
        img: "album/gotobed.jpg",
        singer: "Adult Swim",
    },
    {
        name: "Chamber of Reflection",
        path: "music/Reflection.mp3",
        img: "album/macDemarco.jpg",
        singer: "Mac Demarco",
    },
    {
        name: "Resonance",
        path: "music/Home.mp3",
        img: "album/resonance.jpg",
        singer: "Home"
    },
    {
        name: "Pool Song",
        path: "music/Pool.mp3",
        img: "album/porcelain.jpg",
        singer: "Lea Porcelain"
    },
    {
        name: "Face It",
        path: "music/Face-It.mp3",
        img: "album/beachfossils.jpg",
        singer: "Beach Fossils"
    },
    {
        name: "Feel It All Around",
        path: "music/Feel-It-All-Around.mp3",
        img: "album/washedout.jpeg",
        singer: "Washed Out"
    },
    {
        name:"Disorder",
        path:"music/Joy Division-Disorder.mp3",
        img: "album/joydivision.jpg",
        singer:"Joy Division"
    },
    {
        name:"Dynamic",
        path:"music/Voyage-Dynamic.mp3",
        img: "album/voyage.jpeg",
        singer: "Voyage"
    },
    {
        name:"You & Me",
        path:"music/Disclosure-You&Me.mp3",
        img: "album/flume.jpg",
        singer: "Disclosure ft: Flume"
    },
    {
        name: "Nightcall",
        path: "music/Nightcall.mp3",
        img: "album/kavinsky.jpg",
        singer: "Kavinsky"
    },
    {
        name: "Blender",
        path: "music/blender.mp3",
        img: "album/faceaway.png",
        singer: "Svard"
    },
    {
        name: "Face Away",
        path: "music/faceaway.mp3",
        img: "album/faceaway.png",
        singer: "Svard"
    },
    {
        name: "So Cold",
        path: "music/Socold.mp3",
        img: "album/balubridaga.jpg",
        singer: "Balu Brigada"
    },
    {
        name: "Adversity",
        path: "music/Adversity.mp3",
        img: "album/beachfossils.jpg",
        singer: "Beach Fossils"
    },
    {
        name: "Adversity",
        path: "music/Adversity.mp3",
        img: "album/beachfossils.jpg",
        singer: "Beach Fossils"
    }
];

function the_track(tracksongnumber) {
    restart()
    audioFile.src = musicThatPlays[tracksongnumber].path;
    songPicture.src = musicThatPlays[tracksongnumber].img;
    title.textContent = musicThatPlays[tracksongnumber].name;
    artist.textContent = musicThatPlays[tracksongnumber].singer;
    currentSong.textContent = tracksongnumber + 1
    totalAmount.textContent = musicThatPlays.length
    audioFile.load();
    defaultBG();

    if(!musicThatPlays[tracksongnumber].img){
      songPicture.style.display = "none"
    }else{
        songPicture.style.display = "block "
    }
}

the_track(tracksongnumber);

function playTheSound() {
    if (isPlaying == false) {
        audioFile.play();
        isPlaying = true;
        playing.innerHTML = '<i class="fa fa-pause"></i>';
        playingMobile.innerHTML = '<i class="fa fa-pause"></i>';
        songPicture.classList.toggle('play');
        leftside.style.backgroundImage = `url(${musicThatPlays[tracksongnumber].img})`;
        showToast(`Now playing ${musicThatPlays[tracksongnumber].name} by ${musicThatPlays[tracksongnumber].singer}`);
    } else {
        audioFile.pause();
        isPlaying = false;
        playingMobile.innerHTML = '<i class="fa fa-play"></i>';
        playing.innerHTML = '<i class="fa fa-play"></i>';
        songPicture.classList.remove('play');
        rightSide.classList.remove("rightBg")
        showToast(`Pausing ${musicThatPlays[tracksongnumber].name} by ${musicThatPlays[tracksongnumber].singer}`);
    }
}

function loop() {
    const looper = document.getElementById("loop");
    if (looper) {
      looper.addEventListener("click", function() {
        looper.classList.toggle("change");
        restart();
      });
    } 
  }
  
  function shuffle(){

const musicList = Math.floor(Math.random() * musicThatPlays.length)
        tracksongnumber = musicList
         the_track(tracksongnumber)

         if(isPlaying || audioFile.ended){
         audioFile.pause()
         audioFile.currentTime = 0 
         isPlaying = false
         playing.innerHTML = '<i class="fa fa-play"></i>';
         playingMobile.innerHTML = '<i class="fa fa-play"></i>';
         songPicture.classList.remove('play');
         rightSide.classList.remove("rightBg");
         }
         playTheSound()
}




function restart() {

    const currentSongPath = musicThatPlays[tracksongnumber].path 

    if (audioFile.src == currentSongPath) {
    //   isPlaying = false;
    //   playing.innerHTML = "Play";
    //   songPicture.classList.remove('play');
    audioFile.loop = true
    audioFile.load()
    songPicture.classList.toggle("play")
      musicDuration();
      showToast(`${musicThatPlays[tracksongnumber].name} by ${musicThatPlays[tracksongnumber].singer} has restarted!`);
    }else{
    audioFile.loop = false
    audioFile.load()
    }
  }

function showToast(message) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.textContent = message;
    leftside.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            leftside.removeChild(toast);
        }, 3000);
    }, 10);
}

function volumeWarning(message){
    let toast = document.createElement("div");
    toast.classList.add('toast1');
    toast.textContent = message;
    leftside.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show1');
        setTimeout(() => {
            toast.classList.remove('show1');
            leftside.removeChild(toast);
        }, 3000);
    }, 10);
}

function showNotification(message){
let notifyToast = document.createElement("div")
notifyToast.classList.add("notifyMe")
notifyToast.textContent = message;
leftside.appendChild(notifyToast)

setTimeout(() => {
   notifyToast.classList.add("displayUpdate")
   setTimeout(() => {
    notifyToast.classList.remove("displayUpdate")
    leftside.removeChild(notifyToast)
   }, 3000) 
}, 10);

}

function userInfo(){
    showNotification("Yes more music and features is on the way, and I do not own any of these songs, but keep an ear out")
}

function showMusicInfo(message){
    let notifyToast = document.createElement("div")
    notifyToast.classList.add("musicNote")
    notifyToast.textContent = message;
    leftside.appendChild(notifyToast)
    
    setTimeout(() => {
       notifyToast.classList.add("displayMusicNote")
       setTimeout(() => {
        notifyToast.classList.remove("displayMusicNote")
        leftside.removeChild(notifyToast)
       }, 5000) 
    }, 10);
    
    }

function skipNext() {
    if (tracksongnumber < musicThatPlays.length - 1) {
         tracksongnumber += 1;
        
    } else {
        tracksongnumber = 0;
    }
    the_track(tracksongnumber);
    playing.innerHTML = '<i class="fa fa-play"></i>';
    rightSide.classList.remove("rightBg")
    songPicture.classList.remove('play');
    leftside.style.backgroundImage = `url(${musicThatPlays[tracksongnumber].img})`;
    showToast(`Skipped to ${musicThatPlays[tracksongnumber].name} by ${musicThatPlays[tracksongnumber].singer}`);
}

function previously() {
    if (tracksongnumber > 0) {
        tracksongnumber -= 1;
    } else {
        tracksongnumber = musicThatPlays.length - 1;
    }
    the_track(tracksongnumber);
    playing.innerHTML = '<i class="fa fa-play"></i>';
    songPicture.classList.remove('play');
    rightSide.classList.remove("rightBg")
    leftside.style.backgroundImage = `url(${musicThatPlays[tracksongnumber].img})`;
    showToast(`Skipped back to ${musicThatPlays[tracksongnumber].name} by ${musicThatPlays[tracksongnumber].singer}`);
}

function defaultBG() {
    if (tracksongnumber === 0) {
        leftside.style.backgroundImage = "url(img/division2.jpg)";
        // rightSide.style.background = "linear-gradient(45deg, #ffffff, #ff00e6, #ff0099)";
        // rightSide.style.backgroundSize = "300%";
        // rightSide.style.animation = "sideToSide 20s ease-in-out infinite";
       
    }
    if (tracksongnumber === 1) {
        rightSide.style.background = "linear-gradient(45deg, #000000, #ff00e6, #000000)";
        rightSide.style.backgroundSize = "300%";
        rightSide.style.backgroundRepeat = "no-repeat";
        rightSide.style.animation = "sideToSide 20s ease-in-out infinite";
    } else if(tracksongnumber === 2){
        rightSide.style.backgroundImage = "";
    }
}

songPicture.addEventListener("click", function(e){
if(tracksongnumber === 0){
let infoAbout = ["The game is set in a post-apocalyptic Washington, D.C., three months after a viral pandemic has decimated the population. Players take on the role of Division agents, tasked with restoring order.", "Seven months after the Green Poison outbreak, several Strategic Homeland Division (SHD) agents are defending a civilian settlement from a bandit attack when the SHD Network, the system controlling their advanced technology and communications, suddenly shuts down and they receive a Division distress call from Washington, D.C."]
let randomInfo = Math.floor(Math.random() * infoAbout.length)
randomInfo = infoAbout[randomInfo]
showMusicInfo(randomInfo)
}else if(tracksongnumber === 1){
    showMusicInfo("Testing for music track two")
}
})
