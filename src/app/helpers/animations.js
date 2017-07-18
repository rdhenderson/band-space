// import MorphSVGPlugin from '../vendor/Plugins/MorphSVGPlugin.min.js'
// import TweenMax from '../vendor/TweenMax.min.js'
// import TimelineMax from '../vendor/TimelineMax.min.js'


//Click/Touch the guitar, or any key to play!

//Convert circle elements to paths
MorphSVGPlugin.convertToPath("circle");

//Note to self: Name stuff better in illustrator!
//Varibles for the animation
var stringStringyness = 2;
var guitar = document.getElementById('guitar_2_');
var stringStraight_6_ = document.getElementById('stringStraight_6_');
var stringPlucked_6_ = document.getElementById('stringPlucked_6_');
var stringStraight_7_ = document.getElementById('stringStraight_7_');
var stringPlucked_7_ = document.getElementById('stringPlucked_7_');
var stringStraight_8_ = document.getElementById('stringStraight_8_');
var stringPlucked_8_ = document.getElementById('stringPlucked_8_');
var stringStraight_9_ = document.getElementById('stringStraight_9_');
var stringPlucked_9_ = document.getElementById('stringPlucked_9_');
var stringStraight_10_ = document.getElementById('stringStraight_10_');
var stringPlucked_10_ = document.getElementById('stringPlucked_10_');
var stringStraight_11_ = document.getElementById('stringStraight_11_');
var stringPlucked_11_ = document.getElementById('stringPlucked_11_');
var speaker_1 = document.getElementById('speaker-1');
var speakerWobble_1 = document.getElementById('speaker-wobble-1');
var speaker_2 = document.getElementById('speaker-2');
var speakerWobble_2 = document.getElementById('speaker-wobble-2');
var note_1 = document.getElementById('note-1_2_');
var note_2 = document.getElementById('note-2_2_');
var note_3 = document.getElementById('note-3_2_');
var note_4 = document.getElementById('note-4_2_');
var spark_1 = document.getElementById('spark-1');
var spark_2 = document.getElementById('spark-3');
var spark_3 = document.getElementById('spark-4');

//Declare timeline
var pluck = new TimelineMax({
	paused: true
})

//String Animtaions
pluck.to(stringStraight_6_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_6_.getAttribute('points')}})
					.to(stringStraight_6_, 1, {morphSVG: {points: stringStraight_6_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)})

					.to(stringStraight_7_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_7_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_7_, 1, {morphSVG: {points: stringStraight_7_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness,0.04)}, "-=1")

					.to(stringStraight_8_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_8_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_8_, 1, {morphSVG: {points: stringStraight_8_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_9_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_9_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_9_, 1, {morphSVG: {points: stringStraight_9_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_10_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_10_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_10_, 1, {morphSVG: {points: stringStraight_10_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_11_, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_11_.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_11_, 1, {morphSVG: {points: stringStraight_11_.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

//Note Animations
					.to(note_1, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(note_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_2, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(note_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_3, 0.4, {x:"-20%", y:"-50%"}, "-=1.1")
					.to(note_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_4, 0.4, {x:"50%", y:"-25%"}, "-=1.1")
					.to(note_4, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_4, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

//Sparks Animations
					.to(spark_1, 0.4, {x:"-50%", y:"50%"}, "-=1.1")
					.to(spark_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_2, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(spark_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_3, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(spark_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

//Speaker Animtaions
					.to(speaker_1, 0.1, {ease: Expo.easeOut,morphSVG:speakerWobble_1}, "-=1.1")
					.to(speaker_1, 0.4, {morphSVG:speaker_1,ease: Elastic.easeOut}, "-=1")

					.to(speaker_2, 0.1, {ease: Expo.easeOut,morphSVG:speakerWobble_2}, "-=1.05")
					.to(speaker_2, 0.4, {morphSVG:speaker_2,ease: Elastic.easeOut}, "-=0.95");


function rockOut() {
	pluck.restart();
	pluck.play();
	playAudio();
}

//Do the stuff when clicked
guitar.addEventListener("click", rockOut);
