const projectName = "Utilitários"
const projectDescription = "Este app consiste em abranger os mais diversos calculos e ultilitários em um só lugar, com ele você pode realizar calculos específicos instantaneamente, com sua vasta variedade não há a necessidade de baixar um app para tal função."
const storeLink = "https://play.google.com/store/apps/details?id=com.rslima.utilitarios"
function appName() {
    document.write(projectName)
};
function appDescription() {
    document.write(projectDescription)
};

function openStore() {
    document.write("<a href=\"" + storeLink + "\">" +
        "<img src=\"assets/images/playstore.png\"  />" +
        "<div><span>Baixe Agora</span><strong>Google Play</strong></div></a > ")
};
