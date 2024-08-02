const Categoria = [
    { Name: "+TESTARUDO", Icon: "assets/ICONS/testarudo.png", first: "JBS-Jordi", second: "AB-Albert", third: "JHG-Jose", music: "assets/categoria/Loquillo - Quiero Un Camión.mp3" },
    { Name: "+ENÉRGICO", Icon: "assets/ICONS/energ.png", first: "KRM-Kevin", second: "AEY-Adrian", third: "MSC-Maria", music: "assets/categoria/Dani Martin - Ester Expósito.mp3" },
    { Name: "+DIVERTIDO", Icon: "assets/ICONS/divert.png", first: "JCP-Jordi", second: "MDC-Mireia", third: "NDR-Nishal", music: "assets/categoria/Macarena - Original version.mp3" },
    { Name: "+ESTRATEGA", Icon: "assets/ICONS/estrat.png", first: "AEY-Adrian", second: "AB-Albert", third: "JHG-Jose", music: "assets/categoria/Rocky Balboa - Theme Song (HD).mp3" },
    { Name: "+SIMPATICO", Icon: "assets/ICONS/simp.png", first: "SYR-Silvina", second: "LSF-Laia", third: "LBS-Lara", music: "assets/categoria/Marc Anthony - Vivir Mi Vida (Letra  Lyrics) (mp3cut.net).mp3" },
    { Name: "+APLICADO", Icon: "assets/ICONS/apli.png", first: "ACC-Ariadna", second: "DOG-Daniel", third: "JBS-Jordi", music: "assets/categoria/La maquina de escribir.mp3" },
    { Name: "+TRANQUILO", Icon: "assets/ICONS/tranq.png", first: "MXC-Marc", second: "JJP-Joshua", third: "NDR-Nishal", music: "assets/categoria/Bruno Mars - The Lazy Song (Official Music Video).mp3" },
    { Name: "+OPTIMISTA", Icon: "assets/ICONS/opt.png", first: "LSF-Laia", second: "MGL-Manolo", third: "JCP-Jordi", music: "assets/categoria/EL Vega Life  Pa Vivirla (Videoclip)..mp3" },
    { Name: "+CREATIVO", Icon: "assets/ICONS/creat.png", first: "AVP-Anna", second: "MDC-Mireia", third: "NDR-Nishal", music: "assets/categoria/QUÉ IDEA! - PINO D'ANGIO (1981) En español.mp3" },
    { Name: "+EMPATICO", Icon: "assets/ICONS/empa.png", first: "MSC-Maria", second: "KRM-Kevin", third: "MPC-Marc", music: "assets/categoria/Ricky Martin - María (Video (Spanglish) (Remastered)).mp3" },
    { Name: "+GUAP@", Icon: "assets/ICONS/guap.png", first: "GFG-Gemma", second: "LBS-Lara", third: "YYZ-Yang", music: "assets/categoria/La Cabra Mecanica & María Jiménez - La Lista De La Compra (Lyric).mp3" },
    { Name: "+ASTUTO", Icon: "assets/ICONS/ast.png", first: "YYZ-Yang", second: "AB-Albert", third: "AEY-Adrian", music: "assets/categoria/PSY - GANGNAM STYLE.mp3" },
    { Name: "+COLABORATIVO", Icon: "assets/ICONS/colab.png", first: "MDC-Mireia", second: "KRM-Kevin", third: "MGL-Manolo", music: "assets/categoria/TONY RONALD - HELP (AYUDAME) (HD).mp3" },
    { Name: "+GENUINO", Icon: "assets/ICONS/gen.png", first: "LBS-Lara", second: "MSC-Maria", third: "JJP-Joshua", music: "assets/categoria/Fangoria - Espectacular (Videoclip Oficial) (mp3cut.net).mp3" },
    { Name: "+INDISCRETO", Icon: "assets/ICONS/indis.png", first: "JJP-Joshua", second: "YYZ-Yang", third: "MSC-Maria", music: "assets/categoria/Joey Montana - Picky.mp3" },
    { Name: "+PUNTUAL", Icon: "assets/ICONS/punt.png", first: "MPC-Marc", second: "DOG-Daniel", third: "MGL-Manolo", music: "assets/categoria/Jarabe De Palo - Tiempo.mp3" },
    { Name: "+EXIGENTE", Icon: "assets/ICONS/exig.png", first: "GFG-Gemma", second: "AEY-Adrian", third: "AB-Albert", music: "assets/categoria/mix_1m12s (audio-joiner.com).mp3" },
    { Name: "+TACAÑO", Icon: "assets/ICONS/tac.png", first: "AMM-Albert", second: "JJP-Joshua", third: "JBS-Jordi", music: "assets/categoria/Abba - Money, Money, Money (Official Music Video).mp3" },
    { Name: "+TIMIDO", Icon: "assets/ICONS/tim.png", first: "DOG-Daniel", second: "CPO-Cybele", third: "LBS-Lara", music: "assets/categoria/la cancion originanal de la pantera rosa.mp3" },
    { Name: "+INDEPENDIENTE", Icon: "assets/ICONS/indep.png", first: "JHG-Jose", second: "MXC-Marc", third: "JJP-Joshua", music: "assets/categoria/Himne de Catalunya - Himno de Cataluña - ELS SEGADORS (Lletra CAT - CAS) (Letra Catalán - Español).mp3" },
    { Name: "+LÍDER", Icon: "assets/ICONS/lid.png", first: "AB-Albert", second: "AEY-Adrian", third: "MDC-Mireia", music: "assets/categoria/Follow The Leader Dance.mp3" },
    { Name: "+DIPLOMATICO", Icon: "assets/ICONS/dip.png", first: "MGL-Manolo", second: "CPO-Cybele", third: "LSF-Laia", music: "assets/categoria/Himno Nacional de los Estados Unidos - National Anthem of USA (ENES Letra).mp3" },
    { Name: "+PRUDENTE", Icon: "assets/ICONS/prud.png", first: "CPO-Cybele", second: "MPC-Marc", third: "SYR-Silvina", music: "assets/categoria/Edith Piaf - Non, Je ne regrette rien.mp3" },
    { Name: "+VERSATIL", Icon: "assets/ICONS/prud.png", first: "NDR-Nishal", second: "", third: "", dep: "DIVERTIDO, ESTRATEGA, SIMPATICO, APLICADO, TRANQUILO, OPTIMISTA, CREATIVO, EMPATICO, ASTUTO,COLABORATIVO, GENUINO, INDISCRETO, DIPLOMATICO", music: "assets/categoria/Mary Poppins - Supercalifragilisticoexpialidoso (mp3cut.net).mp3" },
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
            <img src="${Categoria[j].Icon}" alt class="IconImg">
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