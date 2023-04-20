const { BrowserWindow, app } = require("electron");

const createWindow = () => {
    const mainWindow = new BrowserWindow();
    mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow()
})


app.on("window-all-closed", () => {
    // app.quit();
    if (process.platform !== 'darwin') {
        app.quit();
    }
})


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})