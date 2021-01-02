const {ipcRenderer} = require('electron')
window.addEventListener("contextmenu",()=>{
    ipcRenderer.send('ss');
})
