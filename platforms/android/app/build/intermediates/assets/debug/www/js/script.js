function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function checkInfo(){
    var model = device.model;
    var platform = device.platform;
    var version = device.version;
    var uuid = device.uuid;
    var langue = navigator.globalization.getPreferredLanguage(function (language){    
            alert('- Modèle: ' + model + '\n- Langue: ' + language.value + "\n- Système d'exploitation: " + platform+'\n- Version: ' + version + '\n- UUID: ' + uuid);
        },
        function () {
            alert('Error getting language\n');
        }
    ); 
    StatusBar.backgroundColorByHexString("c9963d");
}

function checkBattery(status) {
    var Blevel = status.level;
    var IsPlugged = status.isPlugged;
    alert("Niveau de batterie : " + Blevel + "%. Branché ? " + IsPlugged);
}

function checkBatteryCritical(status) {
    var Blevel = status.level;
    alert("Niveau de batterie critique : " + Blevel + "%\nRechargez au plus vite !");
}

document.addEventListener("deviceready",checkConnection,false);
document.addEventListener("deviceready",checkInfo,false);

document.addEventListener("batterystatus",checkBattery,false);
document.addEventListener("batterycritical",checkBatteryCritical,false);