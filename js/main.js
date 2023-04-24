var moonDom = document.getElementById("moonDom");
moonDom.onclick = function () {
    document.getElementById("moonDom").style.display = "none";
    document.getElementById("body").classList.add("themeDom");
    document.getElementById("sunDom").style.display = "inline-block";
}

var sunDom = document.getElementById("sunDom");
sunDom.onclick = function () {
    document.getElementById("sunDom").style.display = "none";
    document.getElementById("moonDom").style.display = "inline-block";
    document.getElementById("body").classList.remove("themeDom");
}