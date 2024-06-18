// set up text to print, each item in array is new line
var aText = new Array(
    "UN FORT APLAUDIMENT PEL NOSTRE PRESENTADOR I MILLOR COMPANY I PERSONA.",
    "MOLTES GRÀCIES PER LA TEVA COL·LABORACIÓ.",
    "VOLEM EXPRESSAR QUE LA TEVA AJUDA I SUPORT DURANT TOTS AQUESTS ANYS HAN ESTAT FONAMENTALS PER TOTS NOSALTRES, SENSE DUBTE SEMPRE HAS MARCAT LA DIFERÈNCIA.",
    "LA TEVA DEDICACIÓ I COMPROMÍS SÓN ADMIRABLES.",
    "GRÀCIES DE TOT COR PER SER UNA PERSONA TAN VALUOSA.",
    "UN VERITABLE PLAER TREBALLAR JUNTS.",
    "L'equip BC");
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();