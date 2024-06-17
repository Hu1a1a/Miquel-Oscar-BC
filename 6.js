const Nominados = [
    { Name: "AB-Albert", Photo: "assets/nominado/AB.png" },
    { Name: "JBS-Jordi", Photo: "assets/nominado/JBS.jpg" },
    { Name: "MDC-Mireia", Photo: "assets/nominado/MDC.jpg" },
    { Name: "GFG-Gemma", Photo: "assets/nominado/GFG.png" },
    { Name: "AEY-Adrian", Photo: "assets/nominado/AEY.JPG" },
    { Name: "MXC-Marc", Photo: "assets/nominado/MXC.png" },
    { Name: "MSC-Maria", Photo: "assets/nominado/MSC.png" },
    { Name: "AVP-Anna", Photo: "assets/nominado/AVP.png" },
    { Name: "LSF-Laia", Photo: "assets/nominado/LSF.png" },
    { Name: "JCP-Jordi", Photo: "assets/nominado/JCP.JPG" },
    { Name: "AMM-Albert", Photo: "assets/nominado/AMM.JPG" },
    { Name: "JHG-Jose", Photo: "assets/nominado/JHG.JPG" },
    { Name: "YYZ-Yang", Photo: "assets/nominado/YYZ.jpeg" },
    { Name: "NDR-Nishal", Photo: "assets/nominado/NDR.jpeg" },
    { Name: "KRM-Kevin", Photo: "assets/nominado/KRM.jpg" },
    { Name: "MPC-Marc", Photo: "assets/nominado/MPC.JPG" },
    { Name: "MGL-Manolo", Photo: "assets/nominado/MGL.jpg" },
    { Name: "LBS-Lara", Photo: "assets/nominado/LBS.jpg" },
    { Name: "JJP-Joshua", Photo: "assets/nominado/JJP.jpg" },
    { Name: "DOG-Daniel", Photo: "assets/nominado/DOG.jpg" },
    { Name: "ACC-Ariadna", Photo: "assets/nominado/ACC.jpeg" },
    { Name: "CPO-Cybele", Photo: "assets/nominado/CPO.png" },
    { Name: "SYR-Silvina", Photo: "assets/nominado/SYR.PNG" },
]

