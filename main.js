const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window

app.on('ready',() => {
  window = new BrowserWindow({
    show: false,
    backgroundColor: '#12252b',
    webPreferences: {
      webgl: true,
      experimentalFeatures: true,
      webSecurity: false,
    }
  })

  const startUrl = process.env.APP_URL || url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true,
  })

  window.loadURL(startUrl)
  window.setMenu(null)
  window.maximize()
  window.show()
  window.webContents.openDevTools()

  window.on('closed',() => {
    window = null
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('active',() => {
  if (window != null) {
    createWindow()
  }
})