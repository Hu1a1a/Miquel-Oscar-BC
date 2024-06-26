function next() {
    if (!movedown) {
        document.getElementById("music").play();
        document.getElementById("miquel").classList.add("miguelCae")
        movedown = true
    } else if (!moveup) {
        document.getElementById("miquel2").classList.remove("none")
        document.getElementById("miquel2").classList.add("miguelSube")
        moveup = true
    } else {
        window.location.href = '8.html'
    }
}

movedown = false
moveup = false