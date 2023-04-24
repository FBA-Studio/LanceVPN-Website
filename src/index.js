getImage = function (){
    var imageNum = 0;
    while(imageNum == 0){
        imageNum = Math.floor(Math.random() * 101);
    }
    return imageNum;
}

alertCookie = function(){
    var date = new Date();
    var cookie_svg_type = [ "morning", "day", "evening" ];
    if(date.getHours() >= 8 && date.getHours() < 12){
        return "<img class=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/><h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[0] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>";
    }
    else if(date.getHours() >= 12 && date.getHours() <= 18){
        return "<img class=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/><h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[1] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>";
    }
    else{
        return "<img class=\"close-button\" src=\"svg/close-buttons-icons/close-alerts-button.svg\" wight=\"15\" height=\"15\"/><h1>Cookie файлы<img src=\"svg/cookie-icon/cookie-" + cookie_svg_type[2] + ".svg\" width=\"35\" height=\"35\" align=\"center\"></h1>\n<h3>Для корректной работы сайта рекомендуем разрешить сохранение куки файлов</h3>";
    }
}

var number = getImage();

document.getElementById("background").innerHTML = "<img src=backgrounds/" + number + ".jpeg />";

if (navigator.cookieEnabled === false){
    document.getElementById("profile-button").innerHTML = "<button><b>Войти</b></button>";
    document.getElementById("cookie-alert").innerHTML = alertCookie();
}
document.getElementById("profile-button").innerHTML = "<button><b>Войти</b></button>";

document.getElementById("cookie-alert").innerHTML = alertCookie();
