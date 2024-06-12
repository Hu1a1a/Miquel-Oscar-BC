const Categoria = [
    { Name: "+ TESTARUDO", Icon: "assets/icon/1.png", Dep: "asdfdsafa dsfas fasdfd das" },
    { Name: "+ ENÉRGICO", Icon: "assets/icon/2.png", Dep: "asf fadsfas a" },
    { Name: "+ DIVERTIDO", Icon: "assets/icon/3.png", Dep: "sadfs adfasfa fasfasd" },
    { Name: "+ ESTRATEGA", Icon: "", Dep: "" },
    { Name: "+ SIMPATICO", Icon: "", Dep: "" },
    { Name: "+ APLICADO", Icon: "", Dep: "" },
    { Name: "+ TRANQUILO", Icon: "", Dep: "" },
    { Name: "+ OPTIMISTA", Icon: "", Dep: "" },
    { Name: "+ CREATIVO", Icon: "", Dep: "" },
    { Name: "+ EMPATICO", Icon: "", Dep: "" },
    { Name: "+ GUAPO/A", Icon: "", Dep: "" },
    { Name: "+ ASTUTO", Icon: "", Dep: "" },
    { Name: "+ COLABORATIVO", Icon: "", Dep: "" },
    { Name: "+ GENUINO", Icon: "", Dep: "" },
    { Name: "+ INDISCRETO", Icon: "", Dep: "" },
    { Name: "+ PUNTUAL", Icon: "", Dep: "" },
    { Name: "+ EXIGENTE", Icon: "", Dep: "" },
    { Name: "+ TACAÑO", Icon: "", Dep: "" },
    { Name: "+ TIMIDO", Icon: "", Dep: "" },
    { Name: "+ INDEPENDIENTE", Icon: "", Dep: "" },
    { Name: "+ LÍDER", Icon: "", Dep: "" },
    { Name: "+ DIPLOMATICO", Icon: "", Dep: "" },
    { Name: "+ PRUDENTE", Icon: "", Dep: "" },
]

let i = -1
next()
function next() {
    if (Categoria.length / 3 - i - 1 > 0) {
        i++
        for (let j = 0; j <= 2; j++) {
            document.getElementById("icon" + (j + 1)).src = ""
            document.getElementById("inter" + (j + 1)).src = ""
            document.getElementById("title" + (j + 1)).innerText = ""
            document.getElementById("dep" + (j + 1)).innerText = ""
        }

        for (let j = i * 3; j <= Math.min(Categoria.length - 1, i * 3 + 2); j++) {
            document.getElementById("icon" + (j - i * 3 + 1)).src = Categoria[j].Icon
            document.getElementById("inter" + (j - i * 3 + 1)).src = "assets/icon/inter.png"
            document.getElementById("title" + (j - i * 3 + 1)).innerText = Categoria[j].Name
            document.getElementById("dep" + (j - i * 3 + 1)).innerText = Categoria[j].Dep
        }
    } else {
        window.location.href = '4.html'
    }
}