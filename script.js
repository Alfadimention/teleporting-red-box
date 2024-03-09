function position_change() {
    var x = document.getElementById("tiny");
    if (x.style.top == "50px" && x.style.left == "0px") {
        x.style.top = "150px";
        x.style.left = "100px";
    }
    else {
        x.style.top = "50px";
        x.style.left = "0px";
    }
}