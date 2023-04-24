getImage = function (){
    var imageNum = 0;
    while(imageNum == 0){
        imageNum = Math.floor(Math.random() * 101);
    }
    return imageNum;
}

var number = getImage();

document.getElementById("background").innerHTML = "<img src=backgrounds/" + number + ".jpeg />";