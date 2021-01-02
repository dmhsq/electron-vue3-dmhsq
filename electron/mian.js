const { app, BrowserWindow } = require("electron");

const fs = require("fs");


function reloadTheWin(win) {
  fs.watch("./dist", event => {
    if (event == "change") {
        console.log('updating')
      win.reload();
    }
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(__dirname + "/dist/index.html");
  reloadTheWin(win);
}


app.whenReady().then(createWindow);


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


