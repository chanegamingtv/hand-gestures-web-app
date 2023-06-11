var prediction1=""


Webcam.set({

width: 350,
height: 300,
image_format: "png",
png_quality: 90,
})

camera=document.getElementById("camera")
Webcam.attach(camera)
function takesnapshot(){

Webcam.snap(function(data_uri){

  document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'"/>'

})
}
console.log("ml5 version is"+ml5.version)
addmodel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ALwyBAOR5/model.json", modelLoaded)
function modelLoaded(){
console.log("model has loaded successfully :)")
}
function speakbutton(){

var synth=window.speechSynthesis
var speakdata="the hand gesture is "+prediction1

var UtterThis=new SpeechSynthesisUtterance(speakdata)
synth.speak(UtterThis)
}
function check(){
img=document.getElementById("picture")
addmodel.classify(img,gotresult)
}
function gotresult(error,results){
if(error){
console.log(error)
}

else {
console.log(results)


document.getElementById("result_gesture").innerHTML=results[0].label
prediction1=results[0].label
speakbutton()
if(results[0].label=="okay"){
document.getElementById("gesture").innerHTML="&#128076;"
}
else if(results[0].label=="thumbsup"){
document.getElementById("gesture").innerHTML="&#128077;"
}
else if(results[0].label=="fist up"){
  document.getElementById("gesture").innerHTML="&#9996;"
}
else if(results[0].label=="rockstar"){
  document.getElementById("gesture").innerHTML="&#9994;"
}
}
}
