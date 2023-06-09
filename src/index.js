getImage = function (){
    var imageNum = 0;
    while(imageNum == 0){
        imageNum = Math.floor(Math.random() * 101);
    }
    return imageNum;
}

closeAlert = function() {
    document.getElementsByClassName("cookie-alert-container")[0].remove();
}

alertCookie = function(){
    var date = new Date();
    var cookie_svg_type = [ "morning", "day", "evening" ];
    if(date.getHours() >= 8 && date.getHours() < 12){
        return "<h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[0] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<div class=\"close-button-body\"><img href=\"#\" id=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/></div><div id=\"cookie-alert\">\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>\n</div>";
    }
    else if(date.getHours() >= 12 && date.getHours() <= 18){
        return "<h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[1] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<div class=\"close-button-body\"><img href=\"#\" id=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/></div><div id=\"cookie-alert\">\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>\n</div>";
    }
    else{
        return "<h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[2] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<div class=\"close-button-body\"><img href=\"#\" id=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/></div><div id=\"cookie-alert\">\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>\n</div>";
    }
}

var number = getImage();

document.getElementById("background").innerHTML = "<img src=backgrounds/" + number + ".jpeg />";

if (navigator.cookieEnabled === false){
    document.getElementById("profile-button").innerHTML = "<button><b>Войти</b></button>";
    document.getElementsByClassName("cookie-alert-container")[0].innerHTML = alertCookie();
    document.getElementById("close-button").addEventListener("click", closeAlert)
}
else {
    document.getElementsByClassName("cookie-alert-container")[0].remove();
    document.getElementById("profile-button").innerHTML = "<button><b>Войти</b></button>";
}

