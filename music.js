
function Gameloop() {
    document.getElementById("music").play();
}
window.onload = setInterval(Gameloop, 1000 / 10); //10fps
