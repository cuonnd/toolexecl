/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
const XLSX = require('xlsx');

const EXTENSIONS =
  'xls|xlsx|xlsm|xlsb|xml|csv|txt|dif|sylk|slk|prn|ods|fods|htm|html|numbers'.split(
    '|'
  );
class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('open-dialog', async (event, arg) => {
  try {
    const o = await dialog.showOpenDialog({
      title: 'Select a file',
      filters: [
        {
          name: 'Spreadsheets',
          extensions: EXTENSIONS,
        },
      ],
      properties: ['openFile'],
    });
    if (o.filePaths.length == 0) throw new Error('No file was selected!');
    const data = process_wb(XLSX.readFile(o.filePaths[0]));

    console.log('data', data);

    event.reply('on-excel-data', data);
  } catch (err) {
    console.log('errror', err);
  }
});

function process_wb(wb) {
  let data: any = [];
  wb.SheetNames.forEach(function (sheetName) {
    const json = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {
      editable: true,
    });

    // console.log('htmlstr', json);
    data.push(json);
  });

  return data;
}

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 595,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

const path = require('path');
const fs = require('fs');

// Importing BrowserWindow from Main

// var filepath1 = path.join(__dirname, '/pdf/');
var desktopPath = app.getPath('desktop');

var filepath1 = desktopPath + '/pdf/';
if (!fs.existsSync(filepath1)) {
  fs.mkdirSync(filepath1);
}
var options = {
  marginsType: 0,
  pageSize: 'A4',
  printBackground: true,
  printSelectionOnly: false,
  landscape: false,
  preferCSSPageSize: true,
};

ipcMain.on('exportPDF', async (event, arg:any[]) => {
  // let win = BrowserWindow.getAllWindows()[0];
  var filepath2 = desktopPath + `/pdf/${arg[1]}/`;
  if (!fs.existsSync(filepath2)) {
    fs.mkdirSync(filepath2);
  }
  console.log(arg, 'pat5');
  let win = BrowserWindow.getFocusedWindow();
  win.webContents
    .printToPDF(options)
    .then((data) => {
      setTimeout(() => {
        fs.writeFile(filepath2 + `${arg[0]}` + '.pdf', data, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('PDF Generated Successfully');
          }
        });
      }, 10000);
    })
    .catch((error) => {
      console.log(error);
    });
});
ipcMain.on('openFolder', async (event, arg) => {
  let pathOpen = desktopPath + '/pdf/';
  if (process.platform !== 'darwin') {
    pathOpen = desktopPath + '\\' + 'pdf';
  }
  shell.openPath(pathOpen);
});
