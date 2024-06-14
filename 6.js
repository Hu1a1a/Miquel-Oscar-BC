const Nominados = [
    { Name: "AB-Albert", Photo: "assets/nominado/AB.png" },
    { Name: "JBS-Jordi", Photo: "assets/nominado/JBS.jpg" },
    { Name: "MDC-Mireia", Photo: "assets/nominado/MDC.jpg" },
    { Name: "MMG-Miquel", Photo: "assets/nominado/MMG.jpg" },
    { Name: "GFG-Gemma", Photo: "assets/nominado/GFG.png" },
    { Name: "AEY-Adrian", Photo: "assets/nominado/AEY.JPG" },
    { Name: "MXC-Marc", Photo: "assets/nominado/MXC.png" },
    { Name: "MSC-Maria", Photo: "assets/nominado/MSC.png" },
    { Name: "AVP-Anna", Photo: "assets/nominado/AVP.png" },
    { Name: "LSF-Laia", Photo: "assets/nominado/LSF.png" },
    { Name: "JCP-Jordi", Photo: "assets/nominado/JCP.JPG" },
    { Name: "AMM-Albert", Photo: "assets/nominado/AMM.JPG" },
    { Name: "JHG-José", Photo: "assets/nominado/JHG.JPG" },
    { Name: "YYZ-Yang", Photo: "assets/nominado/YYZ.jpeg" },
    { Name: "KRM-Kevin", Photo: "assets/nominado/KRM.jpg" },
    { Name: "MPC-Marc Petit", Photo: "assets/nominado/MPC.JPG" },
    { Name: "MGL-Manolo", Photo: "assets/nominado/MGL.jpg" },
    { Name: "LBS-Lara", Photo: "assets/nominado/LBS.jpg" },
    { Name: "JJP-Joshua", Photo: "assets/nominado/JJP.jpg" },
    { Name: "DOG-Daniel", Photo: "assets/nominado/DOG.jpg" },
    { Name: "ACC-Ari", Photo: "assets/nominado/ACC.jpeg" },
    { Name: "CPO-Cybele", Photo: "assets/nominado/CPO.png" },
    { Name: "SYR-Silvina", Photo: "assets/nominado/SYR.PNG" },
]

