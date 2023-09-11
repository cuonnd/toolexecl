import moment from 'moment';

export const Utils = {
  printPdf(name: any[]) {
    window.electron.ipcRenderer.sendMessage('exportPDF', name);
    console.log('run okx', name);
  },
  opernFolder() {
    window.electron.ipcRenderer.sendMessage('openFolder', name);
  },

  getDate(numberDate: number = 0) {
    // const date1 = new Date(Date.UTC(0, 0, numberDate - 1));
    const date = moment('01/01/1900').add(numberDate - 2, 'days');

    return date?.format('DD/MM/YYYY');
  },

  convertNumber(num: number) {
    if (num === 1) {
      return num * 100;
    } else {
      return (Number.parseFloat(num)?.toFixed(4) * 100).toFixed(1);
    }
  },

  convertDate(num: any) {
    if (typeof num === 'number') {
      return this.getDate(num);
    } else {
      return num;
    }
  },

  checkData(data: []) {
    return data?.map((item) => (typeof item === 'undefined' ? 0 : item));
  },
};
