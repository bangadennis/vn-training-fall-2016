const _ = require( "lodash" );

const students = [
  {id: 1, name: "Student 1"},
  {id: 1, name: "Student 1"},
  {id: 1, name: "Student 1"},
  {id: 2, name: "Student 2"},
  {id: 2, name: "Student 2"},
  {id: 2, name: "Student 2"}
];

console.log( _.uniqBy( students, s => s.id ) );