const Categoria = [
    { Name: "+ TESTARUDO", Icon: "assets/ICONS/testarudo.png", Descripcion: "Persona que se mantiene firme en sus opiniones y decisiones, sin ceder fácilmente.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Loquillo - Quiero Un Camión.mp3" },
    { Name: "+ ENÉRGICO", Icon: "assets/ICONS/energ.png", Descripcion: "Persona llena de vitalidad, con gran vigor y dinamismo en todas sus acciones.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Dani Martin - Ester Expósito.mp3" },
    { Name: "+ DIVERTIDO", Icon: "assets/ICONS/divert.png", Descripcion: "Persona que irradia alegría y humor, siempre capaz de hacer reír a los demás.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Macarena - Original version.mp3" },
    { Name: "+ ESTRATEGA", Icon: "assets/ICONS/estrat.png", Descripcion: "Persona que planifica y ejecuta acciones con habilidad y visión a largo plazo.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Rocky Balboa - Theme Song (HD).mp3" },
    { Name: "+ SIMPATICO", Icon: "assets/ICONS/simp.png", Descripcion: "Persona amigable y agradable que genera simpatía y buenas relaciones con los demás.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "" },
    { Name: "+ APLICADO", Icon: "assets/ICONS/apli.png", Descripcion: "Individuo que demuestra dedicación y esfuerzo constante en sus tareas y responsabilidades.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/La maquina de escribir.mp3" },
    { Name: "+ TRANQUILO", Icon: "assets/ICONS/tranq.png", Descripcion: "Persona calmada y serena, que mantiene la paz interior en situaciones de estrés.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Bruno Mars - The Lazy Song (Official Music Video).mp3" },
    { Name: "+ OPTIMISTA", Icon: "assets/ICONS/opt.png", Descripcion: "Alguien que tiene una visión positiva y esperanzadora sobre el futuro y las situaciones.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/EL Vega Life  Pa Vivirla (Videoclip)..mp3" },
    { Name: "+ CREATIVO", Icon: "assets/ICONS/creat.png", Descripcion: "Individuo que genera ideas originales e innovadoras, aportando soluciones nuevas.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/QUÉ IDEA! - PINO D'ANGIO (1981) En español.mp3" },
    { Name: "+ EMPATICO", Icon: "assets/ICONS/empa.png", Descripcion: "Alguien que comprende y comparte los sentimientos de los demás, mostrando comprensión.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Ricky Martin - María (Video (Spanglish) (Remastered)).mp3" },
    { Name: "+ GUAPO/A", Icon: "assets/ICONS/guap.png", Descripcion: "Alguien que destaca por su atractivo físico y apariencia estética agradable.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/La Cabra Mecanica & María Jiménez - La Lista De La Compra (Lyric).mp3" },
    { Name: "+ ASTUTO", Icon: "assets/ICONS/ast.png", Descripcion: "Persona ingeniosa y hábil para resolver problemas y situaciones complejas con sagacidad.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/PSY - GANGNAM STYLE(강남스타일) MV.mp3" },
    { Name: "+ COLABORATIVO", Icon: "assets/ICONS/colab.png", Descripcion: "Individuo que trabaja bien en equipo, aportando y compartiendo ideas y esfuerzos.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/TONY RONALD - HELP (AYUDAME) (HD).mp3" },
    { Name: "+ GENUINO", Icon: "assets/ICONS/gen.png", Descripcion: "Persona auténtica y sincera, que se muestra tal como es sin fingimientos.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/" },
    { Name: "+ INDISCRETO", Icon: "assets/ICONS/indis.png", Descripcion: "Alguien que no guarda secretos ni confidencias, hablando más de lo debido.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Joey Montana - Picky.mp3" },
    { Name: "+ PUNTUAL", Icon: "assets/ICONS/punt.png", Descripcion: "Persona que respeta los horarios y llega a tiempo a compromisos y obligaciones.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Jarabe De Palo - Tiempo.mp3" },
    { Name: "+ EXIGENTE", Icon: "assets/ICONS/exig.png", Descripcion: "Individuo que demanda alta calidad y esfuerzo, tanto de sí mismo como de los demás.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/pim pam pum tengo una pistola pim pam pum que dispara sola.wmv.mp3" },
    { Name: "+ TACAÑO", Icon: "assets/ICONS/tac.png", Descripcion: "Persona que evita gastar dinero y recursos, siendo excesivamente ahorrativa.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Abba - Money, Money, Money (Official Music Video).mp3" },
    { Name: "+ TIMIDO", Icon: "assets/ICONS/tim.png", Descripcion: "Persona reservada y con dificultades para interactuar socialmente por inseguridad.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/" },
    { Name: "+ INDEPENDIENTE", Icon: "assets/ICONS/indep.png", Descripcion: "Individuo que actúa y toma decisiones por sí mismo, sin depender de otros.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Himne de Catalunya - Himno de Cataluña - ELS SEGADORS (Lletra CAT - CAS) (Letra Catalán - Español).mp3" },
    { Name: "+ LÍDER", Icon: "assets/ICONS/lid.png", Descripcion: "Persona que guía y motiva a los demás, ejerciendo influencia y dirección.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Follow The Leader Dance.mp3" },
    { Name: "+ DIPLOMATICO", Icon: "assets/ICONS/dip.png", Descripcion: "Alguien que maneja situaciones con tacto y habilidad, evitando conflictos y ofensas.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Himno Nacional de los Estados Unidos - National Anthem of USA (ENES Letra).mp3" },
    { Name: "+ PRUDENTE", Icon: "assets/ICONS/prud.png", Descripcion: "Persona que actúa con cautela y consideración, evitando riesgos innecesarios.", first: "LBS-Lara", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/Edith Piaf - Non, Je ne regrette rien.mp3" },
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
        if (!pausa && i === -1 && xxnext) {
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
            premio = premio.sort(() => Math.random() > 0.5 ? 1 : -1)
            i = i + xxxx
            document.getElementById("music").src = Categoria[i].music
            document.getElementById("music").play();
            let HTML = ""
            HTML +=
                `
            <h1 class="col-12 title" style="margin-bottom:100px"> ${Categoria[i].Name} </h1>
            <div class="col-4">
            <div class="nominado subir">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[0]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[0]]} </span>
            </div>
            </div>
            <div class="col-4">
            <div class="nominado subir">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[1]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[1]]} </span>
            </div>
            </div>
            <div class="col-4">
            <div class="nominado subir">
            <img src="assets/nominado/marco.png" alt class="marco2">
            <img src="${Nominados.find((a) => a.Name === Categoria[i][premio[2]]).Photo}" alt class="persona2">
            <br>
            <span class="subtitle"> ${Categoria[i][premio[2]]} </span>
            </div>
            </div>
            <br>
`
            //<h1 class="col-12 subtitle" style="margin: 100px 0"> ${Categoria[i].Descripcion} </h1>
            document.getElementById("nominados").innerHTML = HTML
            xxnext = false
            loading = false
        } else if (!xxnext) {
            const index1 = premio.findIndex((x) => x == "second")
            const index2 = premio.findIndex((x) => x == "third")
            setTimeout(() => {
                document.getElementsByClassName("nominado")[0].classList.remove("subir")
                document.getElementsByClassName("nominado")[1].classList.remove("subir")
                document.getElementsByClassName("nominado")[2].classList.remove("subir")
                document.getElementsByClassName("nominado")[index1].classList.add("caer")
                setTimeout(() => {
                    document.getElementsByClassName("nominado")[index2].classList.add("caer")
                    setTimeout(() => {
                        if (index1 > index2) {
                            document.getElementsByClassName("col-4")[index1].outerHTML = ""
                            document.getElementsByClassName("col-4")[index2].outerHTML = ""
                        } else {
                            document.getElementsByClassName("col-4")[index2].outerHTML = ""
                            document.getElementsByClassName("col-4")[index1].outerHTML = ""
                        }
                        document.getElementsByClassName("nominado")[0].classList.add("ganar0")
                        loading = false
                    }, 2000);
                    xxnext = true
                }, 2000);
            }, 2000);
        } else {
            window.location.href = '6.html'
        }
    }
}

window.onload = setInterval(Gameloop, 1000 / 10); //10fps

















