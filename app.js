const PlayBtn = document.getElementById("PlayBut");
const Audio = document.querySelector("audio");

PlayBtn.addEventListener("click", function () {
  Audio.play();
});

const PauseBtn = document.getElementById("PauseBut");
PauseBtn.addEventListener("click", function () {
  Audio.pause();
});
const StopBtn = document.getElementById("StopBut");

StopBtn.addEventListener("click", function () {
  Audio.pause();
  Audio.currentTime = 0;
});
const Vol = document.getElementById("Volume-slider");
Vol.addEventListener("change", function (event) {
  Audio.volume = event.target.value;
});

const music = [
  {
    Singer: "Nima Masiha",
    Name: "Bar Faraz Asemanha",
    ImageSrc: "imgs/nima.jpg",
    Audiosrc: "music/Nima_Masiha_Bar_Faraze_Asemanha.mp3",
  },
  {
    Singer: "Yas",
    Name: "Sefareshi",
    ImageSrc: "imgs/sefareshi.jpg",
    Audiosrc: "music/Yas-Sefareshi-joyamusic.mp3",
  },
];
const Poster = document.getElementById("poster");
const musicList = document.getElementById("musicList");

for (let i = 0; i <= music.length - 1; i++) {
  musicList.innerHTML += `<div>
    <p>Singer: ${music[i].Singer}</P>
    <p>Music Name: ${music[i].Name}</p>
    <button class="btn" id="selectsong${i}">Select</button>
    </div>`;
  console.log("hi");
}
for (let i = 0; i < music.length; i++) {
  const Selector = document.getElementById(`selectsong${i}`);
  Selector.addEventListener("click", function () {
    const selectedMusic = music[i];
    console.log(`Playing ${selectedMusic.Name} by ${selectedMusic.Singer}`);
    Poster.src = selectedMusic.ImageSrc;
    Audio.src = selectedMusic.Audiosrc;
    Audio.play();
  });
}
Audio.addEventListener("ended", function () {
  const hst = "http://localhost:5500/";
  let curindex = 0;
  console.log(Audio.currentSrc);
  for (let i = 0; i < music.length; i++) {
    if (Audio.currentSrc == hst + music[i].Audiosrc) {
      curindex = i;
      curindex++;
      if (curindex > music.length - 1) {
        Audio.src = music[0].Audiosrc;
        Poster.src = music[0].ImageSrc;
        Audio.play();
      } else {
        Audio.src = music[curindex].Audiosrc;
        Poster.src = music[curindex].ImageSrc;
        Audio.play();
      }
    } else {
      console.log("No found");
    }
  }
});
