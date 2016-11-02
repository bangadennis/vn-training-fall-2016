const _ = require( "lodash" );

const strings1 = [
  "hello",
  "world",
  "a",
  "b",
  "adfadlkjfalkjfa"
];

const strings2 = [
  "hello",
  "world",
  "a",
  "b",
  "adfadlkjfalkjfa"
];

strings1.forEach( (s1, idx) => {
  const s2 = strings2[idx];
  // console.log( s1, s2 );
  // console.log( _.padEnd( s1, 20, ' ' ), _.padEnd( s2, 20, ' ' ) );
  // console.log( _.padStart( s1, 20, ' ' ), _.padStart( s2, 20, ' ' ) );
  console.log( _.pad( s1, 20, ' ' ), _.pad( s2, 20, ' ' ) );
} );