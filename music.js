
function Gameloop() {
    document.getElementById("music").play();
    if (!document.getElementById("music").paused) document.getElementById("music").style.visibility = "unset";
}

window.onload = setInterval(Gameloop, 1000 / 10); 
