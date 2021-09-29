function preload(){

}

function setup(){
 Canvas=createCanvas(300,300);
 Canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jcbi_YYI-/model.json",modelloaded);
}

 function modelloaded(){
console.log("model is loaded");
 }


function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
}


function gotresult(error,results){
    if(error){
        console.error(error);
    } else{
 console.log(results);
 document.getElementById("result_object_name").innerHTML=results[0].label;
 document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
 }