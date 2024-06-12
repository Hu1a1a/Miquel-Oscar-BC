const Categoria = [
    { Name: "+ TESTARUDO", Icon: "assets/icon/1.png", },
    { Name: "+ ENÉRGICO", Icon: "assets/icon/2.png", },
    { Name: "+ DIVERTIDO", Icon: "assets/icon/3.png", },
    { Name: "+ ESTRATEGA", Icon: "assets/icon/3.png", },
    { Name: "+ SIMPATICO", Icon: "assets/icon/3.png", },
    { Name: "+ APLICADO", Icon: "assets/icon/3.png", },
    { Name: "+ TRANQUILO", Icon: "assets/icon/3.png", },
    { Name: "+ OPTIMISTA", Icon: "assets/icon/3.png", },
    { Name: "+ CREATIVO", Icon: "assets/icon/3.png", },
    { Name: "+ EMPATICO", Icon: "assets/icon/3.png", },
    { Name: "+ GUAPO/A", Icon: "assets/icon/3.png", },
    { Name: "+ ASTUTO", Icon: "assets/icon/3.png", },
    { Name: "+ COLABORATIVO", Icon: "assets/icon/3.png", },
    { Name: "+ GENUINO", Icon: "assets/icon/3.png", },
    { Name: "+ INDISCRETO", Icon: "assets/icon/3.png", },
    { Name: "+ PUNTUAL", Icon: "assets/icon/3.png", },
    { Name: "+ EXIGENTE", Icon: "assets/icon/3.png", },
    { Name: "+ TACAÑO", Icon: "assets/icon/3.png", },
    { Name: "+ TIMIDO", Icon: "assets/icon/3.png", },
    { Name: "+ INDEPENDIENTE", Icon: "assets/icon/3.png", },
    { Name: "+ LÍDER", Icon: "assets/icon/3.png", },
    { Name: "+ DIPLOMATICO", Icon: "assets/icon/3.png", },
    { Name: "+ PRUDENTE", Icon: "assets/icon/3.png", },
]

let i = -1
const d = 12
next()
function next() {
    if (Categoria.length / d - i - 1 > 0) {
        i++
        let HTML = ""
        for (let j = i * d; j <= Math.min(Categoria.length - 1, i * d + d - 1); j++) {
            HTML +=
                `<div class="col-3">
            <img src="${Categoria[j].Icon}" alt>
            <br>
            <img src="assets/icon/inter.png" alt>
            <br>
            <br>
            <h1 class="titleIcon">${Categoria[j].Name}</h1>
            <br><br>
            </div>`
        }
        document.getElementById("categorias").innerHTML = HTML
    } else {
        window.location.href = '5.html'
    }
}