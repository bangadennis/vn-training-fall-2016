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

const colsizes = [
  {wch: 10},
  {wch: 20},
  {wch: 30},
  {wch: 40}
];

// console.log( xlsx.utils.encode_cell( {c: 2, r: 1} ) );
// console.log( xlsx.utils.encode_range( {s: {c: 0, r: 0}, e: {c: 5, r: 9}} ) );

const A1 = xlsx.utils.encode_cell( {c: 0, r: 0} );
const range = xlsx.utils.encode_range( {s: {c: 0, r: 0}, e: {c: 3, r: 1}} );

wb.Sheets["A"] = {
  [A1]: {v: "id", t: "s"},
  "B1": {v: "code", t: "s"},
  "C1": {v: "name", t: "s"},
  "D1": {v: "description", t: "s"},
  "A2": {v: 10, t: "n"},
  "B2": {v: 10, t: "n"},
  "C2": {v: 10, t: "n"},
  "D2": {v: 10, t: "n"},
  "!ref": range,
  "!cols": colsizes
};

wb.Sheets["B"] = {
  [A1]: {v: "id", t: "s"},
  "B1": {v: "code", t: "s"},
  "C1": {v: "name", t: "s"},
  "D1": {v: "description", t: "s"},
  "A2": {v: 10, t: "n"},
  "B2": {v: 10, t: "n"},
  "C2": {v: 10, t: "n"},
  "D2": {v: 10, t: "n"},
  "!ref": range,
  "!cols": colsizes
};

wb.Sheets["C"] = {
  [A1]: {v: "id", t: "s"},
  "B1": {v: "code", t: "s"},
  "C1": {v: "name", t: "s"},
  "D1": {v: "description", t: "s"},
  "A2": {v: 10, t: "n"},
  "B2": {v: 10, t: "n"},
  "C2": {v: 10, t: "n"},
  "D2": {v: 10, t: "n"},
  "!ref": range,
  "!cols": colsizes
};

xlsx.writeFile( wb, 'data.xlsx' );