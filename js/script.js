setInterval(function ativar() {
    // Variaveis Globais
    const divdia = document.querySelector("div#dia")
    const divdata = document.querySelector("div#data")
    const divfrase = document.querySelector("div#frase")
    const divhora = document.querySelector("div#hora")
    const dt = new Date()


    // Variaveis para o formato da DATA
    var data = dt.getDate()
    var mes = dt.getMonth()
    var ano = dt.getFullYear()
    if (data.toString().length == 1) { data = '0' + data }
    if (mes.toString().length == 1) { mes = '0' + mes }

    divdata.innerHTML = `${data}/${mes}/${ano}`

    // Variavel para dia da Semana
    var dia = dt.getDay()

    switch (dia) {
        case 0:
            divdia.innerHTML = "DOMINGO"
            break
        case 1:
            divdia.innerHTML = "SEGUNDA-FEIRA"
            break
        case 2:
            divdia.innerHTML = "TERÇA-FEIRA"
            break
        case 3:
            divdia.innerHTML = "QUARTA-FEIRA"
            break
        case 4:
            divdia.innerHTML = "QUINTA-FEIRA"
            break
        case 5:
            divdia.innerHTML = "SEXTA-FEIRA"
            break
        case 6:
            divdia.innerHTML = "SÁBADO"
            break
        default:
            divdia.innerHTML = "DESCULPE, ALGO ESTÁ ERRADO!"
            break
    }

    // Variavel para formato da HORA + mudança de background
    var h = dt.getHours()
    var min = dt.getMinutes()
    var seg = dt.getSeconds()
    
    if (h < 10) { h = '0' + h }
    if (min < 10) { min = '0' + min }
    if (seg < 10) { seg = '0' + seg }

    divhora.innerHTML = `<strong>${h}:${min}</strong>`


    if (h >= 6 && h < 13) {
        divfrase.innerHTML = "BOM DIA"
    } else if (h >= 13 && h < 18) {
        divfrase.innerHTML = "BOA TARDE"
    } else if (h >= 18 && h < 23) {
        divfrase.innerHTML = "BOA NOITE"
    } else {
        divfrase.innerHTML = "BOA MADRUGADA"
    }

    var bkg = document.getElementById("bkg")
    

    switch (h) {
        case '00':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(0,0,12,1) 80%, rgba(21,8,0,1) 100%);"
            break
        case '01':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(0,0,12,1) 0%, rgba(0,0,12,1) 0%);"
            break
        case '02':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(2,1,17,1) 85%, rgba(25,22,33,1) 100%);"
            break
        case '03':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(2,1,17,1) 60%, rgba(32,32,44,1) 100%);"
            break
        case '04':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(2,1,17,1) 10%, rgba(58,58,82,1) 100%);"
            break
        case '05':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(32,32,44,1) 0%, rgba(81,81,117,1) 100%);"
            break
        case '06':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(64,64,92,1) 0%, rgba(111,113,170,1) 80%, rgba(138,118,171,1) 100%);"
            break
        case '07':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(74,73,105,1) 0%, rgba(112,114,171,1) 50%, rgba(205,130,160,1) 100%);"
            break
        case '08':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(117,122,191,1) 0%, rgba(133,131,190,1) 60%, rgba(234,176,209,1) 100%);"
            break
        case '09':
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(130,173,219,1) 0%, rgba(235,178,177,1) 100%);"
            break
        case 10:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(148,197,248,1) 1%, rgba(166,230,255,1) 70%, rgba(177,181,234,1) 100%);"
            break
        case 11:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(183,234,255,1) 0%, rgba(148,223,255,1) 100%);"
            break
        case 12:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(155,226,254,1) 0%, rgba(103,209,251,1) 100%);"
            break
        case 13:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(144,223,254,1) 0%, rgba(56,163,209,1) 100%);"
            break
        case 14:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(87,193,235,1) 0%, rgba(36,111,168,1) 100%);"
            break
        case 15:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(45,145,194,1) 0%, rgba(30,82,142,1) 100%);"
            break
        case 16:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(36,115,171,1) 0%, rgba(30,82,142,1) 70%, rgba(91,121,131,1) 100%);"
            break
        case 17:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(30,82,142,1) 0%, rgba(38,88,137,1) 50%, rgba(157,166,113,1) 100%);"
            break
        case 18:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(30,82,142,1) 0%, rgba(114,138,124,1) 50%, rgba(233,206,93,1) 100%);"
            break
        case 19:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(21,66,119,1) 0%, rgba(87,110,113,1) 30%, rgba(225,196,94,1) 70%, rgba(178,99,57,1) 100%);"
            break
        case 20:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(22,60,82,1) 0%, rgba(79,79,71,1) 30%, rgba(197,117,45,1) 60%, rgba(183,73,15,1) 80%, rgba(47,17,7,1) 100%);"
            break
        case 21:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(7,27,38,1) 0%, rgba(7,27,38,1) 30%, rgba(138,59,18,1) 80%, rgba(36,14,3,1) 100%);"
            break
        case 22:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(1,10,16,1) 30%, rgba(89,35,11,1) 80%, rgba(47,17,7,1) 100%);"
            break
        case 23:
            bkg.style.cssText = "background: linear-gradient(0deg, rgba(9,4,1,1) 50%, rgba(75,29,6,1) 100%);"
            break
    }


})