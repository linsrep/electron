const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem, Tray, nativeImage } = require('electron/main')
const path = require('node:path')

let tray

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 780,
    center: true,
    autoHideMenuBar: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegrationInWorker: true
    },
    icon: "./assets/images/favicons/favicon.ico",
  })

  win.loadFile('index.html')
}

/**
 * Novos Códigos Inserir Aqui
 * 
 */

// DARK, LIGHT OR SYSTEM MODE
ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

// Menu
const menu = new Menu()
menu.append(new MenuItem(
  {
    label: 'Sistema',
    submenu: [{
      role: 'Menu',
      accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
      click: () => {
        console.log('Welcome to the fuckin test')
      }
    }]
  }
))

Menu.setApplicationMenu(menu)

// Funções das Janelas
app.whenReady().then(createWindow).then(() => {
  // Apresenta o Tray Icon na barra de tarefa
  const icon = nativeImage.createFromPath('./assets/images/favicons/favicon.ico')
  tray = new Tray(icon)

  // Menu do Tray
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Perfil 1', type: 'radio', checked: true },
    { label: 'Perfil 2', type: 'radio' },
    { label: 'Perfil 3', type: 'radio' },
  ])

  tray.setContextMenu(contextMenu)
  tray.setToolTip('Minha Aplicação')
  tray.setTitle('Este É o Título')
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})