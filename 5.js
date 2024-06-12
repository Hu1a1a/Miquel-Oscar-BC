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
    { Name: "MGL-Manolo", Photo: "assets/nominado/KRM.jpg" },
    { Name: "LBS-Lara", Photo: "assets/nominado/LBS.jpg" },
    { Name: "JJP-Joshua", Photo: "assets/nominado/JJP.jpg" },
    { Name: "DOG-Daniel", Photo: "assets/nominado/DOG.jpg" },
    { Name: "ACC-Ari", Photo: "assets/nominado/ACC.jpeg" },
    { Name: "CPO-Cybele", Photo: "assets/nominado/CPO.png" },
    { Name: "SYR-Silvina", Photo: "assets/nominado/SYR.PNG" },
]

let HTML = ""
for (const nominado of Nominados) {
    HTML += `
    <div class="nominado">
    <img src="assets/nominado/marco.png" alt class="marco">
    <img src="${nominado.Photo}" alt class="persona">
    </div>`
}
document.getElementById("nominados").innerHTML = HTML




