const Categoria = [
    { Name: "+TESTARUDO", Icon: "assets/ICONS/testarudo.png", first: "JBS-Jordi", second: "AB-Albert", third: "JHG-Jose", music: "assets/categoria/Loquillo - Quiero Un Camión.mp3" },
    { Name: "+ ENÉRGICO", Icon: "asseºts/ICONS/energ.png", first: "KRM-Kevin", second: "AEY-Adrian", third: "MSC-Maria", music: "assets/categoria/Dani Martin - Ester Expósito.mp3" },
    { Name: "+ DIVERTIDO", Icon: "assets/ICONS/divert.png", first: "JCP-Jordi", second: "MDC-Mireia", third: "NDR-Nishal", music: "assets/categoria/Macarena - Original version.mp3" },
    { Name: "+ ESTRATEGA", Icon: "assets/ICONS/estrat.png", first: "AEY-Adrian", second: "AB-Albert", third: "JHG-Jose", music: "assets/categoria/Rocky Balboa - Theme Song (HD).mp3" },
    { Name: "+ SIMPATICO", Icon: "assets/ICONS/simp.png", first: "SYR-Silvina", second: "LSF-Laia", third: "LBS-Lara", music: "assets/categoria/Marc Anthony - Vivir Mi Vida (Letra  Lyrics) (mp3cut.net).mp3" },
    { Name: "+ APLICADO", Icon: "assets/ICONS/apli.png", first: "ACC-Ariadna", second: "DOG-Daniel", third: "JBS-Jordi", music: "assets/categoria/La maquina de escribir.mp3" },
    { Name: "+ TRANQUILO", Icon: "assets/ICONS/tranq.png", first: "MXC-Marc", second: "JJP-Joshua", third: "NDR-Nishal", music: "assets/categoria/Bruno Mars - The Lazy Song (Official Music Video).mp3" },
    { Name: "+ OPTIMISTA", Icon: "assets/ICONS/opt.png", first: "LSF-Laia", second: "MGL-Manolo", third: "JCP-Jordi", music: "assets/categoria/EL Vega Life  Pa Vivirla (Videoclip)..mp3" },
    { Name: "+ CREATIVO", Icon: "assets/ICONS/creat.png", first: "AVP-Anna", second: "MDC-Mireia", third: "NDR-Nishal", music: "assets/categoria/QUÉ IDEA! - PINO D'ANGIO (1981) En español.mp3" },
    { Name: "+ EMPATICO", Icon: "assets/ICONS/empa.png", first: "MSC-Maria", second: "KRM-Kevin", third: "MPC-Marc", music: "assets/categoria/Ricky Martin - María (Video (Spanglish) (Remastered)).mp3" },
    { Name: "+ GUAPO/A", Icon: "assets/ICONS/guap.png", first: "GFG-Gemma", second: "LBS-Lara", third: "YYZ-Yang", music: "assets/categoria/La Cabra Mecanica & María Jiménez - La Lista De La Compra (Lyric).mp3" },
    { Name: "+ ASTUTO", Icon: "assets/ICONS/ast.png", first: "YYZ-Yang", second: "AB-Albert", third: "AEY-Adrian", music: "assets/categoria/PSY - GANGNAM STYLE(강남스타일) MV.mp3" },
    { Name: "+ COLABORATIVO", Icon: "assets/ICONS/colab.png", first: "MDC-Mireia", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/TONY RONALD - HELP (AYUDAME) (HD).mp3" },
    { Name: "+ GENUINO", Icon: "assets/ICONS/gen.png", first: "LBS-Lara", second: "MSC-Maria", third: "JJP-Joshua", music: "assets/categoria/Fangoria - Espectacular (Videoclip Oficial) (mp3cut.net).mp3" },
    { Name: "+ INDISCRETO", Icon: "assets/ICONS/indis.png", first: "JJP-Joshua", second: "YYZ-Yang", third: "MSC-Maria", music: "assets/categoria/Joey Montana - Picky.mp3" },
    { Name: "+ PUNTUAL", Icon: "assets/ICONS/punt.png", first: "MPC-Marc", second: "DOG-Daniel", third: "MGL-Manolo", music: "assets/categoria/Jarabe De Palo - Tiempo.mp3" },
    { Name: "+ TACAÑO", Icon: "assets/ICONS/tac.png", first: "AMM-Albert", second: "JJP-Joshua", third: "JBS-Jordi", music: "assets/categoria/Abba - Money, Money, Money (Official Music Video).mp3" },
    { Name: "+ TIMIDO", Icon: "assets/ICONS/tim.png", first: "DOG-Daniel", second: "CPO-Cybele", third: "LBS-Lara", music: "assets/categoria/la cancion originanal de la pantera rosa.mp3" },
    { Name: "+ INDEPENDIENTE", Icon: "assets/ICONS/indep.png", first: "JHG-Jose", second: "MXC-Marc", third: "JJP-Joshua", music: "assets/categoria/Himne de Catalunya - Himno de Cataluña - ELS SEGADORS (Lletra CAT - CAS) (Letra Catalán - Español).mp3" },
    { Name: "+ LÍDER", Icon: "assets/ICONS/lid.png", first: "AB-Albert", second: "AEY-Adrian", third: "MDC-Mireia", music: "assets/categoria/Follow The Leader Dance.mp3" },
    { Name: "+ DIPLOMATICO", Icon: "assets/ICONS/dip.png", first: "MGL-Manolo", second: "CPO-Cybele", third: "LSF-Laia", music: "assets/categoria/Himno Nacional de los Estados Unidos - National Anthem of USA (ENES Letra).mp3" },
    { Name: "+ PRUDENTE", Icon: "assets/ICONS/prud.png", first: "CPO-Cybele", second: "MPC-Marc", third: "SYR-Silvina", music: "assets/categoria/Edith Piaf - Non, Je ne regrette rien.mp3" },
    { Name: "+ VERSATIL", Icon: "assets/ICONS/prud.png", first: "NDR-Nishal", second: "", third: "", music: "assets/categoria/Mary Poppins - Supercalifragilisticoexpialidoso (mp3cut.net).mp3" },
    { Name: "+ EXIGENTE", Icon: "assets/ICONS/exig.png", first: "GFG-Gemma", second: "AB-Albert", third: "AEY-Adrian", music: "assets/categoria/mix_1m12s (audio-joiner.com).mp3" },
]

let i = -1
let xxnext = true
let loading = false
let pausa = false
let premio = ["first", "second", "third"].sort((a, b) => Math.random() > 0.5 ? 1 : -1)

next(1)
function next(xxxx) {
    document.getElementById("music").play();
    if (!loading) {
        loading = true
        if (!pausa && i > 11 && xxnext) {
            console.log(2)

            pausa = true
            document.getElementById("nominados").innerHTML = `
            <h1 class="title">
            PAUSA DE 10 MIN!
            </h1>
            <br><br>
            <img src='assets/media/mapex.png' style='height:60vh'>
            `
            setTimeout(() => {
                document.getElementById("nominados").innerHTML = `
                <h1 class="title">
                PAUSA DE 10 MIN!
                </h1>
                <br><br>
                <img src='assets/media/leonardo.jpeg' style='height:60vh'>
                `
            }, 2.5 * 60 * 1000);
            setTimeout(() => {
                document.getElementById("nominados").innerHTML = `
                <h1 class="title">
                VOLVEMOS EN
                </h1>
                <br><br>
                <video src='assets/media/TEMPER.mp4' id='timer' style='height:60vh'>
                `
                window.onload = setInterval(xxx, 1000 / 10);
                function xxx() {
                    document.getElementById("timer").play();
                    document.getElementById("timer").mute();
                }
            }, 4.2 * 60 * 1000);
            document.getElementById("music").src = "assets/media/PAUSA.mp3"
            document.getElementById("music").play();
            loading = false
        } else if (Categoria.length - 1 > i && xxnext) {
            console.log(1)
            premio = premio.sort(() => Math.random() > 0.5 ? 1 : -1)
            i = i + xxxx
            document.getElementById("music").src = Categoria[i].music
            document.getElementById("music").play();
            let HTML = ""
            HTML +=
                `
            <h1 class="col-12 title" style="margin-bottom:100px"> ${Categoria[i].Name} BC </h1>
            <div class="col-3">
            <div class="nominado subir0">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[0]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[0]]} </span>
            </div>
            </div>
            <div class="col-3">
            <div class="nominado subir1">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[1]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[1]]} </span>
            </div>
            </div>
            <div class="col-3">
            <div class="nominado subir2">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[2]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[2]]} </span>
            </div>
            </div>
            <br>`
            //<h1 class="col-12 subtitle" style="margin: 100px 0"> ${Categoria[i].Descripcion} </h1>
            document.getElementById("nominados").innerHTML = HTML
            xxnext = false
            loading = false
            console.log(4)
        } else if (!xxnext) {
            console.log(3)
            const index1 = premio.findIndex((x) => x == "second")
            const index2 = premio.findIndex((x) => x == "third")
            setTimeout(() => {
                document.getElementsByClassName("nominado")[0].classList.remove("subir0")
                document.getElementsByClassName("nominado")[1].classList.remove("subir1")
                document.getElementsByClassName("nominado")[2].classList.remove("subir2")
                document.getElementsByClassName("nominado")[index1].classList.add("caer")
                setTimeout(() => {
                    document.getElementsByClassName("nominado")[index2].classList.add("caer")
                    setTimeout(() => {
                        if (index1 > index2) {
                            document.getElementsByClassName("col-3")[index1].outerHTML = ""
                            document.getElementsByClassName("col-3")[index2].outerHTML = ""
                        } else {
                            document.getElementsByClassName("col-3")[index2].outerHTML = ""
                            document.getElementsByClassName("col-3")[index1].outerHTML = ""
                        }
                        document.getElementsByClassName("nominado")[0].classList.add("ganar0")
                        loading = false
                    }, 2000);
                    xxnext = true
                }, 2000);
            }, 2000);
        } else {
            window.location.href = '7.html'
        }
    }
}

window.onload = setInterval(Gameloop, 1000 / 10); //10fps

















