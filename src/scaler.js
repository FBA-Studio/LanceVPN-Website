var link = document.getElementById("scaler");

const artibut = "href";
const scale_styles = { pc: "pc-style", tablet: "tablet-style", mobile: "mobile-style" };
const format = ".css";

window.addEventListener("resize", AutoScale);

AutoScale();

function AutoScale(){
    let width = window.innerWidth;

    if(width >= 1024){
        ResizeSite("pc");
    }
    else if(width > 667 && width < 1024){
        ResizeSite("tablet");
    }
    else if(width < 667){
        ResizeSite("mobile");
    }
}

function ResizeSite(form){
    link.setAttribute(artibut, "styles/" + scale_styles[form] + format)
}