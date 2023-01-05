song="";
LeftWristX=0;
LeftWristY=0;
RightWristX=0;
RightWristY=0;

function preload()
{
song = loadSound("starboy.mp3");
}

function setup()
{
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelloaded(){
    console.log("PoseNet model is loaded");
}

function gotPoses(results)
{
if(results.length > 0 )
{
    console.log(results);
    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    console.log("leftwristx = "+LeftWristX);
    console.log("leftwristy = "+LeftWristY);

    RightWristX = results[0].pose.rightWrist.x;
    RightWristY = results[0].pose.rightWrist.y;
    console.log("rightwristx = "+RightWristX);
    console.log("rightwristy = "+RightWristY);
}
}