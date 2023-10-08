
let page0 = document.getElementById("page0")
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")
let page5 = document.getElementById("page5")
let page6 = document.getElementById("page6")
let page7 = document.getElementById("page7")
let page8 = document.getElementById("page8")
let page9 = document.getElementById("page9")
let page10 = document.getElementById("page10")
let page11 = document.getElementById("page11")

let p=document.querySelector(".p");
let pg1 = document.querySelector("#pg-1");
let pg2 = document.querySelector("#pg-2");
let pg3 = document.querySelector("#pg-3");
let pg4 = document.querySelector("#pg-4");
let pg5 = document.querySelector("#pg-5");
let pg6 = document.querySelector("#pg-6");
let pg7 = document.querySelector("#pg-7");
let pg8 = document.querySelector("#pg-8");
let pg9 = document.querySelector("#pg-9");
let pg10 = document.querySelector("#pg-10");
let pg11 = document.querySelector("#pg-11");

p.addEventListener("click", function(){
    page0.style.display="block";
    page1.style.display="block";
});

pg1.addEventListener("click",function(){
    page2.style.display="block";
    page11.style.display="block";
    pg2.addEventListener("click",function(){
        page2.style.display="none";
        page11.style.display="none";
    });
});

// pg1.addEventListener("click", function(){
//     page2.style.display="block";
//     page3.style.display="block";
//     pg2.addEventListener("click", function(){
//         page2.style.display= "none";
//         page3.style.display = "none";
//     });
// });
// pg3.addEventListener("click", function(){
//     page4.style.display="block";
//     page5.style.display="block";
//     pg4.addEventListener("click", function(){
//         page4.style.display= "none";
//         page5.style.display = "none";
//     });
// });
// pg5.addEventListener("click", function(){
//     page6.style.display="block";
//     page7.style.display="block";
//     pg6.addEventListener("click", function(){
//         page6.style.display= "none";
//         page7.style.display = "none";
//     });
// });
// pg7.addEventListener("click", function(){
//     page8.style.display="block";
//     page9.style.display="block";
//     pg8.addEventListener("click", function(){
//         page8.style.display= "none";
//         page9.style.display = "none";
//     });
// });
// pg9.addEventListener("click", function(){
//     page11.style.display="block";
//     page10.style.display="block";
//     pg10.addEventListener("click", function(){
//         page10.style.display= "none";
//         page11.style.display = "none";
//     });
// });


let playBtn = document.querySelector(".play-btn");
let range = document.getElementById("range");
let audio1 = document.getElementById("audio1");

playBtn.addEventListener("click", function(){
    if(audio1.paused){
        audio1.play();
        document.getElementById("pause").style.display="block";
        document.getElementById("play").style.display="none";
    }
    else{
        audio1.pause();
        document.getElementById("pause").style.display="none";
        document.getElementById("play").style.display="block";
    }
});

audio1.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audio1.currentTime / audio1.duration) * 100);
    range.value = progress;
});
range.addEventListener('change',function(){
    audio1.currentTime = range.value * audio1.duration / 100;
});

var VolumeSlider = document.getElementById("volume-slider");
function volumechange() {
    audio1.volume = VolumeSlider.value;
}