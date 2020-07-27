//Se crea la aplicacion electron
const { app, BrowserWindow } = require("electron");
const path = require("path");

//Definicion de las dimension de la ventana o formulario
function crearVentanaPrincipal() {
  let ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ventanaPrincipal.loadFile("index.html");
}

//desde el objeto app se invoca la funcion when ready
app.whenReady().then(crearVentanaPrincipal);

//Para cerrar toda la aplicación
app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});

//Abrir la aplicacion
app.on("activate", function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    crearVentanaPrincipal();
  }
});
