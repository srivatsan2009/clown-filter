function preload() {

}

function setup() {
canvas=createCanvas(400,300);
canvas.center();
video=createCapture(VIDEO);
video.size(400,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',getposes);
}

function draw() {
image(video,0,0,400,300);
}

function take_snapshot() {
save("srivatsan's clown filter image.jpg");
}

function modelloaded() {
console.log("posenet model is initialised");
}

function getposes(results) {
if (results.length>0) {
console.log(results);
console.log("nose x="+ results[0].pose.nose.x);
console.log("nose y="+ results[0].pose.nose.y);
}
}