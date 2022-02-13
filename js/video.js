// video play pause 
var video = document.querySelector(".video");
var juice = document.querySelector(".orange-juice");
var btn = document.getElementById("play-pause");

function togglePlayPause(){
  if(video.paused){
   btn.className = "pause";
   video.play();
  }
  else{
    btn.className = "play";
    video.pause();
  }
}
btn.onclick = function() {
 togglePlayPause();
};

juice.style.width = '0%';
video.addEventListener('timeupdate', function(){
    var juicePosition = video.currentTime / video.duration;
    juice.style.width = juicePosition * 100 + '%';
});

// view accessories 
$('.view-accessories').hide();
$('.view-all').click(function(){
    $('.view-all').hide();
    $('.view-accessories').show();
});
