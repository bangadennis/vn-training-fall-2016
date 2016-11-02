const _ = require( "lodash" );

const makeArray = o => _.isArray( o ) ? o : [o];

console.log( makeArray( 123 ) );
console.log( makeArray( [1, 2, 3] ) );

