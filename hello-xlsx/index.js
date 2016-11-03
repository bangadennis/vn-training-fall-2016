// https://github.com/SheetJS/js-xlsx/blob/master/tests/write.js
const xlsx = require( "xlsx" );

class Workbook {
  constructor() {
    this.SheetNames = [];
    this.Sheets = {};
  }
}

const wb = new Workbook();

wb.SheetNames.push( "A" );
wb.SheetNames.push( "B" );
wb.SheetNames.push( "C" );

const A1 = xlsx.utils.encode_cell( {c: 0, r: 0} );
const range = xlsx.utils.encode_range( {s: {c: 0, r: 0}, e: {c: 0, r: 0}} );

wb.Sheets["A"] = {
  [A1]: {v: 10, t: 'n'},
  "!ref": range
};

wb.Sheets["B"] = {
  [A1]: {v: 20, t: 'n'},
  "!ref": range
};

wb.Sheets["C"] = {
  [A1]: {v: 30, t: 'n'},
  "!ref": range
};

xlsx.writeFile( wb, 'data.xlsx' );
