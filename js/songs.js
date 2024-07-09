const audioPath = "audio/";
var songs = [
	"JustGiveMeaReason-PnkNateRuess.mp3",
	"AThousandYears-christinaperri.mp3",
	"ImYours-JasonMraz.mp3",
	"I-Do-911.mp3",
	"Maps-Maroon5.mp3"
];
var audio = new Audio();
var count = 0;

function switchAudio() {
	if(!audio.paused) {
		audio.pause();
		audio.load();
	}

	audio.src = audioPath + songs[count++];
	audio.volume = 0.35;
	
	if(count >= songs.length) count = 0;

	audio.play();

	if(audio.onended == null) {
		audio.onended = function() {
			audio.pause();
			audio.load();

			audio.src = audioPath + songs[count++];
			if(count >= songs.length) count = 0;

			audio.play();
		};
	}
}