const turnOnOff = document.getElementById('turnOnOff');

const lampara = document.getElementById('lampara');

function isLampBroken() {
    return lampara.src.indexOf('broke' ) > -1;
}
function lampOn() {
    if (!lampIsBroken()) {
        lampara.src = './img/on.jpg';
    }
}
function lampOff() {
    if (!lampIsBroken()) {
        lampara.src = './img/off.jpg';
    }
}

function lampIsBroken() {
    lampara.src = './img/broke.jpg'
};

function lampOnOff() {
    if (turnOnOff.textContent == 'on') {
        lampOn();
        turnOnOff.textContent = 'off';
    } else {
        lampOff();
        turnOnOff.textContent = 'on';
    }
}
turnOnOff.addEventListener('click', lampOnOff);

lampara.addEventListener('mouseover', lampOn);
lampara.addEventListener('mouseleave', lampOff);
lampara.addEventListener('dblclick', lampIsBroken);
