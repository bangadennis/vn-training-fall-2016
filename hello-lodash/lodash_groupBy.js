const _ = require( "lodash" );
const vnProv = require( "./vnProv.json" );

console.log( _.groupBy( vnProv.features, f => f.properties.parent ) );
