

document.querySelector('button').addEventListener('click', calculateTVDChange)

const pi = Math.PI
function degreesToRadians(degrees) {
    let pi = Math.PI;
return degrees * (pi/180);
}

function radiansToDegrees(radians) {
return radians * (180 / pi)
}


function calculateTVDChange(){
let inc = Number(document.querySelector('#inc').value)
let dip = Math.abs(inc -90)
let verticalSection = Number(document.querySelector('#vs').value)

let startTVD = Number(document.querySelector('#TVD').value)

function radiansToDegrees(radians) {
return radians * (180 / pi)
}

let tvdChange = Math.tan(degreesToRadians(dip)) * verticalSection;

if (inc === 90) {finalTVD = startTVD
} else if ( inc > 90) { finalTVD = startTVD - tvdChange 
}else { finalTVD = startTVD + tvdChange}
finalTVD = finalTVD.toFixed(2)
document.querySelector('h3').innerText =`${finalTVD}`
}




const pi = Math.PI
function degreesToRadians(degrees) {
    let pi = Math.PI;
return degrees * (pi/180);
}

function radiansToDegrees(radians) {
return radians * (180 / pi)
}



let md1 = 0
let md2 = 900
let deltaMD = md2 - md1
let inc1 = 0
let inc2 = 90
let azi1 =0
let azi2 = 90
let aziDiff = azi2 - azi1
let incDiff = inc2 - inc1

let dls = 10
let inc1R = degreesToRadians(inc1)
//console.log(inc1R)
let inc2R = degreesToRadians(inc2)
//console.log(inc2R)
let azi1R = degreesToRadians(azi1)
//console.log(azi1R)
let azi2R = degreesToRadians(azi2)
//console.log(azi2R)
let dlsR = degreesToRadians(dls)
//console.log(dlsR)
let aziDelta = degreesToRadians(azi2 - azi1)
let sinInc1 = radiansToDegrees(Math.sin(inc1R))
//let cosInc1 = 0
if( inc1 > 89.994 && inc2 < 90.004 ) {cosInc1 = 0 
}else { cosInc1 = radiansToDegrees(Math.cos(inc1R))}

let sinInc2 = radiansToDegrees(Math.sin(inc2R))
if( inc2 > 89.994 && inc2 < 90.004) {cosInc2 = 0 
}else { cosInc2 = radiansToDegrees(Math.cos(inc2R))}

if (azi1 < 0.004 || azi1 > 359.994 || Math.abs(azi1 - 180) < 0.004 && Math.abs(azi1 - 180) > -0.004) {sinAzi1 = 0
}else{let sinAzi1 = radiansToDegrees(Math.sin(azi1R))}
let cosAzi1 = radiansToDegrees(Math.cos(azi1R))
let sinAzi2 = radiansToDegrees(Math.sin(azi2R))
let cosAzi2 = radiansToDegrees(Math.cos(azi2R))

let cosAziDelta = radiansToDegrees(Math.cos(aziDelta))
let tanDls = radiansToDegrees(Math.tan(dlsR))


let calcDL = radiansToDegrees(Math.acos(degreesToRadians((sinInc1 * sinInc2 * cosAziDelta) + (cosInc1 * cosInc2))))

let calcDLS = (calcDL * 100) / deltaMD
let rfDlsTan = radiansToDegrees(Math.tan(degreesToRadians(calcDL/2)))

if ( aziDiff  === 0 && incDiff === 0 ){
let rf = rfDlsTan * (180/ pi) * (2 / calcDL)
}else {let rf = 1}

let north = ((sinInc1 * cosAzi1) + (sinInc2 * cosAzi2)) * (rf * (deltaMD/2))

let east =  ((sinInc1 * sinAzi1) + (sinInc2 * sinAzi2))* (rf * (deltaMD/2))

let TVD =   (cosInc1 + cosInc2) * (rf *(deltaMD/ 2))




console.log(north)
console.log(east)
console.log(TVD)
console.log(calcDLS)