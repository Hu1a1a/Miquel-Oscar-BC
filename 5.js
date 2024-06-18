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


let HTML = ""
let i = 0
setNominado(i)
function setNominado() {
    setTimeout(() => {
        document.getElementById("nominados").innerHTML = document.getElementById("nominados").innerHTML +
            `
        <div class="nominado">
        <img src="assets/nominado/marco.png" alt class="marco">
        <img src="${Nominados[i].Photo}" alt class="persona">
        <br>
        <span class="subtitle"> ${Nominados[i].Name} </span>
        </div>
        `
        if (i < Nominados.length - 1) setNominado(i++)
    }, 250);
}


