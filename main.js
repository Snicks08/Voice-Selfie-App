var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onResult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        console.log("taking selfie in 5 seconds")
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speakData = "Taking your selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    setTimeout(function () {
        take_snapshot();
    }, 5000);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = "<img id='selfieimage' src='+data_url+'>";
    });
}

function save() {
    link = docuement.getElementById("link");
    image = document.getElementById("selfieimage").src;
    link.href = image;
    link.click;
}